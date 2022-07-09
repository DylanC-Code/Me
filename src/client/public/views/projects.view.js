"use-strict";

import Tools from "../../global/utils/Tools.js";
import HTMLElement from "../../global/classes/HTMLElement.js";
import projectAnims from "../animations/projects.animations.js";
import Request from "../api/Request.js";
import projectsContainer from "../containers/projects.container.js";
import ArrowProject from "../components/Arrow.js";
import HeaderProject from "../components/HeaderProject.js";

export default async function projectsView() {
  let { result } = await new Request("GET", "/projects").play
  let main = document.getElementById("main");
  let container = projectsContainer()
  main.appendChild(container)

  new HeaderProject(result).display
  // headerProject(result)
  displayProject(result[0])
  switchProject(result)
}

// function headerProject(project) {
//   let container = document.getElementById('container')
//   let div = new HTMLElement('div', 'headerProject').element
//   let h2 = new HTMLElement('h2').inner(`Project <span id='counter'>${toWords(1)}</span>/<span>${toWords(project.length)}</span>`)
//   let h1 = new HTMLElement('h1', 'title').text(project[0].name)
//   div.append(h2, h1)

//   container.appendChild(div)
// }

function displayProject(project) {
  let subContainer = document.getElementById('subContainer')
  Tools.removeChilds(subContainer)

  let arrows = document.querySelectorAll('#container svg')
  arrows.forEach(a => a.remove())

  subContainer.setAttribute("data-project", project.id)
  subContainer.style.background = `center/cover no-repeat url(/src/client/private/static/${project.image})`

  title.textContent = project.name
  let desc = new HTMLElement('p').text(project.text)
  let url = new HTMLElement('a').attributes([["href", project.url], ["target", "_blank"]])
  url.textContent = project.url
  let date = new HTMLElement('h3').text(project.date)
  subContainer.append(desc, url, date)

  projectAnims().play()
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
    displayProject(result[next.dataset.project])
    switchProject(result)
  })

  if (previous) previous.addEventListener("click", () => {
    counter.textContent = toWords(parseInt(previous.dataset.project) + 1)
    displayProject(result[previous.dataset.project])
    switchProject(result)
  })
}