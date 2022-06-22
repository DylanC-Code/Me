"use-strict"

export default function projectsAnims() {
  let box = document.getElementById("subContainer")

  let kE1 = new KeyframeEffect(box,
    {
      width: [0, "100%", "100%"],
      height: [0, 0, "100%"]
    },
    { duration: 1500, easing: "ease-in-out", fill: "forwards" }
  )

  return new Animation(kE1, document.timeline)
}