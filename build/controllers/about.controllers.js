"use-strict";

import { subNavBtnsAnimations } from "../animations/subNavBtns.animations.js";
import { skillsView } from "../views/skills.views.js";

export function aboutControllers() {
  let buttons = document.querySelectorAll("#container > button");

  buttons.forEach((btn) =>
    btn.addEventListener("click", (e) => subNavBtnsAnimations(btn, e))
  );

  skillsView;
}
