"use-strict";

import HTMLElement from "./HTMLElement.js";

export default class SVGElement extends HTMLElement {
  /** Create an SVGElement
   * @param  { STRING } name The type of the SVG element (ex: 'path')
   * @param  { STRING } id The id attribute to the element
   */
  constructor(name, id) {
    super();
    this._element = document.createElementNS(
      "http://www.w3.org/2000/svg",
      `${name}`
    );
    id ? this._element.setAttribute("id", id) : null;
  }
}
