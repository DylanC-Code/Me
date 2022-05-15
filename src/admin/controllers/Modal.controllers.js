"use-strict";

import { createControllers } from "./create.controllers.js";
import { deleteController } from "./delete.controllers.js";
import { updateControllers } from "./update.controllers.js";

export class Modal_Controllers {
  /**
   * Controllers for the modal
   * @param  { STRING } method The name of the method use
   * @param  { STRING } table The name of the table
   * @param  { INTEGER } primaryKey The primaryKey of the element
   */
  constructor(method, table, primaryKey) {
    this.method = method;
    this.table = table;
    this.primaryKey = primaryKey;
  }

  //^ Getter for active the controllers
  get active() {
    //~ Verify the method about the modal
    switch (this.method) {
      case "DELETE":
        deleteController(this.table, this.primaryKey);
        break;
      case "UPDATE":
        updateControllers(this.table, this.primaryKey);
        break;
      case "CREATE":
        createControllers(this.table);
        break;
    }
  }
}
