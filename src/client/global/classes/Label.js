"use-strict";

import HTMLElement from "./HTMLElement.js";

export default class Label extends HTMLElement {
  /** Create, set and remove differents label
   * @param  { STRING } pour The id of the linked input (facultatif)
   * @param  { STRING } value The value of the content text (facultatif)
   * @param  { STRING } id The value of the attribut id (facultatif)
   */
  constructor(pour, id, text) {
    super("label", id);

    this._element.textContent = text;
    pour ? this._element.setAttribute("for", pour) : null;
  }
}
