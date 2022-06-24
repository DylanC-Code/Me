"use-strict";

import Tools from "../../global/utils/Tools.js";
import { ContentsAdmin } from "../../public/contents/admin.contents.js";
import HeaderInterfaceAnims from "../animations/HeaderInterface.animations.js";
import { addBtn, nextPreviousBtn } from "../components/Buttons.js";
import { headerDatasInterfaceControllers } from "../controllers/headerDatasInterface.controllers.js";

//* Components For Display Header Of DatasInterfaceView
export function headerDatasInterface(table, datas) {
  let header = document.querySelector("#subContainer header");
  Tools.removeChilds(header);

  // Create paragraphe with difference
  let p = document.createElement("p");
  if (table == "categories")
    p.textContent = ContentsAdmin.interfaceData.categories.p;
  else if (table == "languages")
    p.textContent = ContentsAdmin.interfaceData.categories.p;
  else if (table == "concepts")
    p.textContent = ContentsAdmin.interfaceData.categories.p;

  let add = addBtn();
  let nextPrevious = nextPreviousBtn(datas);

  // Append all of us to header
  header.append(p, add, nextPrevious);

  HeaderInterfaceAnims.play
  headerDatasInterfaceControllers(table, datas);
}

export default class HeaderDatasInterface {
  #table
  #datas
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

    // Call buttons of the header
    let add = addBtn();
    let nextPrevious = nextPreviousBtn(this.#datas);

    // Append all of us to header
    header.append(p, add, nextPrevious);
  }

  #animsAndControllers() {
    HeaderInterfaceAnims.play
    // TODO
    headerDatasInterfaceControllers(this.#table, this.#datas)
    // TODO
  }
}