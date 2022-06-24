"use-strict";

import Tools from "../../global/utils/Tools.js";
import Connect from "../components/Connect.js";
import Container from "../../global/classes/Container.js";
import connectControllers from "../controllers/connect.controllers.js";
import ConnectAnims from "../animations/Connect.animations.js";

//* Create Connect View And Play Anims
export default function connectView() {
  Tools.getClearMain("main_connect")

  // Create components
  let container = new Container("container").element
  container.innerHTML = Connect()

  // Play animations
  ConnectAnims.start
  connectControllers();
}
