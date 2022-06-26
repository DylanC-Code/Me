"use-strict";

import Buttons from "./Buttons.js";
import Tools from "../../global/utils/Tools.js";
import HeaderInterfaceAnims from "../animations/HeaderInterface.animations.js";
import HeaderDatasInterfaceControllers from "../controllers/HeaderDatasInterface.controllers.js";
import { ContentsAdmin } from "../../public/contents/admin.contents.js";


export default class HeaderDatasInterface {
  #table
  #datas

  /**
   * Components For Display Header Of DatasInterfaceView
   * @param  { String } table The name of the about table
   * @param  { Array } datas The datas to display
   */

  constructor(table, datas) {
    this.#table = table;
    this.#datas = datas;
  }

  get display() {
    this.#create()
    this.#animsAndControllers()
  }

  //* Create The Elements Of The Header
  #create() {
    // Remove childs of the the header
    let header = document.querySelector("#subContainer header");
    Tools.removeChilds(header);

    // Create and add content to the paragraphe
    let p = document.createElement("p");
    if (this.#table == "categories")
      p.textContent = ContentsAdmin.interfaceData.categories.p;
    else if (this.#table == "languages")
      p.textContent = ContentsAdmin.interfaceData.categories.p;
    else if (this.#table == "concepts")
      p.textContent = ContentsAdmin.interfaceData.categories.p;

    // Append all of us to header
    header.append(p, Buttons.add, Buttons.switch);
  }

  //* Play Anims Of The Header And Active Controllers
  #animsAndControllers() {
    HeaderInterfaceAnims.play
    new HeaderDatasInterfaceControllers(this.#table, this.#datas).play
  }
}


export class HeaderInterface {
  #table
  #datas

  /**
   * Components For Display Header Of DatasInterfaceView
   * @param  { String } table The name of the about table
   * @param  { Array } datas The datas to display
   */

  constructor(table, datas) {
    this.#table = table;
    this.#datas = datas;
  }

  get display() {
    this.#create()
    this.#animsAndControllers()
  }

  //* Create The Elements Of The Header
  #create() {
    // Remove childs of the the header
    let header = document.querySelector("#subContainer header");
    Tools.removeChilds(header);

    // Create and add content to the paragraphe
    let p = document.createElement("p");
    if (this.#table == "categories")
      p.textContent = ContentsAdmin.interfaceData.categories.p;
    else if (this.#table == "languages")
      p.textContent = ContentsAdmin.interfaceData.categories.p;
    else if (this.#table == "concepts")
      p.textContent = ContentsAdmin.interfaceData.categories.p;
    else
      p.textContent = "tessttt"

    // Append all of us to header
    header.append(p, Buttons.add, Buttons.switch);
  }

  //* Play Anims Of The Header And Active Controllers
  #animsAndControllers() {
    HeaderInterfaceAnims.play
    new HeaderDatasInterfaceControllers(this.#table, this.#datas).play
  }
}