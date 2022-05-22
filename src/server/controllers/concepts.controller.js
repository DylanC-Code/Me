"use-strict";

import Concept from "../models/Concept.model.js";
import Language from "../models/Language.model.js";
import Language_Concept from "../models/Language_Concept.model.js";

//^ Different association between the tables
Language.belongsToMany(Concept, {
  through: Language_Concept,
  foreignKey: "id_language",
  otherKey: "id_concept",
  onDelete: "CASCADE",
});
Concept.belongsToMany(Language, {
  through: Language_Concept,
  foreignKey: "id_concept",
  otherKey: "id_language",
  onDelete: "CASCADE",
});

//# CONTROLLERS
//#############

//* @ POST /api/concepts/create
//* @ Add new concept
async function AddConcept(req, res) {
  //~ Find concept with this name and create if not exist
  let { name, value, languages } = req.body;
  let result = await Concept.findOrCreate({
    where: { name },
    defaults: { name, value },
  });

  if (result[1]) {
    //~ Get pk of the new concept
    let { id_concept } = result[0].dataValues;
    let bulk = [];

    //~ Bulk create ont the language_concept table
    for (let l of languages) bulk.push({ id_concept, id_language: l });
    let jointure = await Language_Concept.bulkCreate(bulk);

    //~ Send response to the client
    res.status(201).send({ result: result[0], jointure });
  } else
    res.status(400).send({ result: `Concept '${name}' already in database !` });
}

//* @ DELETE /api/concepts/delete/:pk
//* @ Remove a concept
async function DeleteConcept(req, res) {
  //~ Delete the concept with it primaryKey
  let { pk } = req.params;
  let result = await Concept.destroy({ where: { id_concept: pk } });

  //~ Send the response to the client
  result
    ? res
        .status(200)
        .send({ result: `Concept '${pk}' has been deleted succesfully !` })
    : res.status(404).send({ result: `Concept '${pk}' hasn't been find !` });
}

//* @ PUT /api/concepts/update
//* @ Update a concept
async function UpdateConcept(req, res) {
  //~ Update the concept with it primaryKey
  let { pk, name, value } = req.body;

  let result = await Concept.update(
    { name, value },
    { where: { id_concept: pk } }
  );

  //~ Send the response to the client
  result[0]
    ? res
        .status(200)
        .send({ result: `Concept '${pk}' has been update succesfully !` })
    : res.status(404).send({ result: `Concept '${pk}' hasn't been find !` });
}

//* @ GET /api/concepts/:pk
//* @ Get all concepts of a language with it primaryKey
async function GetAllConceptsByLanguage(req, res) {
  //~ Find all concepts related to a language using the primaryKey
  let { pk } = req.params;
  let result = await Language_Concept.findAll({
    where: { id_language: pk },
    attributes: ["id_concept"],
    raw: true,
  });

  //~ Controll if the language exist or has concepts
  if (result[0]) {
    let concept = [];
    for (let c in result)
      concept.push(await Concept.findByPk(result[c].id_concept, { raw: true }));

    //~ Send response to the client
    res.status(200).send({ result: concept });
  } else
    res.status(404).send({
      result: `Language '${pk}' hasn't been find or doesn't have concepts !`,
    });
}

//* @ GET /api/concepts/
//* @ Get all concepts
async function GetAllConcepts(req, res) {
  let result = await Concept.findAll({
    attributes: [["id_concept", "id"], "name", "value"],
    raw: true,
  });

  //~ Send response to the client
  result[0]
    ? res.status(200).send({ result })
    : res.status(404).send({ result: `Error concept hasn't been find !` });
}

export {
  AddConcept,
  DeleteConcept,
  UpdateConcept,
  GetAllConcepts,
  GetAllConceptsByLanguage,
};
