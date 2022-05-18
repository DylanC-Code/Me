"use-strict";

import { Request } from "../../public/build/api/Request.js";
import { Input } from "../classes/Input.js";
import { Modal } from "./Modal.js";

export class Create extends Modal {
  /**
   * Create the modal for add new element
   * @param  { STRING } table The name of the about table
   */
  constructor(table) {
    super(table);
  }

  //^ Create the modal and append the to 'this.modal'
  async create() {
    //~ Call this.special() to control the difference
    let special = await this.special();

    //~ Create an input HTMLElement and set it
    let name = new Input("text", null, "name");
    name.input = ["placeholder", "Name"];

    //~ Create div HTMLElement and its buttons
    let div = document.createElement("div");
    let button1 = document.createElement("button");
    let button2 = document.createElement("button");
    button1.textContent = "Create";
    button2.textContent = "Cancel";

    div.append(button1, button2);

    //~ Append the HTMLElement and the fragment to 'this._modal'
    this._modal.append(name.input, special, div);
    return this._modal;
  }

  //^ Control the difference between the table
  //^ Return a fragment
  async special() {
    //~ Create new fragment
    let fragment = new DocumentFragment();

    let h1 = document.createElement("h1");
    let error = document.createElement("p");
    let h2;
    let div;
    error.setAttribute("id", "error");

    switch (this.table) {
      //~ If table is equal to categories
      case "categories":
        //~ Create h1 element and append to the fragment
        h1.innerHTML = "Add new <mark class='color_red'>category</mark>";
        fragment.append(error, h1);
        break;
      //~ If table is equal to languages
      case "languages":
        //~ Request to the database for get all categories
        let categories = await new Request("GET", "/categories").play;

        h1.innerHTML = "Add new <mark class='color_red'>language</mark>";
        this._modal.append(error, h1);

        //~ Add input file and this label
        let file = new Input("file", null, "logo").input;
        let label = document.createElement("label");
        label.setAttribute("for", "logo");

        //~ Add content and append to the fragment
        h2 = document.createElement("h2");
        h2.innerHTML = "Choose its <mark class='color_red'>category</mark>";

        fragment.append(file, label, h2);

        //~ For each category create input with its label
        div = document.createElement("div");

        categories.result.forEach((cat) => {
          let label = document.createElement("label");
          label.setAttribute("for", cat.id);
          label.textContent = cat.name;

          let input = new Input("radio", null, cat.id);
          input.input = ["name", "category"];

          //~ Append them to the fragment
          div.append(input.input, label);
        });
        fragment.append(div);
        break;
      //~ If table is equal to concepts
      case "concepts":
        //~ Request to the database for get all languages
        let languages = await new Request("GET", `/languages`).play;

        h1.innerHTML = "Add new <mark class='color_red'>concept</mark>";
        this._modal.append(error, h1);

        //~ Add content and append to the fragment
        let value = document.createElement("h2");
        value.textContent = "Choose your lvl";

        let lvl = new Input("number", 0, "value");
        lvl.input = ["min", 0];
        lvl.input = ["max", 5];
        fragment.append(value, lvl.input);

        if (languages[0]) {
          h2 = document.createElement("h2");
          h2.innerHTML = `Choose <mark class='color_red'>languages</mark> associate`;

          //~ For each concept create input with its label
          div = document.createElement("div");
          languages.result.forEach((language) => {
            let label = document.createElement("label");
            label.setAttribute("for", language.id_language);
            label.textContent = language.name;

            let input = new Input("checkbox", null, language.id_language).input;

            //~ Append them to the fragment
            div.append(input, label);
          });

          fragment.appendChild(h2, div);
        }

        break;
    }
    //~ Return the fragment
    return fragment;
  }
}
