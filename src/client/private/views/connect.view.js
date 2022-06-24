"use-strict";

import { connectAnims } from "../animations/connect.animations.js";
import { Container } from "../../public/components/Containers.js";
import { connectControllers } from "../controllers/connect.controllers.js";
import Connect from "../../public/components/svg/Connect.js";

export default function connectView() {
  let main = document.getElementById("main");
  main.className = "main_connect";

  let container = Container.Base();
  container.innerHTML = Connect()

  //~ Play animations
  connectAnims();
  connectControllers();
}
