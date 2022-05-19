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
    if (this.table == "categories") {
      //~ 'this.valid' have one element to check and 'this.categories' is call
      this.valid = [0];
      this.categories();
    } else if (this.table == "languages") {
      //~ 'this.valid' have two elements to check and 'this.languages' is call
      this.valid = [0, 0];
      this.languages();
    } else if (this.table == "concepts") {
      //~ 'this.valid' have three elements to check and 'this.concepts' is call
      this.valid = [0, 0, 0];
      this.concepts();
    }
  }

  //^ When its table categories
  categories() {
    //~ If 'this.checkName' return true send the request
    if (this.checkName()) {
      this.body.name = this.name.value;
      this.request();
    }
  }

  //^ When its table languages
  async languages() {
    //~ Get the different inputs to check
    let cat = document.querySelector("input[type='radio']:checked");
    let file = document.getElementById("logo");

    //~ If no image its choice by the client send an error
    if (!file.files[0]) this.err.textContent = "Please select a Logo";
    //~ If no category is choose send an error
    else if (!cat) this.err.textContent = "Please select an associate category";
    //~ If 'this.checkName' return true, create new Form Data and send the insert request to the server
    else if (this.checkName()) {
      this.body = new FormData();
      this.body.append("name", this.name.value);
      this.body.append("id_category", cat.id);
      this.body.append("logo", file.files[0]);
      //~ Send request
      let req = await fetch("http://127.0.0.1:5000/api/languages/create", {
        method: "POST",
        body: this.body,
      }).then((res) => res.json());

      //~ If an error is return by the server display it
      if (req.error) this.err.textContent = req.result;
    }
  }

  //^ When its table concepts
  concepts() {
    //~ Get the different inputs to check
    let note = document.querySelector("input[type='number']");
    let languages = document.querySelectorAll("input[type='checkbox']:checked");

    //~ Control the validity of the input number
    let valid = new Validator(note);
    valid.numberValue(0, 5);
    this.errors = valid.errors;

    if (this.errors[0][1]) this.err.textContent = this.errors[0][1];
    else if (!languages[0])
      this.err.textContent = "Please chose minimum one language !";
    else if (this.checkName()) {
      //~ If no error make the body of the request
      let id_languages = [];
      languages.forEach((language) => id_languages.push(language));

      this.body = {
        name: this.name.value,
        value: note.value,
        languages: id_languages,
      };

      //~ Send the request
      this.request();
    }
  }

  //^ Request for insert new element
  async request() {
    //~ if no error exist execute request
    if (!this.errors[0][1]) {
      let req = await new Request("POST", `/${this.table}/create`, this.body)
        .play;

      //~ If the server send an error, display this to the client
      if (req.error) this.err.textContent = req.result;
      else {
        //~ If no error is send remove modal and display Data_interface_view
        document.getElementById("modal").remove();
        new Datas_Interface_View(this.table).create();
      }
    }
  }

  //^ Control the validity of the input name
  //^ Return boolean
  checkName() {
    //~ Try the validity of the input text with the Validator class
    console.log(this.name);
    this.errors.push(new Validator(this.name).name());
    // //~ If an error is return display it to the client
    if (this.errors[0][1]) {
      this.errors[0][0].style.border = "2px solid crimson";
      this.errors[0][0].value = "";
      this.errors[0][0].setAttribute("placeholder", this.errors[0][1]);
    } else return true;
  }
}
