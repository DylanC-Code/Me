"use-strict";

import Language from "../models/Language.model.js";
import Note from "../models/Note.model.js";
import Concept from "../models/Concept.model.js";
import Language_Concept from "../models/Language_Concept.model.js";

//* @ DELETE /api/notes/delete/:pk
//* @ Delete a concept with primaryKey
async function DeleteNote(req, res) {
  //~ Delete note with it primaryKey
  let { pk } = req.params;
  let index = await Note.destroy({ where: { id_note: pk } });

  //~ Send response to the client
  index
    ? res
        .status(200)
        .send({ index: `Note '${pk}' has been delete succesfully !` })
    : res.status(404).send({ index: `Note '${pk}' hasn't been find !` });
}

//* @ PUT /api/notes/update/
//* @ Update a concept
async function UpdateConcept(req, res) {
  //~ Find and update note with its primaryKey
  let { pk, percentage } = req.body;
  let index = await Note.update({ percentage }, { where: { id_note: pk } });

  //~ Send response to the client
  index[0]
    ? res
        .status(200)
        .send({ index: `Note '${pk}' has been update succesfully !` })
    : res.status(404).send({ index: `Note '${pk}' hasn't been find !` });
}

//* @ GET /api/notes/
//* @ Get the average for each category
async function GetAllCategories(req, res) {
  //~ Get all the languages by category, return languages primary_Key and id cat
  let languages = await Language.findAll({
    attributes: ["id_language", "id_category"],
    raw: true,
  });

  //~ Create a map object
  let notes = new Map();
  //~ Fill the object with id-cat as key and the associated notes
  for (const l of languages) {
    let id_category = l.id_category;

    //~ Find the value in the object having the index as Id_cat
    let index = notes.get(id_category);

    //~ Get the last upadted note for each language
    let note = await Note.findOne({
      where: { id_language: l.id_language },
      attributes: ["percentage"],
      order: [["date", "DESC"]],
      raw: true,
    });

    //~ Regroup notes by category
    if (index && note) {
      index.push(note.percentage);
      notes.delete(id_category);
      notes.set(id_category, index);
    } //~ If id_cat doesnt match an index, a new index is created with it's note
    else if (note) notes.set(id_category, [note.percentage]);
  }

  let result = [];
  //~ Calcul the average value of each category
  for (let [k, v] of notes) {
    let average = 0;
    for (const n of v) average += n;
    average /= v.length;

    result.push([k, average]);
  }
  //~ Send the response to the client
  result[0]
    ? res.status(200).send({ result })
    : res.status(404).send({ result: `Data hasn't been find !` });
}

//* @ GET /api/notes/category/:pk
//* @ Get langyages and their notes by category
async function GetLanguagesOfCategory(req, res) {
  //~ Get all the languages with id_category
  let { id_category } = req.params;
  let languages = await Language.findAll({
    where: { id_category },
    attributes: { exclude: ["id_category"] },
    raw: true,
  });

  let result = [];

  //~ Get notes, dates for each languages push them in an array [key=>value]
  for (const v of languages) {
    let id_language = v.id_language;
    let notes = await Note.findAll({
      where: { id_language },
      attributes: ["percentage", "date"],
      raw: true,
    });

    result.push([v.name, notes]);
  }

  //~ Send the response to the client
  result
    ? res.status(200).send({ result })
    : res.status(404).send({ result: `Data hasn't been find !` });
}

//* @ GET /api/notes/language/:pk
//* @ Get each concepts with its value for a language
async function GetConceptsOfLanguage(req, res) {
  //~ Get all id_concept with its id_language
  let { id_language } = req.params;
  let id_concepts = await Language_Concept.findAll({
    where: { id_language },
    raw: true,
    attributes: ["id_concept"],
  });

  //~ Get name and value for each concept with its primaryKey
  let result = [];
  for (const v of id_concepts) {
    let concept = await Concept.findByPk(v.id_concept, {
      attributes: { exclude: ["id_concept"] },
      raw: true,
    });
    result.push(concept);
  }

  //~ Send response to the client
  result[0]
    ? res.status(200).send({ result })
    : res.status(404).send({
        result: `Concepts for language '${id_language}' hasn't been find !`,
      });
}

//~Export all the function created in this present file to whatever other file would ask for.
export {
  DeleteNote,
  UpdateConcept,
  GetAllCategories,
  GetLanguagesOfCategory,
  GetConceptsOfLanguage,
};
