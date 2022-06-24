"use-strict";

import Connect from "../components/Connect.js";
import Container from "../../global/classes/Container.js";
import connectControllers from "../controllers/connect.controllers.js";
import { connectAnims } from "../animations/connect.animations.js";

//* Create Connect View And Play Anims
export default function connectView() {
  let main = document.getElementById("main");
  main.className = "main_connect";

  // Create components
  let container = new Container("container").element
  container.innerHTML = Connect()

  // Play animations
  connectAnims();
  connectControllers();
}
