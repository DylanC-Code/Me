"use-strict";

import { Request } from "../../public/build/api/Request.js";

//^ Controllers for the update of the element
// * @param  { STRING } table The name of the about table
// * @param  { INTEGER } primaryKey The primaryKey of the element click
export function updateControllers(table, primaryKey) {
  let modal = document.getElementById("modal");
  let inputs = document.querySelectorAll("#modal input[type=text]");
  let buttons = document.querySelectorAll("#modal button");
  let valid = [];

  //~ Create array with value equal 0 for each input
  for (let i = 0; i < inputs.length; i++) valid.push(0);

  //~ Add click listener for yes button
  buttons[0].addEventListener("click", () => {
    //~ Create map with association key => value
    let body = new Map();

    //~ Set primaryKey on map
    body.set("pk", primaryKey);

    //~ Control value of each input and set its value in the array at 1 or 0
    for (let i = 0; i < inputs.length; i++) {
      valid[i] = inputs[i].value.match(/^[\wÜ-ü]{1,30}[ -_]?[\wÜ-ü]{0,30}$/)
        ? 1
        : 0;

      //~ Set the map with id => value of the input
      body.set(inputs[i].id, inputs[i].value);
    }

    //~ Transform the map on object
    body = Object.fromEntries(body);

    //~ If one key of valid is equal to zero the ok variable set false
    let ok = true;
    valid.forEach((i) => (ok = i == 1 ? true : false));

    //~ If ok variable is true send the request
    if (ok) {
      new Request("PUT", `/${table}/update`, body).play;
      modal.remove();
    } else {
      for (let e = 0; e < valid.length; e++) {
        valid[e] == 0
          ? (inputs[e].style.border = "1px solid #FF4B33")
          : (inputs[e].style.border = "initial");
      }
    }
  });

  //~ Add click listener for no button
  buttons[1].addEventListener("click", () => {
    //~ Delete modal
    modal.remove();
  });
}
