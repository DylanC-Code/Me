"use-strict";

import { Request } from "../../public/build/api/Request.js";
import { Input } from "../classes/Input.js";

export class Modal {
  /** Create type of modal for update or delete an element
   * @param  { STRING } method The method as choice
   * @param  { OBJECT } data The datas of the element
   * @param  { INTEGER } id The id of the element
   */
  constructor(table, method, data = null, id = null) {
    this._modal = document.createElement("div");
    this._modal.setAttribute("id", "modal");

    this.table = table;
    this.method = method;
    this.data = data;
    this.id = id;
  }

  get display() {
    return this.modal();
  }

  delete() {
    let fragment = new DocumentFragment();

    let h1 = document.createElement("h1");
    h1.innerHTML = `
      Are you sure you want 
      <mark class="color_red">delete</mark><br>
      <mark class="text_blue">${this.data.name}</mark>
      in ${this.table} ?
    `;

    let div = document.createElement("div");
    div.innerHTML = `
      <button id="yes">Yes</button>
      <button id="no">No</button>
    `;

    fragment.append(h1, div);
    return fragment;
  }

  update() {
    let fragment = new DocumentFragment();
    let h1 = document.createElement("h1");
    if (this.data)
      h1.innerHTML = `Update <mark class="text_blue">${this.data.name}</mark>`;

    let name = new Input("text", null, "name");
    if (this.data.name) name.input = ["value", this.data.name];
    name = name.input;

    let div = document.createElement("div");
    div.innerHTML = `
      <button id="yes">Update</button>
      <button id="no">Cancel</button>
    `;

    fragment.append(h1, name, div);
    return fragment;
  }

  create() {
    return this.special();
  }
  

  async modal() {
    let fragment;
    switch (this.method) {
      case "DELETE":
        fragment = this.delete();
        break;
      case "UPDATE":
        fragment = this.update();
        break;
      case "CREATE":
        fragment = await this.create();
        break;
      default:
        throw console.error("Please enter a method in Modal constructor !");
    }

    let modal = document.createElement("div");
    modal.setAttribute("id", "modal");
    modal.appendChild(fragment);

    return modal;
  }

  async special() {
    let result = await this.check();
    let fragment = new DocumentFragment();

    let name = new Input("text", null, "name");
    name.input = ["placeholder", "Name"];

    fragment.appendChild(name.input);

    switch (this.table) {
      case "languages":
        result.forEach((data) => {
          let checkbox = new Input("checkbox", data.name, data.id_category)
            .input;
          fragment.appendChild(checkbox);
        });
        break;
      case "concepts":
        break;
    }

    return fragment;
  }

  async check() {
    let result;
    switch (this.table) {
      case "categories":
        result = null;
        break;
      case "languages":
        result = await new Request("GET", "/categories").play;
        break;
      case "concepts":
        result = await new Request("GET", "/languages").play;
        break;
      default:
        throw console.error("Table incorrect !");
    }

    result = result != null ? result.result : null;
    return result;
  }
}
