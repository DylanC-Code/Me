"use-strict";

import Request from "../../public/api/Request.js";
import ModalControllers from "./Modal.controllers.js";

/** Controller for the delete modal
 * @param  { STRING } table The name of the about table
 * @param  { INTEGER } primaryKey The primary key of the element
 */

export default class DeleteControllers extends ModalControllers {
  constructor(table, primaryKey) {
    super(table);
    this.req = new Request("DELETE", `/${this.table}/delete/${primaryKey}`);
  }
}
