"use-strict";

import { navbarAnims } from "../animations/navbar.animations.js";
import { projectsView } from "../views/projects.view.js";
import { contactView } from "../views/contact.view.js";
import { aboutView } from "../views/about.view.js";
import { homeView } from "../views/home.view.js";

//^ Controllers For The Navbar Element
//^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

export function navbarControllers() {
  let buttons = document.querySelectorAll("nav > div > button");
  let anim = navbarAnims();
  let valid = false;

  //~ Events on circle element (svg)
  document.querySelector("nav > figure > svg").addEventListener("click", () => {
    //^ Verif if the anims as already play and play or reverse them
    if (!valid) {
      for (let i in anim) anim[i].play();
      valid = true;
    } else for (let i in anim) anim[i].reverse();
  });

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      buttons.forEach((btn) => (btn.style.borderBottom = "none"));

      e.target.style.borderBottom = "2px solid #38C7C7";
    });
  });

  //~ Display views on nav buttons click
  buttons[0].addEventListener("click", homeView);
  buttons[1].addEventListener("click", aboutView);
  buttons[2].addEventListener("click", contactView);
  buttons[3].addEventListener("click", projectsView);
}
