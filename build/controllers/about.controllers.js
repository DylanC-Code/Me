"use-strict";

import { subNavBtnsAnimations } from "../animations/subNavBtns.animations.js";
import { TypeWriter } from "../animations/TypeWriter.js";
import { Contents } from "../contents/global.contents.js";
import { skillsView } from "../views/skills.views.js";

export function aboutControllers() {
  let buttons = document.querySelectorAll("#container > button");
  let h1 = document.querySelector("#subContainer > h1");
  let p = document.querySelector("#subContainer > p");

  buttons.forEach((btn) =>
    btn.addEventListener("click", (e) => subNavBtnsAnimations(btn, e))
  );

  new TypeWriter(h1, Contents.about.h1).play();
  new TypeWriter(p, Contents.about.p, 50).delay(2000);

  buttons[0].addEventListener("click", skillsView);
}
