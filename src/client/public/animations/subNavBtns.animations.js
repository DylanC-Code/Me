"use-strict";

export function subNavBtnsAnimations(button, e) {
  let bro =
    e.target.nextElementSibling == null
      ? e.target.previousElementSibling
      : e.target.nextElementSibling;

  bro.animate(
    [{ border: "1px solid" }, { border: "1px dashed", color: "white" }],
    {
      duration: 1000,
      fill: "forwards",
    }
  );

  button.animate(
    [
      { border: "1px dashed" },
      { border: "1px solid #38C7C7", color: "#38C7C7" },
    ],
    {
      duration: 1000,
      fill: "forwards",
    }
  );
}
