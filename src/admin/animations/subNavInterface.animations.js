"use-strict";

export function interfaceDataAnims() {
  let container = document.getElementById("container");
  let subContainer = document.getElementById("subContainer");
  let nav = document.querySelector("#container > ul");

  let kE1 = new KeyframeEffect(
    container,
    [
      {
        width: "80%",
      },
    ],
    { duration: 1200, fill: "forwards", easing: "ease-out" }
  );
  let kE2 = new KeyframeEffect(
    subContainer,
    [
      { height: 0, borderBottom: "1px dashed white" },
      { height: "80%", borderBottom: "1px dashed white" },
    ],
    { delay: 1200, duration: 1200, fill: "forwards" }
  );
  let kE3 = new KeyframeEffect(
    nav,
    [
      {
        height: 0,
      },
      { height: "30px" },
    ],
    { delay: 1200, duration: 1200, fill: "forwards" }
  );

  container = new Animation(kE1, document.timeline);
  subContainer = new Animation(kE2, document.timeline);
  nav = new Animation(kE3, document.timeline);

  return [container, subContainer, nav];
}
