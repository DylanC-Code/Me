"use-strict";

import User from "../models/User.model.js";
import bcrypt from "bcrypt";
import { Validator } from "../utils/Validator.js";

//¨ Controllers

//* @ POST /api/user/create
//* @ Create an user
async function CreateUser(req, res) {
  let { username, password } = req.body;

  // Control username and password
  if (!Validator.username(username)) return res.status(400).send({ error: `The username '${username} isn't valid !'` })
  if (typeof password != "string") return res.status(400).send({ error: `The password '${password} isn't valid !'` })

  // Find with username if user already exist and create it
  let result = await User.findOrCreate({ where: { username }, defaults: { username, password }, raw: true, });

  // Send response to the client
  if (result[1]) res.status(201).send({ result: result[0] })
  else res.status(400).send({ error: `User '${username}' already exist !` });
}

//* @ DELETE /api/user/delete/:pk
//* @ Delete an user
async function DeleteUser(req, res) {
  let { pk } = req.params;

  // Control primaryKey
  if (!Validator.num(pk)) return res.status(400).send({ error: `The primaryKey '${pk}' isn't a number !` })

  // Delete an user its primaryKey
  let result = await User.destroy({ where: { id_user: pk } });

  // Send response to the client
  if (result) res.status(201).send({ result: `User '${pk}' has been succesfully delete !` })
  else res.status(400).send({ error: `User '${pk}' hasn't been find !` });
}

//* @ PUT /api/user/update/
//* @ Update an user
async function UpdateUser(req, res) {
  let { username, new_user, password } = req.body;

  // Control username and password
  if (!Validator.username(username)) return res.status(400).send({ error: `The username '${username} isn't valid !'` })
  if (typeof password != "string") return res.status(400).send({ error: `The password isn't valid` })

  // Update user with its primaryKey
  let user = await User.findOne({ where: { username } });
  let valid = await user.validPassword(password, user.password)

  if (!valid) return res.status(400).send({ error: `The password isn't correct !` })

  user = await user.update({ username: new_user })

  // Send response to the client
  if (user) res.status(201).send({ result: `User '${username}' has been succesfully update !` })
  else res.status(400).send({ error: `User '${username}' hasn't been find !` });
}

//* @ POST /api/user/login/
//* @ Log the admin user
async function Login(req, res) {
  let { username, password } = req.body;

  // Control username and password
  if (!Validator.username(username)) return res.status(400).send({ error: `The username '${username} isn't valid !'` })
  if (typeof password != "string") return res.status(400).send({ error: `The password isn't valid` })

  // Find user with its username
  let user = await User.findOne({ where: { username }, attributes: ["password"] });

  // If the request return an user, test his password
  if (!user) return res.status(404).send({ error: `The username '${username} hasn't been found !'` })
  user = user.validPassword(password, user.password)

  // Send response to the client
  if (user) res.status(200).send({ result })
  else res.status(400).send({ error: "Password incorrect !" });
}

export { CreateUser, DeleteUser, UpdateUser, Login };
