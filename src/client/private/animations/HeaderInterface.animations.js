"use-strict";

export default class HeaderInterfaceAnims {
  static #keyframes1 = { opacity: [0, 1] };
  static #keyframes2 = {
    width: [0, 0, "170px", "170px", "170px"],
    height: [0, "30px", "30px", "30px", "30px"],
    border: ["none", "1px solid #FF4B33", "1px solid #FF4B33", "1px solid #FF4B33", "1px solid #FF4B33"],
    color: ["transparent", "transparent", "transparent", "transparent", "#FF4B33"]
  };
  static #keyframes3 = {
    width: [0, 0, "170px", "170px", "170px"],
    height: [0, "30px", "30px", "30px", "30px", "30px"],
    border: ["none", "1px solid #38C7C7", "1px solid #38C7C7", "1px solid #38C7C7", "1px solid #38C7C7"],
    color: ["transparent", "transparent", "transparent", "transparent", "#38C7C7"]
  };
  static #options = { duration: 1000, delay: 2000, fill: "forwards" }

  //* Play The Anims For The Header Interface
  static get play() {
    let p = document.querySelector("#subContainer >header >p")
    let btns = document.querySelectorAll("#subContainer >header >article");
    if (!p) p = document.querySelector("#container >header >p")
    if (!btns[0]) btns = document.querySelectorAll("#container >header >article")
    let kE1 = new KeyframeEffect(p, this.#keyframes1, this.#options)
    let kE2 = new KeyframeEffect(btns[0], this.#keyframes2, this.#options)
    let kE3 = new KeyframeEffect(btns[1], this.#keyframes3, this.#options)

    new Animation(kE1, document.timeline).play()
    new Animation(kE2, document.timeline).play()
    new Animation(kE3, document.timeline).play()
  }
}