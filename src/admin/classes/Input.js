"use-strict";

import { HTMLElement } from "./HTMLElement.js";

export class Input extends HTMLElement {
  /** Create, set and remove differents input
   * @param  { STRING } type The type of the input
   * @param  { STRING } value The value of the attribut value
   * @param  { STRING } id The value of the attribut id
   */
  constructor(type, id = null, value = null) {
    super("input", id);

    this._element.setAttribute("type", type);
    id ? this._element.setAttribute("id", id) : null;
    value ? this._element.setAttribute("value", value) : null;
  }
}
