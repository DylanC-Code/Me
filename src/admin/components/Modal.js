"use-strict";

export class Modal {
  /** Create type of modal for update or delete an element
   * @param  { STRING } table The table of category
   */
  constructor(table) {
    this._modal = document.createElement("div");
    this._modal.setAttribute("id", "modal");

    this.table = table;
  }
}
