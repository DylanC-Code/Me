"use-strict";

import Category from "../models/Category.model.js";
import Language from "../models/Language.model.js";

//^ Different association between the tables

Category.hasMany(Language, { foreignKey: "id_category" });
Language.belongsTo(Category, { foreignKey: "id_category" });

//# CONTROLLERS
//#############

//* @ POST /api/languages/create
//* @ Add new language in database
async function AddLanguage(req, res) {
  let { name, id_category } = req.body;

  //~ Control if the language name is not exist and create them
  let result = await Language.findOrCreate({
    where: { name },
    defaults: { name, id_category },
    raw: true,
  });

  //~ Send response to the client
  result[1]
    ? res.status(201).send({ result: result[0] })
    : res.status(400).send({ result: `${name} already save in database !` });
}

//* @ DELETE /api/languages/delete/:pk
//* @ Delete a language
async function DeleteLanguage(req, res) {
  //~ Find language and get the name with primaryKey
  let { pk } = req.params;
  let { name } = await Language.findByPk(pk, {
    attributes: ["name"],
    raw: true,
  });

  //~ Delete it with primaryKey
  let result = await Language.destroy({ where: { id_language: pk } });

  //~ Send response to the client
  result
    ? res
        .status(200)
        .send({ result: `Language : '${name}' has been delete succesfully !` })
    : res.status(404).send({ result: `Language ${pk} has not found !` });
}

//* @ PUT /api/languages/update/
//* @ Update a language
async function UpdateLanguage(req, res) {
  let { pk, name, id_category } = req.body;

  //~ Find language with the primaryKey and update it
  let result = await Language.update(
    { name, id_category },
    { where: { id_language: pk } }
  );

  //~ Send response to the client
  result[0]
    ? res.status(200).send({ result: `${name} has been update succesfully !` })
    : res.status(404).send({ result: `Language ${pk} hasn't been found !` });
}

//* @ GET /api/languages/:pk
//* @ Get all languages of the primaryKey category
async function GetAllLanguages(req, res) {
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

export { GetAllLanguages, DeleteLanguage, AddLanguage, UpdateLanguage };
