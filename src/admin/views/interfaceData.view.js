"use-strict";

import { Container } from "../../public/build/components/Containers.js";
import { interfaceDataAnims } from "../animations/subNavInterface.animations.js";

export function interfaceDataView() {
  let main = document.getElementById("main");
  main.className = "main_interface";

  let container = Container.Base();
  container.innerHTML = `<ul><li>Categories</li><li>Languages</li><li>Concepts</li></ul>`;

  let subContainer = Container.SubContainer();

  interfaceDataAnims().forEach((anim) => anim.play());
}
