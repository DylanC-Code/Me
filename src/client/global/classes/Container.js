"use-strict";

import HTMLElement from "./HTMLElement.js";

export default class Container extends HTMLElement {
  /**
   * @param  { STRING } id The id to attribute
   * @param  { STRING } attribut The name of the class to attribute
   */
  constructor(id, attribut) {
    super("div", id);
    this.main = document.getElementById("main");
    
    if (id == "container")
      this.main.appendChild(this._element);

    if (attribut) this.element.setAttribute("class", attribut);
  }
}
