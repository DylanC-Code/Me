"use-strict";

import { Request } from "../../public/build/api/Request.js";
import { ContentsAdmin } from "../../public/build/contents/admin.contents.js";
import { HTMLElement } from "../classes/HTMLElement.js";
import { Input } from "../classes/Input.js";
import { Label } from "../classes/Label.js";
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
    let name = new Input("text", null, "name").attributes([
      ["placeholder", "Name"],
    ]);

    //~ Create div HTMLElement and its buttons
    let div = document.createElement("div");
    let btn1 = new HTMLElement("button").text("Create");
    let btn2 = new HTMLElement("button").text("Cancel");

    div.append(btn1, btn2);

    //~ Append the HTMLElement and the fragment to 'this._modal'
    this._modal.append(name, special, div);
    return this._modal;
  }

  //^ Control the difference between the table
  //^ Return a fragment
  async special() {
    //~ Create new fragment
    let fragment = new DocumentFragment();

    let h1, h2, div;
    let error = new HTMLElement("p", "error").element;
    this._modal.appendChild(error);

    // let error = document.createElement("p");
    // error.setAttribute("id", "error");

    switch (this.table) {
      //~ If table is equal to categories
      case "categories":
        //~ Create h1 element and append to the fragment
        h1 = new HTMLElement("h1", null).inner(
          ContentsAdmin.create.categories.h1
        );
        // h1.innerHTML = "Add new <mark class='color_red'>category</mark>";
        fragment.appendChild(h1);

        //~ Return the fragment
        return fragment;

      //~ If table is equal to languages
      case "languages":
        //~ Request to the database for get all categories
        let categories = await new Request("GET", "/categories").play;

        h1 = new HTMLElement("h1", null).inner(
          ContentsAdmin.create.languages.h1
        );
        this._modal.appendChild(h1);

        //~ Add input file and this label
        let file = new Input("file", "logo", null).element;
        let label = new HTMLElement("label", null).attributes([
          ["for", "logo"],
        ]);
        // let label = document.createElement("label");
        // label.setAttribute("for", "logo");

        //~ Add content and append to the fragment
        // h2 = document.createElement("h2");
        // h2.innerHTML = "Choose its <mark class='color_red'>category</mark>";
        h2 = new HTMLElement("h2", null).inner(
          ContentsAdmin.create.categories.h2
        );

        fragment.append(file, label, h2);

        //~ For each category create input with its label
        div = document.createElement("div");

        if (categories.result[0]) {
          categories.result.forEach((cat) => {
            let label = new Label(cat.id, null, cat.name).element;
            // let label = document.createElement("label");
            // label.setAttribute("for", cat.id);
            // label.textContent = cat.name;

            // let input = new Input("radio", null, cat.id);
            // input.input = ["name", "category"];
            let input = new Input("radio", cat.id, null).attributes([
              ["name", "category"],
            ]);

            //~ Append them to the fragment
            div.append(input, label);
          });
          fragment.append(div);

          //~ Return the fragment
          return fragment;
        } else {
          h1 = new HTMLElement("h1", null).inner(
            ContentsAdmin.create.errors.parents
          );
          // h1.innerHTML = `No parents element to associate ..<br>Please fill the parents category !`;
          this._modal.innerHTML = h1;
        }
      //~ If table is equal to concepts
      case "concepts":
        //~ Request to the database for get all languages
        let languages = await new Request("GET", `/languages`).play;

        h1 = new HTMLElement("h1", null).inner(
          ContentsAdmin.create.concepts.h1
        );

        // innerHTML = "Add new <mark class='color_red'>concept</mark>";
        this._modal.appendChild(h1);

        //~ Add content and append to the fragment
        let value = new HTMLElement("h2", null).text(
          ContentsAdmin.create.concepts.h2
        );
        // let value = document.createElement("h2");
        // value.textContent = "Choose your lvl";

        let lvl = new Input("number", "value", 0).attributes([
          ["min", 0],
          ["max", 5],
        ]);
        // let lvl = new Input("number", 0, "value");
        // lvl.input = ["min", 0];
        // lvl.input = ["max", 5];

        fragment.append(value, lvl.input);

        if (languages[0]) {
          // h2 = document.createElement("h2");
          // h2.innerHTML = `Choose <mark class='color_red'>languages</mark> associate`;
          h2 = new HTMLElement("h2", null).inner(
            ContentsAdmin.create.concepts.associates
          );

          //~ For each concept create input with its label
          div = document.createElement("div");
          languages.result.forEach((language) => {
            let label = new Label(language.id_language, null, language.name)
              .element;
            // let label = document.createElement("label");
            // label.setAttribute("for", language.id_language);
            // label.textContent = language.name;

            let input = new Input("checkbox", null, language.id_language)
              .element;

            //~ Append them to the fragment
            div.append(input, label);
          });

          fragment.appendChild(h2, div);
          //~ Return the fragment
          return fragment;
        } else {
          h1 = new HTMLElement("h1", null).inner(
            ContentsAdmin.create.errors.parents
          );
          this._modal.innerHTML = h1;
        }
    }
  }
}
