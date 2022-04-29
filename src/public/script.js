"use-strict";

import { TypeWriter } from "./build/animations/TypeWriter.js";
import { Contents } from "./build/contents/global.contents.js";
import { navbarControllers } from "./build/controllers/navbar.controllers.js";

function homeControllers() {
  //~ Waiting DOM loaded to launch TypeWriter animation
  window.addEventListener("DOMContentLoaded", () => {
    let p = document.querySelector("#main > p");
    new TypeWriter(p, Contents.home.p).play();
  });

  navbarControllers();
}

homeControllers();
