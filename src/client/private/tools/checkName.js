"use-strict";

import Validator from "../../global/utils/Validator.js";

/**
 * Control if the input name is valid and return error if isn't
 */

export default function checkName() {
  // Try the validity of the input text with the Validator class
  let name = document.getElementById("name");
  let errors = new Validator(name).name();

  // If an error is return display it to the client
  if (!errors) return true;

  name.style.border = "2px solid crimson";
  name.value = "";
  name.setAttribute("placeholder", errors);
}
