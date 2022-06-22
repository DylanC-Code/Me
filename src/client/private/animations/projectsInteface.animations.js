"use-strict"

export default function projectsInterfaceAnims() {
  let container = document.getElementById("subContainer");
  //~ Set keyframes for the subContainer
  let kE = new KeyframeEffect(
    container,
    {
      width: [0, "60%", "80%", "80%"],
      height: [0, 0, "50%", "80%"],
      paddingTop: [0, "3rem"],
      paddingLeft: [0, "3rem"],
      paddingTop: [0, "3rem"],
    },
    { duration: 1200, fill: "forwards", easing: "ease-in-out" }
  );
  return new Animation(kE, document.timeline);
}