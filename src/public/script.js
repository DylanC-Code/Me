"use-strict";

import { accessAdmin } from "../admin/controllers/access.controllers.js";
import { TypeWriter } from "./build/animations/TypeWriter.js";
import { Contents } from "./build/contents/global.contents.js";
import { navbarControllers } from "./build/controllers/navbar.controllers.js";

(() => {
  //~ Waiting DOM loaded to launch TypeWriter animation
  window.addEventListener("DOMContentLoaded", () => {
    let p = document.querySelector("#main > p");
    new TypeWriter(p, Contents.home.p).play();
  });

  accessAdmin();
  navbarControllers();
})();
