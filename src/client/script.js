"use-strict";

import { accessAdmin } from "./private/controllers/access.controllers.js";
import { TypeWriter } from "./public/build/animations/TypeWriter.js";
import { Contents } from "./public/build/contents/global.contents.js";
import { navbarControllers } from "./public/build/controllers/navbar.controllers.js";

(() => {
  //~ Waiting DOM loaded to launch TypeWriter animation
  window.addEventListener("DOMContentLoaded", () => {
    let p = document.querySelector("#main > p");
    new TypeWriter(p, Contents.home.p).play();
  });

  accessAdmin();
  navbarControllers();
})();
