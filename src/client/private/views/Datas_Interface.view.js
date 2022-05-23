"use-strict";

import { datasInterfaceContainer } from "../containers/datasInterface.container.js";
import { headerDatasInterface } from "../components/headerDatasInterface.js";
import { mainDatasInterface } from "../components/mainDatasInterface.js";
import { Request } from "../../public/api/Request.js";

export class Datas_Interface_View {
  /**
   * Create the data interface view for each table
   * @param  { STRING } table The table of the data of load
   */
  constructor(table, datas) {
    this.table = table;
    this.view = document.getElementById("main");
    this.view.className = "main_interface";
    this.anims;
    this.datas = datas;
  }

  //^ Create the interface
  async create() {
    let subMenu = document.querySelector("#container > ul");

    //~ Control if datas is not null
    if (!this.datas) {
      this.datas = await new Request("GET", `/${this.table}`).play;
      this.datas = this.datas.result;
    }

    //~ Call the container of the view if not exist already
    if (!subMenu) datasInterfaceContainer();

    //~ Call the header and the section of the view
    headerDatasInterface(this.table, this.datas);
    await mainDatasInterface(this.table, this.datas);
  }
}
