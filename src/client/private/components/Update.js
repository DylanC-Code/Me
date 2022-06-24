"use-strict";

import Request from "../../public/api/Request.js";
import HTMLElement from "../../global/classes/HTMLElement.js";
import Modal from "../../global/classes/Modal.js";
import Input from "../../global/classes/Input.js";
import Label from "../../global/classes/Label.js";

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
    let p = new HTMLElement("p", "error").element;
    let h1 = new HTMLElement("h1", null).inner(
      `Update <mark class="text_blue">${this.datas.name}</mark>`
    );
    let name = new Input("text", "name", this.datas.name).element;
    this._modal.append(p, h1, name);

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
        let file = new Input("file", "file").element;
        let logo = new Label("file", null, null).element;

        let categories = await new Request("GET", "/categories").play;
        categories.result.forEach((cat) => {
          let input = new Input("radio", cat.id, null).attributes([
            ["name", "category"],
          ]);
          let label = new Label(cat.id, null, cat.name).element;

          //~ Append them
          this._modal.append(file, logo);
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
