"use-strict";

import { createControllers } from "./create.controllers.js";
import { deleteController } from "./delete.controllers.js";
import { updateControllers } from "./update.controllers.js";

export function modalControllers(method, table, primaryKey) {
  //~ Verify the method about the modal
  if (method == "DELETE") deleteController(table, primaryKey);
  else if (method == "UPDATE") updateControllers(table, primaryKey);
  else if (method == "CREATE") createControllers(table);
}
