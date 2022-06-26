"use-strict";

export default class DatasInterfaceAnims {
  static keyframes1 = { width: "80%" };
  static keyframes2 = {
    height: [0, "90%"],
    borderBottom: ["1px dashed white", "1px dashed white"],
    paddingTop: [0, "3rem"],
    paddingLeft: [0, "3rem"],
    paddingRight: [0, "3rem"],
  };
  static keyframes3 = { height: [0, "30px"] };
  static options1 = { duration: 1200, fill: "forwards", easing: "ease-out" }
  static options2 = { delay: 1200, duration: 1200, fill: "forwards" }

  /** Play animations the container, sucontainer and subNavbar
   */

  static get play() {
    let container = document.getElementById("container");
    let subContainer = document.getElementById("subContainer");
    let nav = document.querySelector("#container > ul");
    let kE1 = new KeyframeEffect(container, this.keyframes1, this.options1)
    let kE2 = new KeyframeEffect(subContainer, this.keyframes2, this.options2)
    let kE3 = new KeyframeEffect(nav, this.keyframes3, this.options2)

    new Animation(kE1, document.timeline).play()
    new Animation(kE2, document.timeline).play()
    new Animation(kE3, document.timeline).play()
  }
}