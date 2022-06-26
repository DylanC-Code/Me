"use-strict";

export default class CategoriesDatasAnims {
  static #keyframes1 = {
    border: ["none", "1px solid white", "1px solid white", "1px solid white"],
    width: [0, "250px", "250px", "250px"],
    height: [0, "0", "120px", "120px"],
    padding: [0, "0", "1rem", "1rem"],
    offset: [0, 0.3, 0.6]
  };
  static #keyframes2 = { opacity: [0, 1] }
  static #options1 = { delay: 2000, duration: 2500, fill: "forwards" };
  static #options2 = { delay: 2700, duration: 1000, fill: "forwards" };
  static #options3 = { delay: 0, duration: 2500, fill: "forwards" };
  static #options4 = { delay: 700, duration: 1000, fill: "forwards" };

  static get slow() {
    let categories = document.querySelectorAll(".card_category");
    let text = document.querySelectorAll(".card_category p, .card_category h1");
    let anims = []
    categories.forEach(cat => {
      let kE = new KeyframeEffect(cat, this.#keyframes1, this.#options1);
      anims.push(new Animation(kE, document.timeline));
    })

    text.forEach((txt) => {
      let kE = new KeyframeEffect(txt, this.#keyframes2, this.#options2);
      anims.push(new Animation(kE, document.timeline));
    });

    anims.forEach(anim => anim.play())
  }

  static get fast() {
    let categories = document.querySelectorAll(".card_category");
    let text = document.querySelectorAll(".card_category p, .card_category h1");
    let anims = []
    categories.forEach(cat => {
      let kE = new KeyframeEffect(cat, this.#keyframes1, this.#options3);
      anims.push(new Animation(kE, document.timeline));
    })

    text.forEach((txt) => {
      let kE = new KeyframeEffect(txt, this.#keyframes2, this.#options4);
      anims.push(new Animation(kE, document.timeline));
    });

    anims.forEach(anim => anim.play())
  }
}