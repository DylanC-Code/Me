"use-strict"

import Request from "../../public/api/Request.js";
import Modal from "../../global/classes/Modal.js";
import Input from "../../global/classes/Input.js";
import Label from "../../global/classes/Label.js";
import HTMLElement from "../../global/classes/HTMLElement.js";
import { ContentsAdmin } from "../../public/contents/admin.contents.js";

export class Remove extends Modal {
  /** Create Delete modal extend to modal class
   * @param  { STRING } table The table of the element
   * @param  { OBJECT } datas Datas about the element
   */
  constructor(table, datas) {
    super(table);
    this.datas = datas;
  }

  get display() {
    this.#create()
    return this.element;
  }
  //^ Method for create the modal
  //^ Return 'this.element'
  #create() {
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

    this.element.append(h1, div);
  }
}

export class Create extends Modal {
  /**
   * Create the modal for add new element
   * @param  { STRING } table The name of the about table
   */
  constructor(table) {
    super(table);
  }

  get display() {
    return this.#create()
  }
  //^ Create the modal and append the to 'this.modal'
  async #create() {
    //~ Call this.special() to control the difference
    let special = await this.special();

    //~ Create and set the global HTMLElements
    let name = new Input("text", "name", null).attributes([
      ["placeholder", "Name"],
    ]);
    let div = document.createElement("div");
    let btn1 = new HTMLElement("button").text("Create");
    let btn2 = new HTMLElement("button").text("Cancel");

    //~ Append them
    div.append(btn1, btn2);
    this.element.append(name, special, div);
    return this.element;
  }

  //^ Control the difference between the table
  //^ Return a fragment
  async special() {
    //~ Create new fragment
    let fragment = new DocumentFragment();

    let h1, h2, div;
    let error = new HTMLElement("p", "error").element;
    this.element.appendChild(error);

    switch (this.table) {
      // ###############################################################
      // ###############################################################
      //~ If table is equal to categories
      case "categories":
        //~ Create h1 element and return it
        return new HTMLElement("h1", null).inner(
          ContentsAdmin.create.categories.h1
        );

      // ###############################################################
      // ###############################################################
      //~ If table is equal to languages
      case "languages":
        //~ Request to the database for get all categories
        let categories = await new Request("GET", "/categories").play;

        //~ Create and set the HTMLElements
        let file = new Input("file", "file", null).element;
        let label = new HTMLElement("label", null).attributes([
          ["for", "file"],
        ]);
        h1 = new HTMLElement("h1", null).inner(
          ContentsAdmin.create.languages.h1
        );
        h2 = new HTMLElement("h2", null).inner(
          ContentsAdmin.create.categories.h2
        );
        div = document.createElement("div");

        //~ Append them
        this.element.appendChild(h1);
        fragment.append(file, label, h2);

        //~ For each category create input with its label
        if (categories.result[0]) {
          categories.result.forEach((cat) => {
            let input = new Input("radio", cat.id, null).attributes([
              ["name", "category"],
            ]);
            let label = new Label(cat.id, null, cat.name).element;

            //~ Append them to the div
            div.append(input, label);
          });

          //~ Return the fragment
          fragment.append(div);
          return fragment;
        } else {
          h1 = new HTMLElement("h1", null).inner(
            ContentsAdmin.create.errors.parents
          );
          this.element.innerHTML = h1;
        }

      // ###############################################################
      // ###############################################################

      //~ If table is equal to concepts
      case "concepts":
        //~ Request to the database for get all languages
        let languages = await new Request("GET", `/languages`).play;

        //~ Create and set the HTMLElements
        let lvl = new HTMLElement("h2", null).text(
          ContentsAdmin.create.concepts.h2
        );
        let value = new Input("number", "value", 0).attributes([
          ["min", 0],
          ["max", 5],
        ]);
        h1 = new HTMLElement("h1", null).inner(
          ContentsAdmin.create.concepts.h1
        );
        h2 = new HTMLElement("h2", null).inner(
          ContentsAdmin.create.concepts.associates
        );
        div = document.createElement("div");

        //~ Append them
        this.element.appendChild(h1);
        fragment.append(lvl, value);

        //~ For each concept create input with its label
        if (languages.result[0]) {
          languages.result.forEach((language) => {
            let input = new Input("checkbox", language.id, null).element;
            let label = new Label(language.id, null, language.name).element;

            //~ Append them to the fragment
            div.append(input, label);
          });

          //~ Return the fragment
          fragment.append(h2, div);
          return fragment;
        } else {
          h1 = new HTMLElement("h1", null).inner(
            ContentsAdmin.create.errors.parents
          );
          this.element.innerHTML = h1;
        }
    }
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
  get display() {
    return this.#create()
  }
  //^ Create the modal
  async #create() {
    //~ Call this.special() for control differences
    let special = await this.special();

    //~ Create many HTMLElements
    let p = new HTMLElement("p", "error").element;
    let h1 = new HTMLElement("h1", null).inner(
      `Update <mark class="text_blue">${this.datas.name}</mark>`
    );
    let name = new Input("text", "name", this.datas.name).element;
    this.element.append(p, h1, name);

    if (special[1]) this.element.appendChild(special[1]);

    let btn1 = new HTMLElement("button", "yes").text("Update")
    let btn2 = new HTMLElement("button", "no").text("Cancel")
    let div = document.createElement("div");
    div.append(btn1, btn2)
    //~ Append elements to this.element
    this.element.append(special[0], div);
    return this.element;
  }

  //^ Create fragment with the difference between the table
  //^ Return fragment
  async special() {
    //~ Create new fragment
    let div = document.createElement("div");

    switch (this.table) {
      case "languages":
        let file = new Input("file", "file").element;
        let logo = new Label("file", null, null).element;

        let categories = await new Request("GET", "/categories").play;
        categories.result.forEach((cat) => {
          let input = new Input("radio", cat.id, null).attributes([
            ["name", "category"],
          ]);
          let label = new Label(cat.id, null, cat.name).element;

          //~ Append them
          this.element.append(file, logo);
          div.append(input, label);
        });
        return [div];
      case "concepts":
        let languages = await new Request("GET", "/languages").play;
        let note = new Input("number", null, this.datas.value).element;
        languages.result.forEach((language) => {
          let input = new Input("checkbox", language.id, null).element;
          let label = new Label(language.id, null, language.name).element;

          //~ Append them to the fragment
          div.append(input, label);
        });
        return [div, note];
      default:
        return [""];
    }
  }
}

export default class Datas {
  static Create = Create
  static Remove = Remove
  static Update = Update
}