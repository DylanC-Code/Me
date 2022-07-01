"use-strict";

import Language from "../models/Language.model.js";
import Note from "../models/Note.model.js";
import Concept from "../models/Concept.model.js";
import Language_Concept from "../models/Language_Concept.model.js";
import Category from "../models/Category.model.js";
import { Validator } from "../utils/Validator.js";

//¨ Controllers

//* @ DELETE /api/notes/delete/:pk
//* @ Delete a concept with primaryKey
async function DeleteNote(req, res) {
  let { pk } = req.params;

  // Control primaryKey
  if (!Validator.num(pk)) return res.status(400).send({ error: `The primaryKey '${pk}' isn't a number !` })

  // Delete note with it primaryKey
  let result = await Note.destroy({ where: { id_note: pk } });

  // Send response to the client
  if (result) res.status(200).send({ index: `Note '${pk}' has been delete succesfully !` })
  else res.status(404).send({ index: `Note '${pk}' hasn't been find !` });
}

//* @ PUT /api/notes/update/
//* @ Update a concept
async function UpdateConcept(req, res) {
  let { pk, percentage } = req.body;

  // Control primaryKey and percentage
  if (!Validator.num(pk)) return res.status(400).send({ error: `The primaryKey '${pk}' isn't a number !` })
  if (!Validator.percentage(percentage)) return res.status(400).send({ error: `The percentage '${percentage}' isn't valid !` })

  // Find and update note with its primaryKey
  let result = await Note.update({ percentage }, { where: { id_note: pk } });

  // Send response to the client
  if (result[0]) res.status(200).send({ result: `Note '${pk}' has been update succesfully !` })
  else res.status(404).send({ error: `Note '${pk}' hasn't been find !` });
}

//* @ GET /api/notes/
//* @ Get the average for each category
async function GetAllCategories(req, res) {
  let categories = await Category.findAll({ raw: true })

  // Create a map object
  let notes = new Map();
  categories.forEach((v) => { notes.set(v.id_category, { name: v.name, note: [] }) });

  // Get all the languages by category, return languages primary_Key and id cat
  let languages = await Language.findAll({ attributes: ["id_language", "id_category"], raw: true, });

  // Fill the object with id-cat as key and the associated notes
  for (const l of languages) {
    let { id_category, id_language } = l;

    // Find the value in the object having the index as Id_cat
    let index = notes.get(id_category);

    // Get the last upadted note for each language
    let note = await Note.findOne({ where: { id_language }, attributes: ["percentage"], order: [["date", "DESC"]], raw: true, });

    // Regroup notes by category
    if (index && note) {
      index.note.push(note.percentage);
      notes.delete(id_category);
      notes.set(id_category, index);
    } // If id_cat doesnt match an index, a new index is created with it's note
    else if (note) notes.set(id_category, [note.percentage]);
  }


  let result = [];
  // Calcul the average value of each category
  for (let [k, v] of notes) {
    let average = 0;
    for (const n of v.note) n ? average += n : 0;
    v.note.length ? average /= v.note.length : 0

    result.push([k, average]);
  }


  for (let [k, v] of result) {
    let note = notes.get(k)
    notes.delete(k)
    note.note = v
    note.id = k
    notes.set(k, note)
  }

  result = Array.from(notes.values())

  // Send the response to the client
  result
    ? res.status(200).send({ result })
    : res.status(404).send({ result: `Data hasn't been find !` });
}

//* @ GET /api/notes/category/:pk
//* @ Get languages and their notes by category
//TODO Refactor maybe
async function GetLanguagesOfCategory(req, res) {
  // Get all the languages with id_category
  let { id_category } = req.params;
  console.log(id_category);
  let languages = await Language.findAll({ where: { id_category }, attributes: { exclude: ["id_category"] }, raw: true });

  let result = [];

  // Get notes, dates for each languages push them in an array [key=>value]
  for (const v of languages) {
    let { id_language } = v
    let request = await Note.findAll({
      where: { id_language }, attributes: ["percentage", "date", ["id_language", "id"]], raw: true,
    })

    // !
    let month = new Date().getMonth()

    let notes = request.filter(v => {
      let m = v.date.split("-")[1]
      let ok = false
      for (let i = 1; i < 4; i++) {
        let tolerance = 12 - i
        if (month - i < 1 && m > tolerance) ok = true
        if (m >= month - i && m <= month) ok = true
      }
      if (ok) return v
    })
    // !

    let dates = notes.map(v => parseDate(v.date))
    notes = notes.map(v => v.percentage)

    result.push({ name: v.name, notes, dates, id: id_language })
  }

  // Send the response to the client
  result
    ? res.status(200).send({ result })
    : res.status(404).send({ result: `Data hasn't been find !` });
}

//* @ GET /api/notes/language/:pk
//* @ Get each concepts with its value for a language
//TODO Refactor maybe
async function GetConceptsOfLanguage(req, res) {
  // Get all id_concept with its id_language
  let { id_language } = req.params;
  let id_concepts = await Language_Concept.findAll({
    where: { id_language },
    raw: true,
    attributes: ["id_concept"],
  });

  // Get name and value for each concept with its primaryKey
  let result = [];
  for (const v of id_concepts) {
    let concept = await Concept.findByPk(v.id_concept, {
      attributes: { exclude: ["id_concept"] },
      raw: true,
    });
    result.push(concept);
  }

  // Send response to the client
  result[0]
    ? res.status(200).send({ result })
    : res.status(404).send({
      result: `Concepts for language '${id_language}' hasn't been find !`,
    });
}

/**
 * Parse date in format (Month:"long" ,Year:"numeric")
 * Return date
 * ## Upgrade performance with this
 * ## https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
 * @param  { Number } date 
 */

function parseDate(date) {
  let d = Date.parse(date)
  d = new Date(d)
  let options = {
    month: "long",
    year: "numeric",
  }
  d = d.toLocaleDateString("en-EN", options)
  return d
}

//Export all the function created in this present file to whatever other file would ask for.
export {
  DeleteNote,
  UpdateConcept,
  GetAllCategories,
  GetLanguagesOfCategory,
  GetConceptsOfLanguage,
};
