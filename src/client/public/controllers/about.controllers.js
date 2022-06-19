"use-strict";

import { subNavBtnsAnimations } from "../animations/subNavBtns.animations.js";
import skillsView from "../views/skills.views.js";
import { bioView } from "../views/bio.view.js";

//^ Controllers For About View (sub navbar)
export function aboutControllers() {
  let buttons = document.querySelectorAll("#container > button");

  //~ Apply click listener for play anims
  buttons.forEach((btn) =>
    btn.addEventListener("click", (e) => subNavBtnsAnimations(btn, e))
  );

  //~ Apply click listener for display views
  buttons[0].addEventListener("click", skillsView);
  buttons[1].addEventListener("click", bioView);
}
