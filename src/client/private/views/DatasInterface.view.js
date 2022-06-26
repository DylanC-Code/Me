"use-strict";

import Request from "../../public/api/Request.js";
import datasInterfaceContainer from "../containers/datasInterface.container.js";
import HeaderDatasInterface from "../components/HeaderDatasInterface.js";
import MainDatasInterface from "../components/MainDatasInterface.js";
import subNavbarInterfaceControllers from "../controllers/subNavbarInterface.controllers.js";

export default class DatasInterfaceView {
  /**
   * Create the data interface view for each table
   * @param  { String } table The table of the data of load
   * @param  { Array } datas Content datas to display
   * @param  { String } speed For control the display of the interface
   */

  #table;
  #datas;
  #speed
  constructor(table, datas, speed = "fast") {
    this.#table = table;
    this.#datas = datas;
    this.#speed = speed
  }

  get display() {
    this.#create()
  }

  //* Create The Interface For Categories, Languages Or Concepts
  async #create() {
    let subMenu = document.querySelector("#container > ul");

    // If datas is null, get datas to the server
    if (!this.#datas) {
      this.#datas = await new Request("GET", `/${this.#table}`).play;
      this.#datas = this.#datas.result;
    }

    // Call the container of the view if not exist already
    if (!subMenu) datasInterfaceContainer();

    // Call the controllers for the subNavbar
    subNavbarInterfaceControllers()

    // Call the header and the section of the view
    new HeaderDatasInterface(this.#table, this.#datas, this.#speed).display
    new MainDatasInterface(this.#table, this.#datas, 0, this.#speed).display()
  }
}
