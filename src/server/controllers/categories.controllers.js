"use-strict";

import Category from "../models/Category.model.js";

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

//* @ GET /api/categories
//* @ Get all categories
async function GetAllCategories(req, res) {
  //~ Find all instances in table categories
  let result = await Category.findAll({ raw: true });

  //~ Return response to the client
  result[0]
    ? res.status(200).send({ result })
    : res.status(404).send({ result: "Nothing has been find !" });
}

//* @ GET /api/categories/:pk
//* @ Get one category
async function GetCategory(req, res) {
  //~ Find with primary key
  let { pk } = req.params;
  let result = await Category.findByPk(pk, { raw: true });

  //~ Return response to the client
  result
    ? res.status(200).send({ result })
    : res.status(404).send({ result: "Nothing has been find !" });
}

export { CreateCategory, GetAllCategories, GetCategory };
