"use-strict";

export default class IconsAnims {
  static keyframes1 = {
    stroke: ["white", "white", "#FF4B33", "#FF4B33"],
    strokeDashoffset: [0, 1000, 1000, 0],
    offset: [0, 0.1, 0.12]
  }
  static keyframes2 = {
    stroke: ["#FF4B33", "#FF4B33", "white", "white"],
    strokeDashoffset: [0, 1000, 1000, 0],
    offset: [0, 0.1, 0.12]
  }
  static options = { duration: 10000, fill: "forwards" }

  /**
   * Play animation for each buttons
   */

  static get start() {
    document.getElementById("projects").beginElement();
    document.getElementById("skills").beginElement();
    document.querySelectorAll("#socials > svg").forEach((svg) => (svg.style.cursor = "pointer"));
  }

  /**
   * Create the animations for each icons and return an array
   * Return Array with Animation Objects
   * @param  { Array } elements Array with SVG icons to anims
   */

  static clickIconsAnims(elements) {
    let kE1 = new KeyframeEffect(elements[0], this.keyframes1, this.options);
    let kE2 = new KeyframeEffect(elements[1], this.keyframes2, this.options);

    let click = new Animation(kE1, document.timeline);
    let unclick = new Animation(kE2, document.timeline);

    return [click, unclick];
  }
}