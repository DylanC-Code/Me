"use-strict";

import Connect from "../components/Connect.js";
import { Container } from "../../public/components/Containers.js";
import { connectAnims } from "../animations/connect.animations.js";
import connectControllers from "../controllers/connect.controllers.js";

//* Create Connect View And Play Anims
export default function connectView() {
  let main = document.getElementById("main");
  main.className = "main_connect";

  // Create components
  let container = Container.Base();
  container.innerHTML = Connect()

  // Play animations
  connectAnims();
  connectControllers();
}
