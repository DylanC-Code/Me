"use-strict";

import { subNavBtnsAnimations } from "../animations/subNavBtns.animations.js.js";

import { skillsView } from "../views/skills.views.js.js";
import { bioView } from "../views/bio.view.js.js";

export function aboutControllers() {
  let buttons = document.querySelectorAll("#container > button");

  buttons.forEach((btn) =>
    btn.addEventListener("click", (e) => subNavBtnsAnimations(btn, e))
  );
  
  buttons[0].addEventListener("click", skillsView);
  buttons[1].addEventListener("click", bioView);
}
