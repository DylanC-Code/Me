"use-strict";

import { closeConnectAnims } from "../animations/connect.animations.js";
import { Request } from "../api/Request.js";

export async function connectControllers() {
  window.addEventListener("keydown", async (e) => {
    let username = document.querySelector(
      "input[type=password]:nth-of-type(1)"
    );
    let password = document.querySelector(
      "input[type=password]:nth-of-type(2)"
    );

    if (e.keyCode == 13) {
      let body = { username: username.value, password: password.value };
      let { result } = await new Request("POST", "/users/login", body).play;

      if (result) {
        sessionStorage.setItem("admin", "true");
        closeConnectAnims();
      }
    }
  });
}
