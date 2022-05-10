"use-strict";

export function categoriesDataAnims() {
  let categories = document.querySelectorAll(".card_category");
  let text = document.querySelectorAll(".card_category p, .card_category h1");

  let kE1 = [
    { border: "none", width: 0, height: 0, padding: 0, offset: 0 },
    {
      border: "1px solid white",
      width: "250px",
      height: 0,
      padding: 0,
      offset: 0.3,
    },
    {
      border: "1px solid white",
      width: "250px",
      height: "120px",
      padding: "1rem",
      offset: 0.6,
    },
    {
      border: "1px solid white",
      width: "250px",
      height: "120px",
      padding: "1rem",
      offset: 1,
    },
  ];

  let kE2 = {
    opacity: [0, 1],
  };

  let options1 = { delay: 2000, duration: 2500, fill: "forwards" };
  let options2 = {
    delay: 2700,
    duration: 1000,
    fill: "forwards",
  };

  let anims = [];

  categories.forEach((cat) => {
    let kE = new KeyframeEffect(cat, kE1, options1);
    anims.push(new Animation(kE, document.timeline));
  });

  text.forEach((txt) => {
    let kE = new KeyframeEffect(txt, kE2, options2);
    anims.push(new Animation(kE, document.timeline));
  });

  return anims;
}
