"use-strict";

import Request from "../api/Request.js";
import projectsContainer from "../containers/projects.container.js";
import ArrowProject from "../components/Arrow.js";
import HeaderProject from "../components/HeaderProject.js";
import Project from "../components/Project.js";

export default async function projectsView() {
  let { result } = await new Request("GET", "/projects").play
  let main = document.getElementById("main");
  let container = projectsContainer()
  main.appendChild(container)

  new HeaderProject(result).display
  new Project(result[0]).display
  switchProject(result)
}

function switchProject(result) {
  let project_now = result.find(v => v.id == document.getElementById("subContainer").dataset.project)
  project_now = result.findIndex(v => v == project_now)

  if (result.length > 1 && project_now < result.length - 1) new ArrowProject(project_now + 1, 'next').display
  if (result.length > 1 && project_now > 0) new ArrowProject(project_now - 1, 'previous').display
  arrowsControllers(result)
}

function arrowsControllers(result) {
  let previous = document.getElementById("previous")
  let next = document.getElementById("next")
  let counter = document.getElementById('counter')

  if (next) next.addEventListener("click", () => {
    counter.textContent = toWords(parseInt(next.dataset.project) + 1)
    new Project(result[next.dataset.project]).display
    switchProject(result)
  })

  if (previous) previous.addEventListener("click", () => {
    counter.textContent = toWords(parseInt(previous.dataset.project) + 1)
    new Project(result[previous.dataset.project]).display
    switchProject(result)
  })
}