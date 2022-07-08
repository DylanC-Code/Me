"use-strict";

import { Validator } from "../../../server/utils/Validator.js";
import { contactView } from "../views/contact.view.js"
import { TypeWriter } from "../animations/TypeWriter.js";
import { Contents } from "../contents/global.contents.js";
import Request from "../api/Request.js";

export function contactControllers() {
  sessionStorage.getItem("mail") ? contactSuccesfull() : formControllers()

}

function formControllers() {
  const content = Contents.contact.form
  let h1 = document.querySelector("#container > h1");
  let p = document.querySelector("#container > p");

  new TypeWriter(h1, content.h1).play();
  new TypeWriter(p, content.p).play();

  document.getElementById('submit').addEventListener('click', () => {
    let inputs = ["email", "object", "text"].map(controlInput)
    let valid = true;

    inputs.forEach(i => { if (!i) valid = false })
    if (!valid) return

    let body = {
      mail: inputs[0],
      object: inputs[1],
      text: inputs[2],
    }

    let res = new Request("POST", "/mail", body).play

    if (res.error) console.log(res.error);
    else contactView()
  })
}

function controlInput(name) {
  let input = document.getElementById(name)
  let validator = name == 'email' ? Validator.email(input.value) : Validator.text(input.value)

  if (!validator) {
    input.value = ""
    input.setAttribute("placeholder", name.charAt(0).toUpperCase() + name.slice(1) + ` invalid !`)
    return false;
  } else {
    input.setAttribute("placeholder", "")
    return input.value
  }
}

function contactSuccesfull() {
  const content = Contents.contact.succes
  let h1 = document.querySelector("#container > h1");
  let p = document.querySelector("#container > p");

  new TypeWriter(h1, content.h1).play();
  new TypeWriter(p, content.p).play();
}