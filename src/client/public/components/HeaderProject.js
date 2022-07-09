"use-strict"

import toWords from "../../global/utils/toWords.js"
import HTMLElement from "../../global/classes/HTMLElement.js"

export default class HeaderProject {
  #project
  constructor(project) {
    this.#project = project
  }

  get display() {
    let div = new HTMLElement('div', 'headerProject').element
    let h2 = new HTMLElement('h2').inner(`Project <span id='counter'>${toWords(1)}</span>/<span>${toWords(this.#project.length)}</span>`)
    let h1 = new HTMLElement('h1', 'title').text(this.#project[0].name)
    div.append(h2, h1)

    document.getElementById('container').appendChild(div)
  }
}