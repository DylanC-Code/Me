"use-strict"

import Arrow from "./svg/arrow.js"

export default class ArrowProject {
  #id_project
  #direction
  constructor(id_project, direction) {
    this.#id_project = id_project
    this.#direction = direction
  }

  get display() {
    let arrow = new SVGElement("svg", this.#direction).attributes([["data-project", this.#id_project]])
    arrow.innerHTML = Arrow()
    document.getElementById('container').appendChild(arrow)
  }
}