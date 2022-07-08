"use-strict";

import Project from "../models/Project.model.js";
import { Validator } from "../utils/Validator.js";

//¨ Controllers 

//* @ POST /api/projects/create
//* @ Add new project
async function AddProject(req, res) {
  let { name, url, text, date, github } = req.body;

  // Control name, url, text, date and github
  if (!Validator.name(name)) return res.status(400).send({ error: "Error the name isn't valid !" });
  if (typeof url != "string") return res.status(400).send({ error: "Error the url isn't valid !" });
  if (!Validator.text(text)) return res.status(400).send({ error: "Error the text isn't valid !" });
  if (!Validator.date(date)) return res.status(400).send({ error: "Error the date isn't valid !" });
  if (typeof github != "string") return res.status(400).send({ error: "Error the github isn't valid !" });

  // Find or create a new project
  let result = await Project.findOrCreate({ where: { name }, defaults: { name, url, text, image: `${name}.png`, date, github }, raw: true, });
  // Send the response to the client
  if (result[1]) res.status(201).send({ result: result[0] })
  else res.status(400).send({ error: `Project '${name}' already exist !` });
}

//* @ DELETE /api/projects/delete/:pk
//* @ Delete a project
async function DeleteProject(req, res) {
  let { pk } = req.params;

  if (!Validator.num(pk)) return res.status(400).send({ error: `The primaryKey '${pk}' isn't a number !` })

  // Delete project with primaryKey
  let result = await Project.destroy({ where: { id_project: pk } });

  // Send response to the client
  if (result) res.status(200).send({ result: `Project '${pk}' has been delete succesfully !`, })
  else res.status(404).send({ error: `Project '${pk}' hasn't been found  !` });
}

//* @ PUT /api/projects/update/
//* @ Update a project
async function UpdateProject(req, res) {
  // Find and update project with the it primaryKey
  let { pk, name, url, text, date, github } = req.body;

  // Control primaryKey, name, url, text, date and github
  if (!Validator.num(pk)) return res.status(400).send({ error: `The primaryKey '${pk}' isn't a number !` })
  if (!Validator.name(name)) return res.status(400).send({ error: "Error the name isn't valid !" });
  if (typeof url != "string") return res.status(400).send({ error: "Error the url isn't valid !" });
  if (!Validator.text(text)) return res.status(400).send({ error: "Error the text isn't valid !" });
  if (!Validator.date(date)) return res.status(400).send({ error: "Error the date isn't valid !" });
  if (typeof github != "string") return res.status(400).send({ error: "Error the github isn't valid !" });

  // Update the project
  let result = await Project.update({ name, url, text, image: `${name}.svg`, date, github }, { where: { id_project: pk } });

  // Send response to the client
  if (result[0]) res.status(200).send({ result: `Project '${name}' has been update succesfully !` })
  else res.status(404).send({ error: `Project '${name}' hasn't been found  !` });
}

//* @ GET /api/projects/:pk
//* @ Get a project
async function GetProject(req, res) {
  let { pk } = req.params;

  if (!Validator.num(pk)) return res.status(400).send({ error: `The primaryKey '${pk}' isn't a number !` })

  // Find project with primaryKey
  let result = await Project.findByPk(pk, { raw: true });

  // Send response to the client
  if (result) res.status(200).send({ result })
  else res.status(404).send({ result: `Project '${pk}' hasn't been found  !` });
}

//* @ GET /api/projects/
//* @ Get all projects
async function GetAllProject(req, res) {
  // Find all projects
  let result = await Project.findAll({ attributes: [["id_project", "id"], "name", "url", "text", "image", "date", "github"], raw: true })

  // Send response to the client
  if (result) res.status(200).send({ result })
  else res.status(404).send({ result: `Project '${pk}' hasn't been found  !` });
}

export { AddProject, DeleteProject, UpdateProject, GetProject, GetAllProject };
