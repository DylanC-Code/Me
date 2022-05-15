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

  get display() {
    return this.modal();
  }
}

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
  /**
   * Create update modal
   * @param  { STRING } table Name of the table
   * @param  { OBJECT } datas Datas of the element
   * @param  { INTEGER } id PrimaryKey of the element
   */
  constructor(table, datas, id) {
    super(table);

    this.datas = datas;
    this.id = id;
  }

  //^ Getter for create modal
  //^ Return this._modal
  get modal() {
    this.create();
    return this._modal;
  }

  //^ Create fragment with the difference between the table
  //^ Return fragment
  async special() {
    //~ Create new fragment
    let fragment = new DocumentFragment();

    //~ If is "languages"
    if (this.table == "languages") {
      //~ New request for get datas
      let categories = await new Request("GET", "/categories").play;

      //~ For each create label and input HTMLElement
      categories.forEach((cat) => {
        let label = document
          .createElement("label")
          .setAttribute("for", cat.id_category);
        label.textContent = cat.name;

        let input = new Input("checkbox", null, cat.id_category).input;

        //~ Append them to the fragment
        fragment.append(label, input);
      });

      //~ If is "concepts"
    } else if (this.table == "concepts") {
      //~ New request for get datas
      let languages = await new Request("GET", "/languages").play;

      //~ For each create label and input HTMLElement
      languages.forEach((language) => {
        let label = document
          .createElement("label")
          .setAttribute("for", language.id_category);
        label.textContent = language.name;

        let input = new Input("checkbox", null, language.id_category).input;

        //~ Append them to the fragment
        fragment.append(label, input);
      });
    }

    //~ Return the fragment
    return fragment;
  }

  //^ Create the modal
  async create() {
    //~ Call this.special() for control differences
    let special = await this.special();

    //~ Create many HTMLElements
    let h1 = document.createElement("h1");
    h1.innerHTML = `Update <mark class="text_blue">${this.datas.name}</mark>`;

    let name = new Input("text", this.datas.name, "name").input;

    let div = document.createElement("div");
    div.innerHTML = `
      <button id="yes">Update</button>
      <button id="no">Cancel</button>
    `;

    //~ Append elements to this._modal
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
    return fragment;
  }

  async create() {
    let special = await this.special();

    let name = new Input("text", null, "name");
    name.input = ["placeholder", "Name"];

    let div = document.createElement("div");
    div.innerHTML = `
      <button id="yes">Update</button>
      <button id="no">Cancel</button>
    `;

    this._modal.append(name.input, special, div);
  }
}
