"use-strict";

import { Request } from "../../public/build/api/Request.js";
import { Input } from "../classes/Input.js";
import { Modal } from "./Modal.js";

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
