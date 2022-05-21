"use-strict";

import { Create_Controllers } from "./Create.controllers.js";
import { deleteController } from "./delete.controllers.js";
import { updateControllers } from "./update.controllers.js";

export function modalControllers(method, table, primaryKey) {
  let buttons = document.querySelectorAll("#modal button");
  let modal = document.getElementById("modal");

  buttons[0].addEventListener("click", () => {
    //~ Verify the method about the modal
    if (method == "UPDATE") updateControllers(table, primaryKey);
    else if (method == "CREATE") new Create_Controllers(table).active;
  });

  buttons[1].addEventListener("click", () => modal.remove());
}
