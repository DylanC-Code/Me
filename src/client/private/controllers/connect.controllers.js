"use-strict";

import { closeConnectAnims } from "../animations/connect.animations.js";
import { Request } from "../../public/api/Request.js";
import { homeView } from "../../public/views/home.view.js";
import { projectsSkillsControllers } from "./projects&Skills.controllers.js";

//^ Controllers for the admin connect interface
export async function connectControllers() {
  //~ EventListener on keydown
  window.addEventListener("keydown", async (e) => {
    let username = document.querySelector(
      "input[type=password]:nth-of-type(1)"
    );
    let password = document.querySelector(
      "input[type=password]:nth-of-type(2)"
    );

    if (e.keyCode !== 13) return;
    //~ Send the request
    let body = { username: username.value, password: password.value };
    // let result = await new Request("POST", "/users/login", body).play;

    //~ If the result is false return
    // if (!result) return;

    //~ Create sessionStorage
    // sessionStorage.setItem("admin", "true");
    //~ Launch the anims
    closeConnectAnims();
    projectsSkillsControllers();
    // setTimeout(() => homeView(), 3500);
  });
}
