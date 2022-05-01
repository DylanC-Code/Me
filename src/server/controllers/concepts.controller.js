"use-strict";

import Concept from "../models/Concept.model.js";
import Language from "../models/Language.model.js";
import Language_Concept from "../models/Language_Concept.model.js";

//^ Different association between the tables
Language.belongsToMany(Concept, {
  through: Language_Concept,
  foreignKey: "id_language",
  otherKey: "id_concept",
});
Concept.belongsToMany(Language, {
  through: Language_Concept,
  foreignKey: "id_concept",
  otherKey: "id_language",
});

//# CONTROLLERS
//#############

//* @ POST /api/concepts/create
//* @ Add new concept
async function AddConcept(req, res) {
  //~ Find concept with this name and create if not exist
  let { name, value } = req.body;
  let result = await Concept.findOrCreate({
    where: { name },
    defaults: { name, value },
  });

  //~ Send response to the client
  result[1]
    ? res.status(201).send({ result: result[0] })
    : res
        .status(400)
        .send({ result: `Concept '${name}' already in database !` });
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
    : res.status(404).send({ result: `Concept '${pk}' hasn't been found !` });
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
    : res.status(404).send({ result: `Concept '${pk}' hasn't been found !` });
}

//* @ GET /api/concepts/:pk
//* @ Get all concepts of a language with it primaryKey
async function GetAllConcepts(req, res) {}

export { AddConcept, DeleteConcept, UpdateConcept, GetAllConcepts };
