"use-strict"

export default function projectsAnims() {
  let box = document.getElementById("subContainer")

  let kE1 = new KeyframeEffect(box,
    {
      height: [0, "100%"],
      // boxShadow: ["0 0 20px 0px #DA06AE, inset 0 0 20px 0px #DA06AE"]
    },
    { duration: 750, easing: "ease-in-out", fill: "forwards" }
  )

  return new Animation(kE1, document.timeline)
}