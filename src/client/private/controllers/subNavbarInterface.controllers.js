"use-strict"

import DatasInterfaceView from "../views/DatasInterface.view.js";

//* Controllers For SubNavbar Interface
export default function subNavbarInterfaceControllers() {
  // Change datas display for each buttons
  let buttons = document.querySelectorAll("#container li");
  buttons[0].addEventListener("click", () => new DatasInterfaceView("categories").create());
  buttons[1].addEventListener("click", () => new DatasInterfaceView("languages").create());
  buttons[2].addEventListener("click", () => new DatasInterfaceView("concepts").create());


  // Remove colors and add to the category clicked
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => {
        b.style.border = "1px dashed white";
        b.style.color = "white";
      });

      btn.style.border = "1px solid #38C7C7";
      btn.style.color = "#38C7C7";
    });
  });
}