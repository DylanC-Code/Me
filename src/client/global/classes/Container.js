"use-strict";

import { HTMLElement } from "./HTMLElement.js";

export class Container extends HTMLElement {
  /**
   * @param  { STRING } attribut The name of the class to attribute
   */
  constructor(attribut) {
    super("div", "container");
    this.main = document.getElementById("main");
    this.main.appendChild(this._element);

    if (attribut) this.element.setAttribute("class", attribut);
  }
}

export class SubContainer extends HTMLElement {
  /**
   * @param  { STRING } attribut The name of the class to attribute
   */
  constructor(attribut) {
    super("div", "subContainer");
    this.main = document.getElementById("main");
    this.main.appendChild(this._element);

    if (attribut) this.element.setAttribute("class", attribut);
  }
}
