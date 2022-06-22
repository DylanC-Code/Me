"use-strict"

import { headerInterfaceAnims } from "../animations/headerInterface.animations.js";
import { addBtn, nextPreviousBtn } from "../components/Buttons.js";
import { removeChild } from "../../global/utils/removeChilds.js";
import { headerProjectsInterfaceControllers } from "../controllers/headerProjectsInterface.controllers.js";
import { buttonsControllers } from "../controllers/buttons.controllers.js";

//^ Components for display header of datas interface
export default function headerProjectsInterface(datas) {
  let header = document.querySelector("#subContainer header");
  removeChild(header);

  //~ Create paragraphe with difference
  let p = document.createElement("p");
  p.textContent = "loremmmm"

  let add = addBtn();
  let nextPrevious = nextPreviousBtn(datas);

  //~ Append all of us to header
  header.append(p, add, nextPrevious);

  //! anims
  headerInterfaceAnims().forEach((anim) => anim.play());
  headerProjectsInterfaceControllers(datas)
}
