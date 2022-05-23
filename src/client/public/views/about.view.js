"use-strict";

import { subNavbarAnims } from "../animations/subNavbar.animations.js";

import { aboutControllers } from "../controllers/about.controllers.js";
import { Container } from "../components/Containers.js";
import { SubNavbar } from "../components/SubNavbar.js";
import { bioView } from "./bio.view.js";

export function aboutView() {
  let main = document.getElementById("main");
  main.className = "main_about";

  let container = Container.Base();
  container.classList.add("sub_navbar");
  container.innerHTML = SubNavbar();

  Container.SubContainer();
  bioView();

  subNavbarAnims();
  aboutControllers();
}
