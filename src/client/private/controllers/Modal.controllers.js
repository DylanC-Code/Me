"use-strict";

import DatasInterfaceView from "../views/DatasInterface.view.js";

export class Modal_Controllers {
  /**
   * The body class for modals controllers
   * @param  { STRING } table The name of the about table
   */
  constructor(table) {
    this.table = table;
    this.name = document.getElementById("name");
    this.err = document.getElementById("error");
    this.file = document.getElementById("file");
    this.cat = document.querySelector("input[type='radio']:checked");
    this.note = document.querySelector("input[type='number']");
    this._languages = [
      ...document.querySelectorAll("input[type='checkbox']:checked"),
    ];
    this.err ? (this.err.textContent = "") : null;
    this.body = {};
    this.req = null;
  }

  //^ Getter for control the table chose
  get active() {
    if (this.table == "categories") this.categories();
    else if (this.table == "languages") this.languages();
    else if (this.table == "concepts") this.concepts();
  }

  //^ Request for insert new element
  async request() {
    //~ Execute request
    let requete = await this.req.play;

    //~ If the server send an error, display this to the client
    if (requete.error) return (this.err.textContent = requete.result);

    //~ If no error is send remove modal and display Data_interface_view
    document.getElementById("modal").remove();
    new DatasInterfaceView(this.table).create();
  }
}
