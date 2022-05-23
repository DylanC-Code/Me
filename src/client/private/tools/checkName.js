"use-strict";

import { Validator } from "./Validator.js";

export function checkName() {
  //~ Try the validity of the input text with the Validator class
  let name = document.getElementById("name");
  let errors = new Validator(name).name();

  // //~ If an error is return display it to the client
  if (!errors) return true;

  name.style.border = "2px solid crimson";
  name.value = "";
  name.setAttribute("placeholder", errors);
}
