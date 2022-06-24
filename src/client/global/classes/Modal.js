"use-strict";

import HTMLElement from "./HTMLElement.js";

export default class Modal extends HTMLElement {
  /** Create type of modal for update or delete an element
   * @param  { STRING } table The table of category
   */
  constructor(table) {
    super("div", "modal")

    this.table = table;
  }
}
