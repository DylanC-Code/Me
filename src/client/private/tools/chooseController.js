"use-strict";

import { Create_Controllers } from "../controllers/Create.controllers.js";
import { Delete_Controllers } from "../controllers/Delete.controllers.js";
import { Update_Controllers } from "../controllers/Update.controllers.js";

export function chooseControllers(method, table, primaryKey) {
  let buttons = document.querySelectorAll("#modal button");
  let modal = document.getElementById("modal");

  buttons[0].addEventListener("click", async () => {
    //~ Verify the method about the modal
    if (method == "CREATE") new Create_Controllers(table).active;
    if (method == "UPDATE") new Update_Controllers(table, primaryKey).active;
    if (method == "DELETE") new Delete_Controllers(table, primaryKey).request();
  });

  buttons[1].addEventListener("click", () => modal.remove());
}
