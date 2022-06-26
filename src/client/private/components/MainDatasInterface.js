"use-strict";

import Tools from "../../global/utils/Tools.js";
import Request from "../../public/api/Request.js";
import CategoriesDatasAnims from "../animations/CategoriesDatas.animations.js";
import ButtonsControllers from "../controllers/Buttons.controllers.js";
import MainDatasInterfaceControllers from "../controllers/MainDatasInterface.controllers.js";
import Cards from "./Cards.js";

export default class MainDatasInterface {
  constructor(table, datas, index = 0, speed = "fast") {
    this.table = table;
    this.datas = datas;
    this.index = index
    this.speed = speed
  }

  async display() {
    await this.#create()
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

      let card = new Cards.Data(this.table, d).display
      main.appendChild(card);
    }
  }

  #animsAndControllers() {
    this.speed == "fast" ? CategoriesDatasAnims.fast : CategoriesDatasAnims.slow
    new MainDatasInterfaceControllers(this.table, this.datas).play
    new ButtonsControllers(this.datas).play
  }
}