"use-strict";

import { subNavbarAnims } from "../animations/subNavbar.animations.js";

import { aboutControllers } from "../controllers/about.controllers.js";
import { bioView } from "./bio.view.js";
import { aboutContainer } from "../containers/about.container.js";
import HTMLElement from "../../global/classes/HTMLElement.js";

//^ About view
export function aboutView() {
  //~ Call containers view
  let containers = aboutContainer();

  //~ Create HTMLElements and append them to its container
  let btn1 = new HTMLElement("button").text("Skills");
  let btn2 = new HTMLElement("button").text("Bio");
  containers[0].append(btn1, btn2);

  //~ Call sub view about
  bioView();

  // ##
  subNavbarAnims();
  aboutControllers();
}
