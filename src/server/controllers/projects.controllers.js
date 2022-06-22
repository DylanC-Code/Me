"use-strict";

import Project from "../models/Project.model.js";

//* @ POST /api/projects/create
//* @ Create new project
async function AddProject(req, res) {
  let { name, url, text, date, collaborators } = req.body;

  //~ Find or create a new project
  let result = await Project.findOrCreate({
    where: { name },
    defaults: { name, url, text, image: `${name}.svg`, date, collaborators },
    raw: true,
  });

  //~ Send the response to the client
  result[1]
    ? res.status(201).send({ result: result[0] })
    : res.status(400).send({ result: `Project ${name} already exist !` });
}

//* @ DELETE /api/projects/delete/:pk
//* @ Delete a project
async function DeleteProject(req, res) {
  //~ Delete project with it primaryKey
  let { pk } = req.params;
  let result = await Project.destroy({
    where: { id_project: pk },
  });

  //~ Send response to the client
  result
    ? res.status(200).send({
      result: `Project ${pk} has been delete succesfully !`,
    })
    : res.status(404).send({ result: `Project ${pk} hasn't been found  !` });
}

//* @ PUT /api/projects/update/
//* @ Update a project
async function UpdateProject(req, res) {
  //~ Find and update project with the it primaryKey
  let { pk, name, url, text, image, date, collaborators } = req.body;

  //~ Control primaryKey value
  if (pk) {
    let result = await Project.update(
      { name, url, text, image, date, collaborators },
      { where: { id_project: pk } }
    );

    //~ Send response to the client
    result[0]
      ? res.status(200).send({
        result: `Project ${name} has been update succesfully !`,
      })
      : res.status(404).send({ result: `Project ${pk} hasn't been found  !` });
  } else res.status(404).send({ result: `You are not authorized !` });
}

//* @ GET /api/projects/:pk
//* @ Get a project
async function GetProject(req, res) {
  //~ Find project with it primaryKey
  let { pk } = req.params;
  let result = await Project.findByPk(pk, { raw: true });

  //~ Send response to the client
  result
    ? res.status(200).send({ result })
    : res.status(404).send({ result: `Project ${pk} hasn't been found  !` });
}

async function GetAllProject(req, res) {
  let result = await Project.findAll({ attributes: [["id_project", "id"], "name", "url", "text", "image", "date", "collaborators"], raw: true })

  result
    ? res.status(200).send({ result })
    : res.status(404).send({ result: `Project ${pk} hasn't been found  !` });
}

export { AddProject, DeleteProject, UpdateProject, GetProject, GetAllProject };
