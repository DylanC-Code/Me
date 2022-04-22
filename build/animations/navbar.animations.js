"use-strict";

//^ All Animations For The Navbar
//^ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

export function navbarAnims() {
  let container = document.querySelector("nav > div");
  let figure = document.querySelector("nav > figure");
  let circle = document.querySelector("nav > figure > svg");

  //~ Create new instance with element, set keyframes effects and their options

  //^ Instance for display navbar
  let kE1 = new KeyframeEffect(container, [{ left: "20%" }], {
    duration: 1000,
    fill: "forwards",
  });
  //^ Instance for display top dash 
  let kE2 = new KeyframeEffect(figure, [{ width: "200px", marginRight: 0 }], {
    duration: 120,
    delay: 880,
    fill: "forwards",
  });
  //^ Instance for rotate circle
  let kE3 = new KeyframeEffect(circle, [{ transform: "rotate(3turn)" }], {
    duration: 1000,
    easing: "ease-in-out",
  });

  //~ Create new animations
  let nav_anim = new Animation(kE1, document.timeline);
  let dash_anim = new Animation(kE2, document.timeline);
  let circle_anim = new Animation(kE3, document.timeline);

  //~ Return them in array
  return [nav_anim, dash_anim, circle_anim];
}
