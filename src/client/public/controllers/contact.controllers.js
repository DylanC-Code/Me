"use-strict";

import { Validator } from "../../../server/utils/Validator.js";
import { TypeWriter } from "../animations/TypeWriter.js";
import { Contents } from "../contents/global.contents.js";

export function contactControllers() {
  let h1 = document.querySelector("#container > h1");
  let p = document.querySelector("#container > p");

  new TypeWriter(h1, Contents.contact.h1).play();
  new TypeWriter(p, Contents.contact.p).play();

  document.getElementById('submit').addEventListener('click', () => formControllers())
}

function formControllers() {
  let inputs = ["email", "object", "text"].map(controlInput)
  let valid = true;

  inputs.forEach(i => { if (!i) valid = false })
  if (!valid) return
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
