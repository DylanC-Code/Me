"use-strict";

import User from "../models/User.model.js";

//* @ POST /api/user/create
//* @ Create an user
async function CreateUser(req, res) {
  //~ Find with username if user already exist and create it
  let { username, password } = req.body;
  let result = await User.findOrCreate({
    where: { username },
    defaults: { username, password },
    raw: true,
  });

  //~ Send response to the client
  result[1]
    ? res.status(201).send({ result: result[0] })
    : res.status(400).send({ result: `User '${username}' already exist !` });
}

//* @ DELETE /api/user/delete/:pk
//* @ Delete an user
async function DeleteUser(req, res) {
  //~ Delete an user its primaryKey
  let { pk } = req.params;
  let result = await User.destroy({ where: { id_user: pk } });

  //~ Send response to the client
  result
    ? res
        .status(201)
        .send({ result: `User '${pk}' has been succesfully delete !` })
    : res.status(400).send({ result: `User '${pk}' hasn't been find !` });
}

//* @ PUT /api/user/update/
//* @ Update an user
async function UpdateUser(req, res) {
  let { pk, username, password } = req.body;

  //~ Update user with its primaryKey
  let result = User.update({ username }, { where: { id_user: pk } });

  //~ Send response to the client
  result
    ? res
        .status(201)
        .send({ result: `User '${pk}' has been succesfully update !` })
    : res.status(400).send({ result: `User '${pk}' hasn't been find !` });
}

export { CreateUser, DeleteUser, UpdateUser };
