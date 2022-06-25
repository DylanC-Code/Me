"use-strict";

import Tools from "../../global/utils/Tools.js";
import Request from "../../public/api/Request.js";
import CategoriesDatasAnims, { categoriesDataAnims } from "../animations/categoriesData.animations.js";
import { buttonsControllers } from "../controllers/buttons.controllers.js";
import MainDatasInterfaceControllers from "../controllers/mainDatasInterface.controllers.js";
import Card from "./Card.js";

export async function mainDatasInterface(table, datas, index = 0) {
  //~ Remove child of the main
  let main = document.querySelector("#subContainer section");
  Tools.removeChilds(main)

  //~ If datas is undefined make request to the database
  if (!datas) {
    datas = await new Request("GET", `/${table}`).play;
    datas = datas.result;
  }

  //~ Create maximum four cards
  for (const d of datas) {
    // if (typeof datas != "object") break;
    if (typeof datas != "object" || datas.indexOf(d) > index + 3) break;
    // if (datas.indexOf(d) > index + 3 || datas.indexOf(d) < index) continue;
    if (datas.indexOf(d) < index) continue;

    let card = new Card(table, d).card;
    main.appendChild(card);
  }

  //! anims
  // categoriesDataAnims().forEach((anim) => anim.play());
  CategoriesDatasAnims.play
  new MainDatasInterfaceControllers(table, datas).play
  //~ Controllers
  buttonsControllers(datas);
}

export default class MainDatasInterface {
  constructor(table, datas, index = 0) {
    this.table = table;
    this.datas = datas;
    this.index = index
  }

  async display() {
    this.#create()
    this.#animsAndControllers()
  }

  async #create() {
    // Remove child of the main
    let main = document.querySelector("#subContainer section");
    Tools.removeChilds(main)

    if (!this.datas) {
      this.datas = await new Request("GET", `/${this.table}`).play;
      this.datas = this.datas.result;
    }

    for (const d of this.datas) {
      if (typeof this.datas != "object" || this.datas.indexOf(d) > this.index + 3) break;
      if (this.datas.indexOf(d) < this.index) continue;

      let card = new Card(this.table, d).card;
      main.appendChild(card);
    }
  }

  #animsAndControllers() {
    CategoriesDatasAnims.play
    new MainDatasInterfaceControllers(this.table, this.datas)
    // mainDatasInterfaceControllers(this.table, this.datas);
    buttonsControllers(this.datas);

  }
}