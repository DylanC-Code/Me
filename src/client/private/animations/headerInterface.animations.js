"use-strict";

/** The animations for header data interface view
 * Return the animations
 */
export function headerInterfaceAnims() {
  //~ Select paragraphe & buttons
  let p = document.querySelector("#subContainer >header >p");
  let btns = document.querySelectorAll("#subContainer >header >article");

  //~ Params keyframes for the paragraphe
  let kE1 = new KeyframeEffect(
    p,
    { opacity: [0, 1] },
    {
      duration: 1000,
      delay: 2000,
      fill: "forwards",
    }
  );

  //~ Params keyframes for the first button
  let kE2 = new KeyframeEffect(
    btns[0],
    {
      width: [0, 0, "170px", "170px", "170px"],
      height: [0, "30px", "30px", "30px", "30px"],
      border: [
        "none",
        "1px solid #FF4B33",
        "1px solid #FF4B33",
        "1px solid #FF4B33",
        "1px solid #FF4B33",
      ],
      color: [
        "transparent",
        "transparent",
        "transparent",
        "transparent",
        "#FF4B33",
      ],
    },
    {
      duration: 1000,
      delay: 2000,
      fill: "forwards",
    }
  );

  //~ Params keyframes for the second button
  let kE3 = new KeyframeEffect(
    btns[1],
    {
      width: [0, 0, "170px", "170px", "170px"],
      height: [0, "30px", "30px", "30px", "30px", "30px"],
      border: [
        "none",
        "1px solid #38C7C7",
        "1px solid #38C7C7",
        "1px solid #38C7C7",
        "1px solid #38C7C7",
      ],
      color: [
        "transparent",
        "transparent",
        "transparent",
        "transparent",
        "#38C7C7",
      ],
    },
    {
      duration: 1000,
      delay: 2000,
      fill: "forwards",
    }
  );

  //~ Create the animation instance for each element
  let p_anim = new Animation(kE1, document.timeline);
  let btn1_anim = new Animation(kE2, document.timeline);
  let btn2_anim = new Animation(kE3, document.timeline);

  //~ Return the animations
  return [p_anim, btn1_anim, btn2_anim];
}
