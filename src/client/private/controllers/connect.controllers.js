"use-strict";

import ConnectAnims from "../animations/connect.animations.js";
import Request from "../../public/api/Request.js";
import projectsSkillsControllers from "./projects&Skills.controllers.js";

//* Controllers For The Connect View
export default async function connectControllers() {
  // EventListener on keydown
  window.addEventListener("keydown", async (e) => {
    let username = document.querySelector(
      "input[type=password]:nth-of-type(1)"
    );
    let password = document.querySelector(
      "input[type=password]:nth-of-type(2)"
    );

    if (e.keyCode !== 13) return;
    // Send the request
    let body = { username: username.value, password: password.value };
    let result = await new Request("POST", "/users/login", body).play;


    // Create sessionStorage
    if (!result) return;
    sessionStorage.setItem("admin", "true");

    // Launch the anims
    ConnectAnims.end
    projectsSkillsControllers();
  });
}
