"use-strict"

export default class ProjectsInterfaceAnims {
  static #keyframes = {
    width: [0, "60%", "80%", "80%"],
    height: [0, 0, "50%", "80%"],
    paddingTop: [0, "3rem"],
    paddingLeft: [0, "3rem"],
    paddingRight: [0, "3rem"],
  };
  static #options = { duration: 1200, fill: "forwards", easing: "ease-in-out" }

  static get play() {
    let container = document.getElementById("container");
    let kE = new KeyframeEffect(container, this.#keyframes, this.#options)
    new Animation(kE, document.timeline).play()
  }
}