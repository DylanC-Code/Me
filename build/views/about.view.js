"use-strict";

import { subNavbarAnims } from "../animations/subNavbar.animations.js";
import { Container } from "../components/Containers.js";
import { SubNavbar } from "../components/SubNavbar.js";
import { aboutControllers } from "../controllers/about.controllers.js";

export function aboutView() {
  let main = document.getElementById("main");
  main.className = "main_about";

  let container = Container.Base();
  container.classList.add("sub_navbar");
  container.innerHTML = SubNavbar();

  let subContainer = Container.SubContainer();
  subContainer.style.margin = "3rem";
  subContainer.innerHTML = `
    <h1></h1>
    <p></p>
  `;

  subNavbarAnims();
  aboutControllers();
}
