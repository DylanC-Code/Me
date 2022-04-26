"use-strict";

import { TypeWriter } from "../animations/TypeWriter.js";
import { Contents } from "../contents/global.contents.js";

export function contactControllers() {
  let h1 = document.querySelector("#container > h1");
  let p = document.querySelector("#container > p");

  new TypeWriter(h1, Contents.contact.h1).play();
  new TypeWriter(p, Contents.contact.p).play();
}
