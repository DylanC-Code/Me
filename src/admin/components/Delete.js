"use-strict";

import { Modal } from "./Modal.js";

export class Delete extends Modal {
  /** Create Delete modal extend to modal class
   * @param  { STRING } table The table of the element
   * @param  { OBJECT } datas Datas about the element
   * @param  { INTEGER } id Primary key of the element
   */
  constructor(table, datas, id) {
    super(table);

    this.datas = datas;
    this.id = id;
  }

  //^ Method for create the modal
  //^ Return 'this._modal'
  create() {
    let h1 = document.createElement("h1");
    h1.innerHTML = `
      Are you sure you want 
      <mark class="color_red">delete</mark><br>
      <mark class="text_blue">${this.datas.name}</mark>
      in ${this.table} ?
    `;

    let div = document.createElement("div");
    div.innerHTML = `
      <button id="yes">Yes</button>
      <button id="no">No</button>
    `;

    this._modal.append(h1, div);
    return this._modal;
  }
}
