"use-strict";

import { navbarAnim } from "../animations/navbar.animations.js";

export function navbarControllers() {
  const { dash_anim, nav_anim, circle_anim } = navbarAnim();
  
  document.querySelector("nav > figure > svg").addEventListener("click", () => {
    let valid = window
      .getComputedStyle(document.querySelector("nav > figure"))
      .width.split("p")[0];

    if (valid < "150") {
      dash_anim.play();
      nav_anim.play();
      circle_anim.play();
    } else {
      dash_anim.reverse();
      nav_anim.reverse();
      circle_anim.reverse();
    }
  });
}
