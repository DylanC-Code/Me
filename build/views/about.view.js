"use-strict";

import { subNavbarAnims } from "../animations/subNavbar.animations.js";
import { About } from "../components/About.js";
import { Container } from "../components/Containers.js";
import { SubNavbar } from "../components/SubNavbar.js";

export function aboutView() {
  let main = document.getElementById("main");
  main.classList.add("main_about");

  let container = Container.Base();
  container.classList.add("sub_navbar");
  container.innerHTML = SubNavbar();

  let subContainer = Container.SubContainer();
  subContainer.style.margin = "3rem";
  subContainer.innerHTML = About();
  subNavbarAnims();
}
