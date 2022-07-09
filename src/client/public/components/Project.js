"use-strict"

import HTMLElement from "../../global/classes/HTMLElement.js"
import Tools from "../../global/utils/Tools.js"
import projectsAnims from "../animations/projects.animations.js"


export default class Project {
  #project
  constructor(project) {
    this.#project = project
  }

  get display() {
    let subContainer = document.getElementById('subContainer')
    Tools.removeChilds(subContainer)

    let arrows = document.querySelectorAll('#container svg')
    arrows.forEach(a => a.remove())

    subContainer.setAttribute("data-project", this.#project.id)

    console.log(this.#project);
    title.textContent = this.#project.name
    let div = new HTMLElement('div', "blur").element
    div.style.background = `center/cover no-repeat url(/src/client/private/static/${this.#project.image})`
    let desc = new HTMLElement('p').text(this.#project.text)
    let url = new HTMLElement('a').attributes([["href", this.#project.url], ["target", "_blank"]])
    url.textContent = this.#project.url
    let date = new HTMLElement('h3').text(this.#project.date)
    let git = new HTMLElement('a').attributes([["href", this.#project.github], ["target", "_blank"]])
    git.textContent = this.#project.github
    subContainer.append(div, desc, url, date, git)

    projectsAnims().play()
  }
}