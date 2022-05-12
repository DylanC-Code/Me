"use-strict";

import { Request } from "../../public/build/api/Request.js";

/** Controller for the delete modal
 * @param  { STRING } table The name of the about table
 * @param  { INTEGER } primaryKey The primary key of the element
 */
export function deleteController(table, primaryKey) {
  let buttons = document.querySelectorAll("#modal button");
  let modal = document.getElementById("modal");

  //~ Event if yes is click
  buttons[0].addEventListener("click", () => {
    //~ Send request to the server and remove modal
    new Request("DELETE", `/${table}/delete/${primaryKey}`).play;
    modal.remove();
  });

  //~ Event if no is click
  buttons[1].addEventListener("click", () => modal.remove());
}
