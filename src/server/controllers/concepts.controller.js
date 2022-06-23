"use-strict";

import Concept from "../models/Concept.model.js";
import Language from "../models/Language.model.js";
import Language_Concept from "../models/Language_Concept.model.js";
import { Validator } from "../utils/Validator.js";

//¨ Associations

//* Define the relation between Languages and Concepts tables
// A language belongs to Many category
Language.belongsToMany(Concept, { through: Language_Concept, foreignKey: "id_language", otherKey: "id_concept", onDelete: "CASCADE" });

// A language belongs to Many category
Concept.belongsToMany(Language, { through: Language_Concept, foreignKey: "id_concept", otherKey: "id_language", onDelete: "CASCADE" });

//¨ Controllers

//* @ POST /api/concepts/create
//* @ Add new concept
async function AddConcept(req, res) {
  let { name, value, languages } = req.body;

  // Control name, value and languages
  if (!Validator.name(name)) return res.status(400).send({ error: "Error the name isn't valid !" });
  if (!Validator.note(value)) return res.status(400).send({ error: "Error the note isn't valid !" });
  if (!Validator.languages(languages)) return res.status(400).send({ error: "Error languages isn't valid !" });

  // Find concept with this name and build it if not exist
  let concept = await Concept.findOrBuild({ where: { name }, defaults: { name, value }, raw: true })
  if (!concept[1]) return res.status(400).send({ error: `Concept '${name}' already in database !` });

  // Control if each language is in database
  let { count } = await Language.findAndCountAll({ where: { id_language: languages }, raw: true })
  if (count != languages.length) return res.status(400).send({ error: "Error a languages do not exist !" });

  // Save the concept in the tabel
  concept = await concept[0].save()

  // Insert all jointure in Language_Concept table
  let bulk = languages.map(v => { return { id_concept: concept.id_concept, id_language: v } })
  let jointure = await Language_Concept.bulkCreate(bulk);

  // Send response to the client
  res.status(201).send({ concept, jointure });
}

//* @ DELETE /api/concepts/delete/:pk
//* @ Remove a concept
async function DeleteConcept(req, res) {
  let { pk } = req.params;

  // Control primaryKey
  if (!Validator.num(pk)) return res.status(400).send({ error: `The primaryKey '${pk}' isn't a number !` })

  // Delete the concept with it primaryKey
  let result = await Concept.destroy({ where: { id_concept: pk } });

  // Send the response to the client
  if (result) res.status(200).send({ result: `Concept '${pk}' has been deleted succesfully !` })
  else res.status(404).send({ result: `Concept '${pk}' hasn't been find !` });
}

//* @ PUT /api/concepts/update
//* @ Update a concept
async function UpdateConcept(req, res) {
  let { pk, name, value } = req.body;

  // Control primaryKey, name and note
  if (!Validator.num(pk)) return res.status(400).send({ error: `The primaryKey '${pk}' isn't a number !` })
  if (!Validator.name(name)) return res.status(400).send({ error: "Error the name isn't valid !" });
  if (!Validator.note(value)) return res.status(400).send({ error: "Error the note isn't valid !" });

  // Update the concept with it primaryKey
  let result = await Concept.update({ name, value }, { where: { id_concept: pk } });

  // Send the response to the client
  if (result[0]) res.status(200).send({ result: `Concept '${pk}' has been update succesfully !` })
  else res.status(404).send({ result: `Concept '${pk}' hasn't been find !` });
}

//* @ GET /api/concepts/:pk
//* @ Get all concepts of a language with it primaryKey
async function GetAllConceptsByLanguage(req, res) {
  let { pk } = req.params;

  // Control primaryKey
  if (!Validator.num(pk)) return res.status(400).send({ error: `The primaryKey '${pk}' isn't a number !` })

  // Find all concepts related to a language using the primaryKey
  let result = await Language_Concept.findAll({ where: { id_language: pk }, attributes: ["id_concept"], raw: true });
  result = result.map(v => v.id_concept)

  // Control if the language exist or has concepts
  if (!result[0]) res.status(404).send({ error: `Language '${pk}' hasn't been find or doesn't have concepts !` });

  // Find all concepts with id
  let concepts = await Concept.findAll({ where: { id_concept: result }, raw: true })

  // Send response to the client
  res.status(200).send({ result: concepts });
}

//* @ GET /api/concepts/
//* @ Get all concepts
async function GetAllConcepts(req, res) {
  let result = await Concept.findAll({ attributes: [["id_concept", "id"], "name", "value"], raw: true, });

  // Send response to the client
  if (result[0]) res.status(200).send({ result })
  else res.status(404).send({ result: `Error concept hasn't been find !` });
}

export {
  AddConcept,
  DeleteConcept,
  UpdateConcept,
  GetAllConcepts,
  GetAllConceptsByLanguage,
};
