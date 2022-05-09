"use-strict";

import User from "../models/User.model.js";
import bcrypt from "bcrypt";
import session from "express-session";

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
  let { pk, username } = req.body;

  //~ Update user with its primaryKey
  let result = User.update({ username }, { where: { id_user: pk } });

  //~ Send response to the client
  result
    ? res
        .status(201)
        .send({ result: `User '${pk}' has been succesfully update !` })
    : res.status(400).send({ result: `User '${pk}' hasn't been find !` });
}

//* @ POST /api/user/login/
//* @ Log the admin user
async function Login(req, res) {
  let { username, password } = req.body;

  //~ Find user with its username
  let user = await User.findOne({
    where: { username },
    attributes: ["password"],
    raw: true,
  });

  //~ If the request return an user, test his password
  let result;
  if (user) result = bcrypt.compareSync(password, user.password);
  else result = false;

  //~ Send response to the client
  result ? res.status(200).send({ result }) : res.status(400).send({ result });
}

export { CreateUser, DeleteUser, UpdateUser, Login };
