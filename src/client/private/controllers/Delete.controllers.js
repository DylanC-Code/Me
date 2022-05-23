"use-strict";

import { Request } from "../../public/build/api/Request.js";
import { Modal_Controllers } from "./Modal.controllers.js";

/** Controller for the delete modal
 * @param  { STRING } table The name of the about table
 * @param  { INTEGER } primaryKey The primary key of the element
 */

export class Delete_Controllers extends Modal_Controllers {
  constructor(table, primaryKey) {
    super(table);
    this.req = new Request("DELETE", `/${this.table}/delete/${primaryKey}`);
  }
}
