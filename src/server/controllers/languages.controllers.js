"use-strict";

import Category from "../models/Category.model.js";
import Language from "../models/Language.model.js";
import Note from "../models/Note.model.js";
import { Validator } from "../utils/Validator.js";

//¨ Associations

//* Define the relation between Categories and Languages tables
// A category has many languages
Category.hasMany(Language, { foreignKey: { name: "id_category", allowNull: false }, onDelete: "CASCADE", });

// A language belongs to category
Language.belongsTo(Category, { foreignKey: "id_category", onDelete: "CASCADE", });

//* Define the relation between Languages and Notes tables
// A language has many notes
Language.hasMany(Note, { foreignKey: { name: "id_language" }, onDelete: "CASCADE", });

// A note belongs to language
Note.belongsTo(Language, { foreignKey: "id_language", onDelete: "CASCADE" });

//¨ Controllers

//* @ POST /api/languages/create
//* @ Add new language in database
async function AddLanguage(req, res) {
  let { name, id_category } = req.body;

  // Control name 
  if (!Validator.name(name)) return res.status(400).send({ error: "Error the name isn't valid !" });
  if (!Validator.num(id_category)) return res.status(400).send({ error: `The id_category '${id_category}' isn't a number !` })

  // Find language with the name or create it
  let result = await Language.findOrCreate({ where: { name }, defaults: { name, id_category, logo: `${name}.svg` }, raw: true, });

  // Send response to the client
  if (result[1]) res.status(201).send({ result: result[0] })
  else res.status(400).send({ error: `${name} already save in database !` });
}

//* @ DELETE /api/languages/delete/:pk
//* @ Delete a language
async function DeleteLanguage(req, res) {
  let { pk } = req.params;

  // Control primaryKey
  if (!Validator.num(pk)) return res.status(400).send({ error: `The id_category '${pk}' isn't a number !` })

  //~ Delete language with primaryKey
  let result = await Language.destroy({ where: { id_language: pk } });

  //~ Send response to the client
  if (result) res.status(200).send({ result: `The language has been delete succesfully !` })
  else res.status(404).send({ result: `Language ${pk} hasn't found !` });
}

//* @ PUT /api/languages/update/
//* @ Update a language
async function UpdateLanguage(req, res) {
  let { pk, name, id_category } = req.body;

  //~ Find language with the primaryKey and update it
  let result = await Language.update(
    { name, id_category, logo: `${name}.svg` },
    { where: { id_language: pk } }
  );

  //~ Send response to the client
  result[0]
    ? res.status(200).send({ result: `${name} has been update succesfully !` })
    : res.status(404).send({ result: `Language ${pk} hasn't been found !` });
}

//* @ GET /api/languages/:pk
//* @ Get all languages of the primaryKey category
async function GetAllLanguagesByCategory(req, res) {
  let { pk } = req.params;

  //~ Find languages with the primaryKey category
  let result = await Language.findAll({
    where: { id_category: pk },
    attributes: ["id_language", "name"],
    raw: true,
  });

  //~ Send response to the client
  result[0]
    ? res.status(200).send({ result })
    : res.status(404).send({
      result: `Category '${pk}' hasn't been found or do not contain languages !`,
    });
}

//* @ GET /api/languages/
//* @ Get all languages
async function GetAllLanguages(req, res) {
  //~ Find languages with the primaryKey category
  let result = await Language.findAll({
    // order: [["id_language", "ASC"]],
    attributes: [["id_language", "id"], "name"],
    raw: true,
  });

  //~ Send response to the client
  result[0]
    ? res.status(200).send({ result })
    : res.status(404).send({
      result: `Error languages hasn't been find ! `,
    });
}

export {
  GetAllLanguagesByCategory,
  GetAllLanguages,
  DeleteLanguage,
  AddLanguage,
  UpdateLanguage,
};
