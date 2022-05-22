"use-strict";

import { checkName } from "../tools/checkName.js";
import { Validator } from "../tools/Validator.js";
import { Modal_Controllers } from "../classes/Modal.controllers.js";
import { Request } from "../../public/build/api/Request.js";

export class Create_Controllers extends Modal_Controllers {
  /**
   * Create controllers for check the inputs in the create modal
   * @param  { STRING } table The name of the table
   */
  constructor(table) {
    super(table);
    this.req = new Request("POST", `/${this.table}/create`);
  }

  //^ When its table categories
  categories() {
    //~ If checkName return true send the request
    if (!checkName()) return;

    this.body.name = this.name.value;
    this.req.body = this.body;
    this.request();
  }

  //^ When its table languages
  async languages() {
    //~ Get the different inputs to check
    let cat = document.querySelector("input[type='radio']:checked");
    let file = document.getElementById("logo");

    //~ Control the differents inputs and send error
    checkName();
    if (!file.files) return (this.err.textContent = "Please select a Logo");
    else if (!cat)
      return (this.err.textContent = "Please select an associate category");

    //~ Create new Form Data and append it the elements
    this.body = new FormData();
    this.body.append("name", this.name.value);
    this.body.append("id_category", cat.id);
    this.body.append("logo", file.files[0]);

    //~ Send request
    let req = await fetch("http://127.0.0.1:4000/api/languages/create", {
      method: "POST",
      body: this.body,
    }).then((res) => res.json());

    //~ If an error is return by the server display it
    if (req.error) this.err.textContent = req.result;
  }

  //^ When its table concepts
  concepts() {
    //~ Get the different inputs to check
    let note = document.querySelector("input[type='number']");
    let languages = [
      ...document.querySelectorAll("input[type='checkbox']:checked"),
    ];

    //~ Control the validity of the input number and get all id_language
    let id_languages = languages.map((language) => language.id);
    let error = new Validator(note).numberValue(0, 5);

    //~ Control the differents inputs and send error
    checkName();
    if (error) return (this.err.textContent = error);
    else if (!id_languages[0])
      return (this.err.textContent = "Please chose minimum one language !");

    this.body = {
      name: this.name.value,
      value: note.value,
      languages: id_languages,
    };

    //~ Send the request
    this.req.body = this.body;
    this.request();
  }
}
