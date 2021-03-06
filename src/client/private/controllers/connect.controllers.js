"use-strict";

import ConnectAnims from "../animations/Connect.animations.js";
import Request from "../../public/api/Request.js";
import iconsControllers from "./icons.controllers.js";

//* Controllers For The Connect View
export default async function connectControllers() {
  // Control if the request can be send
  async function requestController(key) {
    // Control key and session
    if (key.keyCode !== 13) return;
    if (sessionStorage.getItem("admin")) return

    // Send request
    let result = await connectRequest()
    if (!result) return;

    // Display view and anims
    connectSucces()
  }

  // The request to the db
  function connectRequest() {
    let username = document.querySelector("input[type=password]:nth-of-type(1)");
    let password = document.querySelector("input[type=password]:nth-of-type(2)");

    // Send the request
    let body = { username: username.value, password: password.value };
    return new Request("POST", "/users/login", body).play;
  }

  // Event when the request is a succes
  function connectSucces() {
    // Create sessionStorage
    sessionStorage.setItem("admin", "true");

    // Launch the anims
    ConnectAnims.end
    iconsControllers();
  }

  // EventListener on keydown
  window.addEventListener("keydown", (e) => requestController(e));
}
