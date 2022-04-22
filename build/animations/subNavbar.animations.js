"use-strict";

export function subNavbarAnims() {
  return document.getElementById("container").animate(
    [
      { width: 0, height: 0, overflow: "hidden" },
      { width: "25%", height: 0, overflow: "hidden" },
      { width: "25%", height: "30%", overflow: "visible" },
    ],
    {
      duration: 1500,
      fill: "forwards",
      easing: "ease-in",
    }
  );
}
