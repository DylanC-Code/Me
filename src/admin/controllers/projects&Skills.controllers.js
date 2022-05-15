"use-strict";

import { projectsSkillsAnimations } from "../animations/projects&Skills.animations.js";
import { Datas_Interface_View } from "../views/Datas_Interface_View.view.js";
import { interfaceProjectView } from "../views/interfaceProject.view.js";

//^ Control events on thoses buttons, launch anims and display views
export function projectsSkillsControllers() {
  //~ Get skill and project buttons
  let buttons = document.querySelectorAll("#socials > svg");
  //~ Play the start project, skill animations at the succesfully connect
  let clickButtons = projectsSkillsAnimations();

  //~ Event on click for each buttons
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      let click =
        btn == buttons[0]
          ? buttons[0].firstElementChild
          : buttons[1].firstElementChild;
      let unclick =
        btn == buttons[0]
          ? buttons[1].firstElementChild
          : buttons[0].firstElementChild;

      //~ Create the anims for each buttons
      let anims = clickButtons([click, unclick]);
      let white =
        window.getComputedStyle(unclick.firstElementChild).stroke ==
        "rgb(255, 255, 255)";

      //~ Control and play them
      for (const a in anims) a == 1 && white ? null : anims[a].play();
    });
  });

  buttons[0].addEventListener(
    "click",
    () => new Datas_Interface_View("categories").display
  );
  buttons[1].addEventListener("click", interfaceProjectView);
}
