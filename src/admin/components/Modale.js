"use-strict";

import { Request } from "../../public/build/api/Request.js";
import { Input } from "../classes/Input.js";

export class Modal {
  /** Create type of modal for update or delete an element
   * @param  { STRING } table The table of category
   */
  constructor(table) {
    this._modal = document.createElement("div");
    this._modal.setAttribute("id", "modal");

    this.table = table;
  }

  // get modal() {
  //   return this._modal;
  // }

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
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
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

  //~ Getter of the modal (create and return)
  get modal() {
    this.create();
    return this._modal;
  }

  //~ Method for create the modal
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
  }
}

export class Update extends Modal {
  constructor(table, datas, id) {
    super(table);

    this.datas = datas;
    this.id = id;
  }

  get modal() {
    this.create();
    return this._modal;
  }

  async special() {
    let fragment = new DocumentFragment();

    if (this.table == "languages") {
      let categories = await new Request("GET", "/categories").play;

      categories.forEach((cat) => {
        let label = document
          .createElement("label")
          .setAttribute("for", cat.id_category);
        label.textContent = cat.name;

        let input = new Input("checkbox", null, cat.id_category).input;

        fragment.append(label, input);
      });
    } else if (this.table == "concepts") {
      let languages = await new Request("GET", "/languages").play;

      languages.forEach((language) => {
        let label = document
          .createElement("label")
          .setAttribute("for", language.id_category);
        label.textContent = language.name;

        let input = new Input("checkbox", null, language.id_category).input;

        fragment.append(label, input);
      });
    }

    return fragment;
  }

  async create() {
    let special = await this.special();

    let h1 = document.createElement("h1");
    h1.innerHTML = `Update <mark class="text_blue">${this.datas.name}</mark>`;

    let name = new Input("text", this.datas.name, "name").input;

    let div = document.createElement("div");
    div.innerHTML = `
      <button id="yes">Update</button>
      <button id="no">Cancel</button>
    `;

    this._modal.append(h1, name, special, div);
  }
}

export class Create extends Modal {
  constructor(table) {
    super(table);
  }

  get modal() {
    this.create();
    return this._modal;
  }

  async special() {
    let fragment = new DocumentFragment();

    let h1 = document.createElement("h1");

    switch (this.table) {
      case "categories":
        h1.textContent = "Add new category";
        fragment.appendChild(h1);
        break;
      case "languages":
        let categories = await new Request("GET", "/categories").play;

        h1.textContent = "Add new language";
        fragment.appendChild(h1);
        categories.forEach((cat) => {
          let label = document
            .createElement("label")
            .setAttribute("for", cat.id_category);
          label.textContent = cat.name;

          let input = new Input("radio", null, cat.id_category);

          fragment.append(label, input);
        });
        break;
      case "concepts":
        let languages = await new Request("GET", "/languages").play;

        h1.textContent = "Add new concept";
        fragment.appendChild(h1);
        languages.forEach((language) => {
          let label = document
            .createElement("label")
            .setAttribute("for", language.id_language);
          label.textContent = language.name;

          let input = new Input("checkbox", null, language.id_language).input;

          fragment.append(label, input);
        });

        break;
    }
  }

  create() {
    let special = this.special();

    let name = new Input("text", null, "name").input;
    let div = document.createElement("div");
    div.innerHTML = `
      <button id="yes">Update</button>
      <button id="no">Cancel</button>
    `;

    this._modal.append(name, special, div);
  }
}
