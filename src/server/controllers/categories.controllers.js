"use-strict";

import Category from "../models/Category.model.js";
import Language from "../models/Language.model.js";
import { Validator } from "../utils/Validator.js";

//¨ Associations

//* Define the relation between Categories and Languages tables
// A category has many languages
Category.hasMany(Language, { foreignKey: { name: "id_category", allowNull: false }, onDelete: "CASCADE", });

// A language belongs to category
Language.belongsTo(Category, { foreignKey: "id_category", onDelete: "CASCADE", });

//¨ Controllers

//* @ POST /api/categories/create
//* @ Add new category
async function CreateCategory(req, res) {
  let { name } = req.body;

  // Control the category name
  if (!Validator.name(name)) return res.status(400).send({ error: "Error the name isn't valid !" });

  // Find or create new category
  let category = await Category.findOrCreate({ where: { name }, defaults: { name }, raw: true, });

  // Return a response after create the category
  if (category[1]) res.status(201).send({ result: `${name} as been add succesfully !` })
  else res.status(404).send({ error: `${name} already exist !`, error: true });
}

//* @ DELETE /api/categories/delete/:pk
//* @ Delete a category
async function DeleteCategory(req, res) {
  let { pk } = req.params;

  // Control the primaryKey
  if (!Validator.num(pk)) return res.status(400).send({ error: `The primaryKey '${pk}' isn't a number !` })

  // Delete the category with it primaryKey
  let result = await Category.destroy({ where: { id_category: pk } });

  // Send response to the client
  if (result) res.status(200).send({ result: `Category '${pk}' has been delete succesfully !` })
  else res.status(404).send({ error: `Category '${pk}' hasn't been found !` });
}

//* @ PUT /api/categories/update
//* @ Update a category
async function UpdateCategory(req, res) {
  let { pk, name } = req.body;

  // Control name and primaryKey 
  if (!Validator.name(name)) return res.status(400).send({ error: "Error the name isn't valid !" });
  if (!Validator.num(pk)) return res.status(400).send({ error: `The primaryKey '${pk}' isn't a number !` })

  // Find the category with it primaryKey and update it
  let result = await Category.update({ name }, { where: { id_category: pk } });

  // Send the response to the client
  if (result[0]) res.status(200).send({ result: `Category '${name}' has been update succesfully !` })
  else res.status(404).send({ error: `Category '${pk}' hasn't been found !` });
}

//* @ GET /api/categories
//* @ Get all categories and count its languages
async function GetAllCategories(req, res) {
  // Find all instances in table categories
  let result = await Category.findAll({ raw: true, attributes: [["id_category", "id"], "name"] });

  // Add for each category the number of associated languages
  for (let v of result) v.languages = await Language.count({ where: { id_category: v.id } })

  // Send the response to the client
  if (result[0]) res.status(200).send({ result })
  else res.status(404).send({ error: "Categories hasn't been found !" });
}

export { CreateCategory, DeleteCategory, UpdateCategory, GetAllCategories };
