"use-strict"

import CategoriesDatasAnims from "../animations/CategoriesDatas.animations.js";
import ButtonsControllers from "../controllers/Buttons.controllers.js";
import MainProjectsInterfaceControllers from "../controllers/MainProjectsInterface.controllers.js";
import Cards from "./Cards.js";

export default class MainProjectsInterface {
  #datas;
  #index;
  #speed
  constructor(datas, index = 0, speed = "fast") {
    this.#datas = datas;
    this.#index = index
    this.#speed = speed
  }

  get display() {
    this.#create()
    this.#animsAndControllers()
  }

  #create() {
    // Remove child of the main
    let main = document.querySelector("#container section");

    // Create maximum four cards
    for (const d of this.#datas) {
      if (typeof this.#datas != "object") break;
      if (this.#datas.indexOf(d) > this.#index + 3 || this.#datas.indexOf(d) < this.#index) continue;

      let card = new Cards.Project(d).display
      main.appendChild(card);
    }
  }

  #animsAndControllers() {
    this.#speed == "fast" ? CategoriesDatasAnims.fast : CategoriesDatasAnims.slow
    new MainProjectsInterfaceControllers(this.#datas).play
    new ButtonsControllers(this.#datas).play
  }
}