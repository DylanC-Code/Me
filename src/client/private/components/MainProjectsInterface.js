"use-strict"

import CategoriesDatasAnims from "../animations/CategoriesDatas.animations.js";
import ButtonsControllers from "../controllers/Buttons.controllers.js";
import MainProjectsInterfaceControllers from "../controllers/MainProjectsInterface.controllers.js";
import Cards from "./Cards.js";

export default class MainProjectsInterface {
  #datas;
  #index;
  constructor(datas, index = 0) {
    this.#datas = datas;
    this.#index = index
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
    CategoriesDatasAnims.play

    new MainProjectsInterfaceControllers(this.#datas).play
    new ButtonsControllers(this.#datas).play
  }
}