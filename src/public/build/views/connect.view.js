"use-strict";

import { connectAnims } from "../animations/inputsConnect.animations.js";
import { Connect } from "../components/Connect.js";
import { Container } from "../components/Containers.js";

export function connectView() {
  let main = document.getElementById("main");
  main.className = "main_connect";

  let container = Container.Base();
  container.innerHTML = `<svg width="100%" height="100%">
  ${Connect()}
  </svg>`;

  let anims = connectAnims();

  anims.forEach((anim) => anim.play());
}
