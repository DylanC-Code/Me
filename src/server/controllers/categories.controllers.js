"use-strict";

import Category from "../models/Category.model.js";
import Language from "../models/Language.model.js";

//* @ POST /api/categories/create
//* @ Create new category
async function CreateCategory(req, res) {
  let { name } = req.body;

  //~ Control name is not undefined
  if (name) {
    //~ Find or create new instance
    let category = await Category.findOrCreate({
      where: { name },
      defaults: { name },
      raw: true,
    });

    //~ Return response to the client
    category[1]
      ? res.status(201).send({ result: `${name} as been add succesfully !` })
      : res.status(404).send({ result: `${name} already exist !` });
  } else res.status(400).send({ result: "Error category is undefined !" });
}

//* @ DELETE /api/categories/delete/:pk
//* @ Delete category
async function DeleteCategory(req, res) {
  //~ Find the name of category with it primaryKey
  let { pk } = req.params;
  let name = await Category.findByPk(pk, {
    attributes: ["name"],
    raw: true,
  });

  //~ Delete the category with it primaryKey
  let result = await Category.destroy({ where: { id_category: pk } });

  //~ Send response to the client
  result
    ? res
        .status(200)
        .send({ result: `Category '${name.name}' has been delete !` })
    : res.status(404).send({ result: `Category '${pk}' hasn't been found !` });
}

//* @ GET /api/categories
//* @ Get all categories
async function UpdateCategory(req, res) {
  //~ Find the category with it primaryKey and update it
  let { pk, name } = req.body;
  let result = await Category.update({ name }, { where: { id_category: pk } });

  //~ Send the response to the client
  result[0]
    ? res
        .status(200)
        .send({ result: `Category '${name}' has been update succesfully !` })
    : res.status(404).send({ result: `Category '${pk}' hasn't been found !` });
}

//* @ GET /api/categories
//* @ Get all categories and count its languages
async function GetAllCategories(req, res) {
  //~ Find all instances in table categories
  let result = await Category.findAll({ raw: true });

  //~ Add number of languages for each category
  for (const c of result)
    c.languages = await Language.count({
      where: { id_category: c.id_category },
    });

  //~ Send the response to the client
  result[0]
    ? res.status(200).send({ result })
    : res.status(404).send({ result: "Nothing has been find !" });
}

export { CreateCategory, DeleteCategory, UpdateCategory, GetAllCategories };
