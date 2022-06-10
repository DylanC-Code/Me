"use-strict";

import { HTMLElement } from "../../global/classes/HTMLElement.js";
import { removeChild } from "../../global/utils/removeChilds.js";
import { sessionCheck } from "../../private/tools/session.js";
import { TypeWriter } from "../animations/TypeWriter.js";
import { ContentsAdmin } from "../contents/admin.contents.js";
import { Contents } from "../contents/global.contents.js";

export function homeView() {
  let p = new HTMLElement("p").element;
  let main = document.getElementById("main");
  removeChild(main)
  main.removeAttribute("class");
  main.appendChild(p);
  let session = sessionCheck();

  session
    ? new TypeWriter(p, ContentsAdmin.home.p).play()
    : new TypeWriter(p, Contents.home.p).play();
}
