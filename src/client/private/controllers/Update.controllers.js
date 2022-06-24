"use-strict";

import checkName from "../tools/checkName.js";
import Validator from "../../global/utils/Validator.js";
import Request from "../../public/api/Request.js";
import { Modal_Controllers } from "./Modal.controllers.js";

export class Update_Controllers extends Modal_Controllers {
  constructor(table, primaryKey) {
    super(table);
    this.pk = primaryKey;
    this.req = new Request("PUT", `/${this.table}/update`);
  }

  //^ If its table categories
  categories() {
    //~ Check input
    if (checkName()) this.body.name = this.name.value;
    if (!this.body) return (this.err.textContent = "Please fill the inputs !");
    this.body.pk = this.pk;

    //~ Send the request
    this.req.body = this.body;
    this.request();
  }

  //^ If its table languages
  async languages() {
    //~ Create formdata for send file
    this.body = new FormData();

    //~ Control many inputs
    if (checkName()) this.body.append("name", this.name.value);
    else return;

    if (this.cat) this.body.append("id_category", this.cat.id);
    if (this.file.files) this.body.append("logo", this.file.files[0]);
    if (!this.body) return (this.err.textContent = "Please fill the inputs !");
    this.body.append("pk", this.pk);

    //~ Send request
    let req = await fetch(`http://127.0.0.1:4000/api/languages/update/`, {
      method: "PUT",
      body: this.body,
    });

    //~ If an error is return by the server display it
    if (req.error) return (this.err.textContent = req.result);
  }

  //^ If its table concepts
  concepts() {
    let id_languages = this._languages.map((language) => language.id);
    let error = new Validator(this.note).numberValue(0, 5);

    //~ Check inputs
    if (checkName()) this.body.name = this.name.value;
    else return;
    if (!error) this.body.value = this.note.value;
    else return (this.err.textContent = error);
    if (id_languages[0]) this.body.languages = id_languages;
    if (!this.body) return (this.err.textContent = "Please fill the inputs !");
    this.body.pk = this.pk;

    //~ Send the request
    this.req.body = this.body;
    this.request();
  }
}
