"use-strict";

import { Request } from "../../public/build/api/Request.js";
import { Validator } from "../tools/Validator.js";

export class Create_Controllers {
  constructor(table) {
    this.table = table;
    this.modal = document.getElementById("#modal");
    this.name = document.querySelector("#modal input[type='text']");
    this.errors = [];
    this.body = {};
  }

  get active() {
    if (this.table == "categories") {
      this.valid = [0];
      this.categories();
    } else if (this.table == "languages") {
      this.valid = [0, 0];
      this.languages();
    } else if (this.table == "concepts") {
      this.valid = [0, 0, 0];
      this.concepts();
    }
  }

  categories() {
    this.errors.push(new Validator(this.name).name());
    if (this.errors[0][1]) {
      this.errors[0][0].style.border = "2px solid crimson";
      this.errors[0][0].value = "";
      this.errors[0][0].setAttribute("placeholder", this.errors[0][1]);
    } else this.body.name = this.name.value;
    this.request();
  }

  languages() {
    this.checkName();
    new Error_Input(this.errors);
  }

  concepts() {
    this.checkName();
    new Error_Input(this.errors);
  }

  // checkName() {
  //   if (this.name.value) {
  //     this.name.value.match(/^[\wÜ-ü]{2,15}[\s-]?[\wÜ-ü]{0,15}$/)
  //       ? (this.valid[0] = 1)
  //       : this.errors.push([this.name, 1]);
  //   } else this.errors.push([this.name, 0]);
  // }
  async request() {
    if (!this.errors[0][1]) {
      let req = await new Request("POST", `/${this.table}/create`, this.body)
        .play;

      console.log(req);
      if (req.error) {
        this.errors[0][0].style.border = "2px solid crimson";
        this.errors[0][0].value = "";
        this.errors[0][0].setAttribute("placeholder", req.result);
      }
    }
  }
}
