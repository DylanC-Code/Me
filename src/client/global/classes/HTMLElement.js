"use-strict";

export default class HTMLElement {
  /**
   * Create an HTMLElement
   * @param  { SRTING } name Specifie type of the element
   * @param  { STRING } id The id of the element, default null (facultatif)
   */
  constructor(name, id) {
    this._element = name ? document.createElement(`${name}`) : null;
    id ? this._element.setAttribute("id", id) : null;
  }

  get element() {
    return this._element;
  }

  attributes(attributes) {
    attributes.forEach((attribut) =>
      this._element.setAttribute(attribut[0], attribut[1])
    );
    return this.element;
  }

  text(txt) {
    this._element.textContent = txt;
    return this.element;
  }

  inner(content) {
    this._element.innerHTML = content;
    return this._element;
  }
}
