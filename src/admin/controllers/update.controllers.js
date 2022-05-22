"use-strict";

import { Request } from "../../public/build/api/Request.js";
import { checkName } from "../tools/checkName.js";
import { Validator } from "../tools/Validator.js";
import { Modal_Controllers } from "../classes/Modal.controllers.js";

//^ Controllers for the update of the element
// * @param  { STRING } table The name of the about table
// * @param  { INTEGER } primaryKey The primaryKey of the element click
export function updateControllers(table, primaryKey) {
  let name = document.getElementById("name");
  let err = document.getElementById("error");
  let note = document.querySelector("input[type='number']");
  let category = document.querySelector("input[type='radio']:checked");
  let languages = [
    ...document.querySelectorAll("input[type='checkbox']:checked"),
  ];
  let body = { pk: primaryKey };

  //~ Control the validity of the input name
  if (!checkName()) return;
  if (table == "categories") {
    body.name = name.value;
    let req = new Request("PUT", `/${table}/update`, body).play;

    return;
  }
  if (table == "languages") {
    category ? (body.category = category.id) : null;
    return;
  }

  let error = new Validator(note).number(0, 5);
  if (note.value && error) return (err.textContent = error);
  let id_languages = languages.map((l) => l.id);
}

export class Update_Controllers extends Modal_Controllers {
  constructor(table, primaryKey) {
    this.table = table;
    this.pk = primaryKey;
  }

  category() {
    if (!checkName()) return;
    this.body.name = this.name.value;
    this.req.body = this.body;
    this.request();
  }

  languages() {}

  concepts() {}
}
