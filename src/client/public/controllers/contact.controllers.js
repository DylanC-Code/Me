"use-strict";

import { TypeWriter } from "../animations/TypeWriter.js";
import { Contents } from "../contents/global.contents.js";

export function contactControllers() {
  let h1 = document.querySelector("#container > h1");
  let p = document.querySelector("#container > p");

  new TypeWriter(h1, Contents.contact.h1).play();
  new TypeWriter(p, Contents.contact.p).play();

  document.getElementById('submit').addEventListener('click', () => controlInputs())
}
function controlInputs() {
  email()
}

function email() {
  let email = document.getElementById("email")
  let regex = /^[A-Za-z0-9_.-]{3,30}@[a-z]{2,15}.[A-Za-z]{2,15}/

  if (!regex.test(email.value)) {
    email.value = ""
    email.setAttribute("placeholder", "Email invalid !")
    return false
  } else return true
}
