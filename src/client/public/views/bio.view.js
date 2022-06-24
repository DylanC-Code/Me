"use-strict";

import HTMLElement from "../../global/classes/HTMLElement.js";
import { bioControllers } from "../controllers/bio.controllers.js";
import { bioSkillsContainer } from "../containers/bioSkills.container.js";

//^ Create Bio View
export function bioView() {
  //~ Call its container,remove childs and apply style
  let subContainer = bioSkillsContainer("bio");

  //~ Create HTMLElements and append them
  let h1 = new HTMLElement("h1").element;
  let p = new HTMLElement("p").element;
  subContainer.append(h1, p);

  //~ Call its controllers
  bioControllers();
}
