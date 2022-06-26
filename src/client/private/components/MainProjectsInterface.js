"use-strict"
  ;
import CategoriesDatasAnims from "../animations/categoriesData.animations.js";
import ButtonsControllers from "../controllers/Buttons.controllers.js";
import MainProjectsInterfaceControllers from "../controllers/MainProjectsInterface.controllers.js";
import Cards from "./Cards.js";

// export default function mainProjectsInterface(datas, index = 0) {
//   // Remove child of the main
//   let main = document.querySelector("#container section");

//   // Create maximum four cards
//   for (const d of datas) {
//     if (typeof datas != "object") {
//       break;
//     }
//     if (datas.indexOf(d) > index + 3 || datas.indexOf(d) < index) {
//       continue;
//     }
//     // let card = cardProject(d)
//     let card = new Cards.Project(d).display
//     main.appendChild(card);
//   }

//   // //! anims
//   CategoriesDatasAnims.play

//   // // Controllers
//   mainProjectsInterfaceControllers(datas)
//   new ButtonsControllers(datas).play
// }

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
      if (typeof this.#datas != "object") {
        break;
      }
      if (this.#datas.indexOf(d) > this.#index + 3 || this.#datas.indexOf(d) < this.#index) {
        continue;
      }
      // let card = cardProject(d)
      let card = new Cards.Project(d).display
      main.appendChild(card);
    }
  }

  #animsAndControllers() {
    CategoriesDatasAnims.play

    new MainProjectsInterfaceControllers(this.#datas).play
    // mainProjectsInterfaceControllers(this.#datas)//!remove
    new ButtonsControllers(this.#datas).play
  }
}