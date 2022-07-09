"use-strict";

import Tools from "../../global/utils/Tools.js";

//* Animations for the navbar
export default function navbarAnims() {
  let container = document.querySelector("nav > div");
  let figure = document.querySelector("nav > figure");
  let circle = document.querySelector("nav > figure > svg");

  // Instance for display navbar
  let kE1 = new KeyframeEffect(container, [{ left: responsiveKE1() }], {
    duration: 1000,
    fill: "forwards",
  });

  // Instance for display top dash 
  let kE2 = new KeyframeEffect(figure, [{ width: responsiveKE2(), marginRight: 0 }], {
    duration: 120,
    delay: 880,
    fill: "forwards",
  });


  // Instance for rotate circle
  let kE3 = new KeyframeEffect(circle, [{ transform: "rotate(3turn)" }], {
    duration: 1000,
    easing: "ease-in-out",
  });

  // Play the responsive control for the anims
  responsiveKE1(kE1)
  responsiveKE2(kE2)

  // Create new animations
  let nav_anim = new Animation(kE1, document.timeline);
  let dash_anim = new Animation(kE2, document.timeline);
  let circle_anim = new Animation(kE3, document.timeline);

  // Return them in array
  return [nav_anim, dash_anim, circle_anim];
}

// Responsive control
function responsiveKE1(keyframe) {
  function leftValue() {
    let w = Tools.getWidth()
    if (w <= 1406) return "12%"
    return "20%"
  }

  window.addEventListener('resize', () => {
    if (typeof keyframe == "object") {
      keyframe.setKeyframes([{ left: leftValue() }])
    }
  })

  return leftValue()
}

// Responsive control
function responsiveKE2(keyframe) {
  function widthValue() {
    let w = Tools.getWidth()
    let ratio

    if (w > 1406 || w < 1080) ratio = w * 10.416666666666666 / 100
    else ratio = w * 7 / 100
    return `${ratio}px`
  }

  window.addEventListener('resize', () => {
    if (typeof keyframe == "object")
      keyframe.setKeyframes([{ width: responsiveKE2(), marginRight: 0 }])
  })

  return widthValue()
}