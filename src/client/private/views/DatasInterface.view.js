"use-strict";

import Request from "../../public/api/Request.js";
import datasInterfaceContainer from "../containers/datasInterface.container.js";
import HeaderDatasInterface, { headerDatasInterface } from "../components/headerDatasInterface.js";
import { mainDatasInterface } from "../components/mainDatasInterface.js";
import subNavbarInterfaceControllers from "../controllers/subNavbarInterface.controllers.js";

export default class DatasInterfaceView {
  /**
   * Create the data interface view for each table
   * @param  { STRING } table The table of the data of load
   */
  constructor(table, datas) {
    this.table = table;
    this.datas = datas;
  }

  //* Create The Interface For Categories, Languages Or Concepts
  async create() {
    let subMenu = document.querySelector("#container > ul");

    // If datas is null, get datas to the server
    if (!this.datas) {
      this.datas = await new Request("GET", `/${this.table}`).play;
      this.datas = this.datas.result;
    }

    // Call the container of the view if not exist already
    if (!subMenu) datasInterfaceContainer();

    // Call the controllers for the subNavbar
    subNavbarInterfaceControllers()

    // Call the header and the section of the view
    // headerDatasInterface(this.table, this.datas);
    new HeaderDatasInterface(this.table, this.datas).display
    
    // TODO
    await mainDatasInterface(this.table, this.datas);
    // TODO
  }
}
