"use-strict";
;
import { HTMLElement } from "../../global/classes/HTMLElement.js";
import { removeChild } from "../../global/utils/removeChilds.js";
import projectAnims from "../animations/projects.animations.js";
import { Request } from "../api/Request.js";
import projectsContainer from "../containers/projects.container.js";

export async function projectsView() {
  let { result } = await new Request("GET", "/projects").play
  let main = document.getElementById("main");
  let container = projectsContainer()
  main.appendChild(container)

  displayProject(result[0])
  switchProject(result)
}

function displayProject(project) {
  let subContainer = document.getElementById('subContainer')
  removeChild(subContainer)

  let arrows = document.querySelectorAll('#container img')
  arrows.forEach(a => a.remove())

  subContainer.setAttribute("data-project", project.id)
  subContainer.style.background = `center/cover no-repeat url(./private/static/${project.image})`

  let title = new HTMLElement('h1').text(project.name)
  let desc = new HTMLElement('p').text(project.text)
  let url = new HTMLElement('a').attributes([["href", project.url], ["target", "_blank"]])
  url.textContent = project.url
  let date = new HTMLElement('h3').text(project.date)
  subContainer.append(title, desc, url, date)

  projectAnims().play()
}

function switchProject(result) {
  let project_now = result.find(v => v.id == document.getElementById("subContainer").dataset.project)
  project_now = result.findIndex(v => v == project_now)

  if (result.length > 1 && project_now < result.length - 1) nextArrow(project_now + 1)
  if (result.length > 1 && project_now > 0) previousArrow(project_now - 1)
  arrowsControllers(result)
}

function nextArrow(project) {
  let arrow = new HTMLElement("img", "next").attributes([["src", "./global/assets/images/next_arrow.svg"], ["data-project", project]])
  document.getElementById('container').appendChild(arrow)
}
function previousArrow(project) {
  let arrow = new HTMLElement("img", "previous").attributes([["src", "./global/assets/images/next_arrow.svg"], ["data-project", project]])
  document.getElementById('container').appendChild(arrow)
}

function arrowsControllers(result) {
  let previous = document.getElementById("previous")
  let next = document.getElementById("next")

  if (next) next.addEventListener("click", () => {
    displayProject(result[next.dataset.project])
    switchProject(result)
  })

  if (previous) previous.addEventListener("click", () => {
    displayProject(result[previous.dataset.project])
    switchProject(result)
  })
}