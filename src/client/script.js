"use-strict";

import accessAdmin from "./private/controllers/access.controllers.js";
import { TypeWriter } from "./public/animations/TypeWriter.js";
import { Contents } from "./public/contents/global.contents.js";
import navbarControllers from "./public/controllers/navbar.controllers.js";

(() => {
  sessionStorage.removeItem("admin")

  //~ Waiting DOM loaded to launch TypeWriter animation
  window.addEventListener("DOMContentLoaded", () => {
    let p = document.querySelector("#main > p");
    new TypeWriter(p, Contents.home.p, 35).play();
  });

  accessAdmin();
  navbarControllers();
})();
