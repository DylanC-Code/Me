"use-strict"

import Tools from "../../global/utils/Tools.js";
import HeaderInterfaceAnims from "../animations/HeaderInterface.animations.js";
import { addBtn, nextPreviousBtn } from "../components/Buttons.js";
import { headerProjectsInterfaceControllers } from "../controllers/headerProjectsInterface.controllers.js";

//^ Components for display header of datas interface
export default function headerProjectsInterface(datas) {
  let header = document.querySelector("#subContainer header");
  Tools.removeChilds(header);

  //~ Create paragraphe with difference
  let p = document.createElement("p");
  p.textContent = "loremmmm"

  let add = addBtn();
  let nextPrevious = nextPreviousBtn(datas);

  //~ Append all of us to header
  header.append(p, add, nextPrevious);

  //! anims
  HeaderInterfaceAnims.play
  headerProjectsInterfaceControllers(datas)
}
