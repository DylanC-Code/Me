"use-strict";

export class Input {
  /** Create, set and remove differents input
   * @param  { STRING } type The type of the input
   * @param  { STRING } value The value of the attribut value
   * @param  { STRING } id The value of the attribut id
   */
  constructor(type, value = null, id = null) {
    this._input = document.createElement("input");

    arguments[0] ? this._input.setAttribute("type", type) : null;
    arguments[1] ? this._input.setAttribute("value", value) : null;
    arguments[2] ? this._input.setAttribute("id", id) : null;
  }

  get input() {
    return this._input;
  }

  set input(attribute) {
    this._input.setAttribute(attribute[0], attribute[1]);
  }
}
