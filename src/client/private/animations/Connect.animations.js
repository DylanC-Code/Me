"use-strict";

export default class ConnectAnims {
  static keyframes = { width: ["0px", "300px", "300px"], height: ["0px", "0px", "40px"] }
  static options = { duration: 1500, easing: "ease-out", fill: "forwards" };
  static anim1
  static anim2

  /**
   * Set start or end animation
   */
  static get set() {
    let password = document.querySelector("input[type=password]:nth-of-type(1)");
    let username = document.querySelector("input[type=password]:nth-of-type(2)");
    let kE1 = new KeyframeEffect(password, this.keyframes, this.options);
    let kE2 = new KeyframeEffect(username, this.keyframes, this.options);
    this.anim1 = new Animation(kE1, document.timeline)
    this.anim2 = new Animation(kE2, document.timeline)
  }

  /**
   * Play start animation
   */

  static get start() {
    this.set
    this.anim1.play()
    this.anim2.play()
  }

  /**
   * Set and play end animation
   */

  static get end() {
    this.keyframes = { width: ["300px", "300px", "0px", "0px"], height: ["40px", "0px", "0px", "0px"], border: "none", boxShadow: "none" }
    this.set
    this.anim1.play()
    this.anim2.play()
    document.getElementById("connect_end").beginElement();
  }
}