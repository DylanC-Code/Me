"use-strict";

import { Request } from "../../public/build/api/Request.js";
import { Create_Controllers } from "../controllers/Create.controllers.js";
import { Update_Controllers } from "../controllers/update.controllers.js";

export function chooseControllers(method, table, primaryKey) {
  let buttons = document.querySelectorAll("#modal button");
  let modal = document.getElementById("modal");

  buttons[0].addEventListener("click", () => {
    //~ Verify the method about the modal
    if (method == "DELETE")
      new Request("DELETE", `/${table}/delete/${primaryKey}`).play;
    if (method == "UPDATE") new Update_Controllers(table, primaryKey).active;
    else if (method == "CREATE") new Create_Controllers(table).active;
  });

  buttons[1].addEventListener("click", () => modal.remove());
}
