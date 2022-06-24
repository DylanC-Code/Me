"use-strict";

import SVGElement from "./SVGElement.js";

export default class Animate extends SVGElement {
  constructor(attribute, from, to, duration, begin, fill, id, keyTimes) {
    super("animate", id);
    this._element.setAttribute("attributeName", attribute);
    if (from) this._element.setAttribute("from", from);
    if (to) this._element.setAttribute("to", to);
    this._element.setAttribute("dur", duration);
    this._element.setAttribute("begin", begin);
    this._element.setAttribute("fill", fill);
    if (keyTimes) this._element.setAttribute("keyTimes", keyTimes);
  }

  values(values) {
    this._element.setAttribute('values', values)
  }
}
