"use-strict"

import HTMLElement from "../../global/classes/HTMLElement.js";
import HeaderInterfaceAnims from "../animations/HeaderInterface.animations.js";
import Buttons from "./Buttons.js";
import HeaderProjectsInterfaceControllers from "../controllers/HeaderProjectsInterface.controllers.js";

export default class HeaderProjectsInterface {
  #datas
  constructor(datas) {
    this.#datas = datas
  }

  get display() {
    this.#create()
    this.#animsAndControllers()
  }

  // * Create Header Of The ProjectsInterface
  #create() {
    let header = document.querySelector("#container header");
    let p = new HTMLElement("p").text("loremm")

    // Append all of us to header
    header.append(p, Buttons.add, Buttons.switch);
  }

  //* Play Anims And Controllers Of The HeaderProjectsInterface
  #animsAndControllers() {
    HeaderInterfaceAnims.play
    new HeaderProjectsInterfaceControllers(this.#datas).play
  }
}