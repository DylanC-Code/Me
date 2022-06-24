"use-strict";

import Tools from "../../global/utils/Tools.js";
import { ContentsAdmin } from "../../public/contents/admin.contents.js";
import { headerInterfaceAnims } from "../animations/headerInterface.animations.js";
import { addBtn, nextPreviousBtn } from "../components/Buttons.js";
import { headerDatasInterfaceControllers } from "../controllers/headerDatasInterface.controllers.js";

//^ Components for display header of datas interface
export function headerDatasInterface(table, datas) {
  let header = document.querySelector("#subContainer header");
  Tools.removeChilds(header);

  //~ Create paragraphe with difference
  let p = document.createElement("p");
  if (table == "categories")
    p.textContent = ContentsAdmin.interfaceData.categories.p;
  else if (table == "languages")
    p.textContent = ContentsAdmin.interfaceData.categories.p;
  else if (table == "concepts")
    p.textContent = ContentsAdmin.interfaceData.categories.p;

  let add = addBtn();
  let nextPrevious = nextPreviousBtn(datas);

  //~ Append all of us to header
  header.append(p, add, nextPrevious);

  //! anims
  headerInterfaceAnims().forEach((anim) => anim.play());
  headerDatasInterfaceControllers(table, datas);
}
