"use-strict";

import Tools from "../../global/utils/Tools.js";
import HTMLElement from "../../global/classes/HTMLElement.js";
import TypeWriter from "../animations/TypeWriter.js";
import { ContentsAdmin } from "../contents/admin.contents.js";
import { Contents } from "../contents/global.contents.js";

export default function homeView() {
  let p = new HTMLElement("p").element;
  let main = document.getElementById("main");
  Tools.removeChilds(main)
  main.removeAttribute("class");
  main.appendChild(p);

  let session = Tools.checkSession();

  session
    ? new TypeWriter(p, ContentsAdmin.home.p, 35).play()
    : new TypeWriter(p, Contents.home.p, 35).play();
}
