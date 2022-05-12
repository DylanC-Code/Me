"use-strict";

import { connectAnims } from "../animations/connect.animations.js";
import { Connect } from "../../public/build/components/Connect.js";
import { Container } from "../../public/build/components/Containers.js";
import { connectControllers } from "../controllers/connect.controllers.js";

export function connectView() {
  let main = document.getElementById("main");
  main.className = "main_connect";

  //~ Create the connect page with a complete svg
  let container = Container.Base();
  container.innerHTML = `<svg width="100%" height="100%">
  ${Connect()}
  </svg>`;

  //~ Play animations
  connectAnims();
  connectControllers();
}