"use-strict";

import { Request } from "../../public/build/api/Request.js";
import { Datas } from "../classes/Datas.js";
import { categoriesDataAnims } from "../animations/categoriesData.animations.js";
import { headerInterfaceAnims } from "../animations/headerInterface.animations.js";
import { datasInterfaceAnims } from "../animations/datasInterface.animations.js";
import { Datas_Interface } from "../components/Datas_Interface.js";
import { Datas_Interface_Controllers } from "../controllers/Datas_Interface.controllers.js";

export class Datas_Interface_View {
  /**
   * Create the data interface view for each table
   * @param  { STRING } table The table of the data of load
   */
  constructor(table) {
    this.table = table;
    this.view = document.getElementById("main");
    this.view.className = "main_interface";
    this.anims;
  }

  //^ Create the interface
  async create() {
    //~ Request with this.table
    let { result } = await new Request("GET", `/${this.table}`).play;

    //~ Create new Datas_Interface and append to this.view
    let datas_interface = new Datas_Interface();
    this.view.appendChild(datas_interface.interface);
    //~ Set anims the interface
    datas_interface.anims = datasInterfaceAnims();

    //~ Make the Datas cards with this.table and the result of the request
    let datas = new Datas(this.table, result);
    datas.display;
    //~ Set anims of the cards
    datas.anims = [...categoriesDataAnims(), ...headerInterfaceAnims()];

    //~ Launch all of the anims
    datas.anims.forEach((anim) => anim.play());
    datas_interface.anims.forEach((anim) => anim.play());

    //~ Call the controllers of the interface
    new Datas_Interface_Controllers(result, this.table).display;
  }
}
