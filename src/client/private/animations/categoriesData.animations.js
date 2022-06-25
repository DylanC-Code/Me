"use-strict";

// export function categoriesDataAnims() {
//   let categories = document.querySelectorAll(".card_category");
//   let text = document.querySelectorAll(".card_category p, .card_category h1");

//   let kE1 = [
//     { border: "none", width: 0, height: 0, padding: 0, offset: 0 },
//     {
//       border: "1px solid white",
//       width: "250px",
//       height: 0,
//       padding: 0,
//       offset: 0.3,
//     },
//     {
//       border: "1px solid white",
//       width: "250px",
//       height: "120px",
//       padding: "1rem",
//       offset: 0.6,
//     },
//     {
//       border: "1px solid white",
//       width: "250px",
//       height: "120px",
//       padding: "1rem",
//       offset: 1,
//     },
//   ];

//   let kE2 = {
//     opacity: [0, 1],
//   };

//   let options1 = { delay: 2000, duration: 2500, fill: "forwards" };
//   let options2 = {
//     delay: 2700,
//     duration: 1000,
//     fill: "forwards",
//   };

//   let anims = [];

//   categories.forEach((cat) => {
//     let kE = new KeyframeEffect(cat, kE1, options1);
//     anims.push(new Animation(kE, document.timeline));
//   });

//   text.forEach((txt) => {
//     let kE = new KeyframeEffect(txt, kE2, options2);
//     anims.push(new Animation(kE, document.timeline));
//   });

//   return anims;
// }

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

  static get play() {
    this.#create()
  }

  static #create() {
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
}