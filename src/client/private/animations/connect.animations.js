"use-strict";

export function connectAnims() {
  let password = document.querySelector("input[type=password]:nth-of-type(1)");
  let username = document.querySelector("input[type=password]:nth-of-type(2)");

  //~ Create the keyframes effects
  let keyframes = {
    width: ["0px", "300px", "300px"],
    height: ["0px", "0px", "40px"]
  }

  //~ Create the options of the animations
  let options = { duration: 1500, easing: "ease-out", fill: "forwards" };

  //^ New instance of KeyframeEffect
  let kE1 = new KeyframeEffect(password, keyframes, options);
  let kE2 = new KeyframeEffect(username, keyframes, options);

  //^ New instances of Animation
  new Animation(kE1, document.timeline).play();
  new Animation(kE2, document.timeline).play();
}

export function closeConnectAnims() {
  let password = document.querySelector("input[type=password]:nth-of-type(1)");
  let username = document.querySelector("input[type=password]:nth-of-type(2)");

  //~ Create the keyframes effects
  let keyframes = {
    width: ["300px", "300px", "0px", "0px"],
    height: ["40px", "0px", "0px", "0px"],
    border: "none",
    boxShadow: "none"
  }

  //~ Create the options of the animations
  let options = { duration: 1500, easing: "ease-out", fill: "forwards", };

  //^ New instance of KeyframeEffect
  let kE1 = new KeyframeEffect(password, keyframes, options);
  let kE2 = new KeyframeEffect(username, keyframes, options);

  //^ New instances of Animation
  new Animation(kE1, document.timeline).play();
  new Animation(kE2, document.timeline).play();

  document.getElementById("connect_end").beginElement();
}
