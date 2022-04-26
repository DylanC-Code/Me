"use-strict";

import { TypeWriter } from "../animations/TypeWriter.js";
import { Contents } from "../contents/global.contents.js";

export function homeView() {
  let main = document.getElementById("main");
  main.className = "";
  main.innerHTML = "<p></p>";

  let p = document.querySelector("#main > p");

  new TypeWriter(p, Contents.home.p).play();
}
