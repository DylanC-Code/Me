"use-strict";

export function navInterfaceControllers() {
  let buttons = document.querySelectorAll("#container li");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.style.border = "1px solid #38C7C7";
      btn.style.color = "#38C7C7";

      buttons.forEach((b) => {
        b.style.border = "1px dashed white";
        b.style.color = "white";
      });
    });
  });

  buttons[0].addEventListener("click", datasCategoriesView);
}
