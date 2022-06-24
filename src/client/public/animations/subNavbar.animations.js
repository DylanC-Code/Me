"use-strict";

import Tools from "../../global/utils/Tools.js";

//^ Play Sub navbar Animations of about view
export function subNavbarAnims() {
  let target = document.getElementById("container")
  let keyframes = controlKeyframes()
  let options = {
    duration: 1500,
    fill: "forwards",
    easing: "ease-in",
  }

  let kE1 = new KeyframeEffect(target, keyframes, options)
  new Animation(kE1, document.timeline).play()
  controlKeyframes(kE1)
}

function controlKeyframes(target) {
  function getKeyframes() {
    let kE1 = [
      { width: 0, height: 0, overflow: "hidden" },
      { width: "25%", height: 0, overflow: "hidden" },
      { width: "25%", height: "30px", overflow: "visible" },
    ];
    let kE2 = [
      { width: 0, height: 0, overflow: "hidden" },
      { width: "50%", height: 0, overflow: "hidden" },
      { width: "50%", height: "30px", overflow: "visible" },
    ];

    let w = Tools.getWidth()
    if (w > 1400) return kE1
    else return kE2
  }

  window.addEventListener('resize', () => {
    let keyframe = getKeyframes()
    if (target) target.setKeyframes(keyframe)
  })

  return getKeyframes()
}