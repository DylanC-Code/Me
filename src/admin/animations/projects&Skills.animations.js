"use-strict";

export function projectsSkillsAnimations() {
  document.getElementById("projects").beginElement();
  document.getElementById("skills").beginElement();
  document
    .querySelectorAll("#socials > svg")
    .forEach((svg) => (svg.style.cursor = "pointer"));

  return function clickButtons(els) {
    let kE1 = new KeyframeEffect(
      els[0],
      [
        { stroke: "white", strokeDashoffset: 0, offset: 0 },
        { stroke: "white", strokeDashoffset: 1000, offset: 0.1 },
        { stroke: "#FF4B33", strokeDashoffset: 1000, offset: 0.12 },
        { stroke: "#FF4B33", strokeDashoffset: 0 },
      ],
      { duration: 10000, fill: "forwards" }
    );
    let kE2 = new KeyframeEffect(
      els[1],
      [
        { stroke: "#FF4B33", strokeDashoffset: 0, offset: 0 },
        { stroke: "#FF4B33", strokeDashoffset: 1000, offset: 0.1 },
        { stroke: "white", strokeDashoffset: 1000, offset: 0.12 },
        { stroke: "white", strokeDashoffset: 0 },
      ],
      { duration: 10000, fill: "forwards" }
    );

    let click = new Animation(kE1, document.timeline);
    let unclick = new Animation(kE2, document.timeline);

    return [click, unclick];
  };
}
