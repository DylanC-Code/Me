"use-strict";

import { Request } from "../../public/build/api/Request.js";
import { HTMLElement } from "../classes/HTMLElement.js";
import { Input } from "../classes/Input.js";
import { Label } from "../classes/Label.js";
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

  //^ Create the modal
  async create() {
    //~ Call this.special() for control differences
    let special = await this.special();

    //~ Create many HTMLElements
    let h1 = new HTMLElement("h1", null).inner(
      `Update <mark class="text_blue">${this.datas.name}</mark>`
    );
    let name = new Input("text", "name", this.datas.name).element;
    this._modal.append(h1, name);

    if (special[1]) this._modal.appendChild(special[1]);

    let div = document.createElement("div");
    div.innerHTML = `
      <button id="yes">Update</button>
      <button id="no">Cancel</button>
     `;

    //~ Append elements to this._modal
    this._modal.append(special[0], div);
    return this._modal;
  }

  //^ Create fragment with the difference between the table
  //^ Return fragment
  async special() {
    //~ Create new fragment
    let div = document.createElement("div");

    switch (this.table) {
      case "languages":
        let categories = await new Request("GET", "/categories").play;
        categories.result.forEach((cat) => {
          let input = new Input("checkbox", cat.id, null).element;
          let label = new Label(cat.id, null, cat.name).element;

          //~ Append them to the fragment
          div.append(input, label);
        });
        return [div];
      case "concepts":
        let languages = await new Request("GET", "/languages").play;
        let note = new Input("number", null, "0").element;
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
