"use-strict";

import { Request } from "../../public/build/api/Request.js";
import { Validator } from "../tools/Validator.js";
import { Datas_Interface_View } from "../views/Datas_Interface_View.view.js";

export class Create_Controllers {
  /**
   * Create controllers for check the inputs in the create modal
   * @param  { STRING } table
   */
  constructor(table) {
    this.table = table;
    this.name = document.querySelector("#modal input[type='text']");
    this.err = document.getElementById("error");
    this.err.textContent = "";
    this.errors = [];
    this.body = {};
  }

  //^ Getter for control the table chose
  get active() {
    if (this.table == "categories") this.categories();
    else if (this.table == "languages") this.languages();
    else if (this.table == "concepts") this.concepts();
  }

  //^ When its table categories
  categories() {
    //~ If 'this.checkName' return true send the request
    if (!this.checkName()) return;

    this.body.name = this.name.value;
    this.request();
  }

  //^ When its table languages
  async languages() {
    //~ Get the different inputs to check
    let cat = document.querySelector("input[type='radio']:checked");
    let file = document.getElementById("logo");

    //~ Control the differents inputs and send error
    this.checkName();
    if (!file.files[0]) return (this.err.textContent = "Please select a Logo");
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

    //~ Control the validity of the input number
    let id_languages = languages.map((language) => language.id);
    let error = new Validator(note).numberValue(0, 5);

    //~ Control the differents inputs and send error
    this.checkName();
    if (error) return (this.err.textContent = error);
    else if (!id_languages[0])
      return (this.err.textContent = "Please chose minimum one language !");

    this.body = {
      name: this.name.value,
      value: note.value,
      languages: id_languages,
    };

    //~ Send the request
    this.request();
  }

  //^ Request for insert new element
  async request() {
    //~ Execute request
    let req = await new Request("POST", `/${this.table}/create`, this.body)
      .play;

    //~ If the server send an error, display this to the client
    if (req.error) return (this.err.textContent = req.result);

    //~ If no error is send remove modal and display Data_interface_view
    document.getElementById("modal").remove();
    new Datas_Interface_View(this.table).create();
  }

  //^ Control the validity of the input name
  //^ Return boolean
  checkName() {
    //~ Try the validity of the input text with the Validator class
    this.errors = new Validator(this.name).name();

    // //~ If an error is return display it to the client
    if (!this.errors) return true;

    this.name.style.border = "2px solid crimson";
    this.name.value = "";
    this.name.setAttribute("placeholder", this.errors);
    return false;
  }
}
