"use-strict";

import IconsAnims from "../animations/Icons.animations.js";
import ProjectsInterfaceView from "../views/ProjectsInterface.view.js";
import DatasInterfaceView from "../views/DatasInterface.view.js";

//* Control Events On Thoses Buttons, Launch Anims And Display Views
export default function iconsControllers() {
  let buttons = document.querySelectorAll("#socials > svg");

  // Play icons animations
  IconsAnims.start;

  // Event on click for each buttons
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Create the anims for each buttons
      let clickUnclick = btnsClickAndUnclick(buttons, btn)
      let anims = IconsAnims.clickIconsAnims(clickUnclick);

      //TODO A demistifier
      for (const a in anims) a == 1 && btnIsWhite(clickUnclick[1]) ? null : anims[a].play()
    });
  });

  buttons[0].addEventListener("click", () => new DatasInterfaceView("categories", null, "slow").display);
  buttons[1].addEventListener("click", () => new ProjectsInterfaceView(null, "slow").display);
}

/**
 * Determine SVG click, unclick and return them
 * Return Array of SVGElements
 * @param  { Array } buttons Array contents all buttons
 * @param  { HTMLElement } btn The element click at check
 */

function btnsClickAndUnclick(buttons, btn) {
  let click, unclick

  if (btn == buttons[0]) click = buttons[0].firstElementChild
  else click = buttons[1].firstElementChild;

  if (btn !== buttons[0]) unclick = buttons[0].firstElementChild
  else unclick = buttons[1].firstElementChild;

  return [click, unclick]
}

/**
 * Control if the button click is white
 * Return Boolean
 * @param  { HTMLElement } btn The button to control
 */

function btnIsWhite(btn) {
  let btnColor = window.getComputedStyle(btn.firstElementChild).stroke
  let white = "rgb(255, 255, 255)"
  return btnColor == white
}