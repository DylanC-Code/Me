"use-strict";

//^^ Animations for create the data interface
//^ Return functions in array

export default function datasInterfaceAnims() {
  //~ Select container, subcontainer and ul in the container
  let container = document.getElementById("container");
  let subContainer = document.getElementById("subContainer");
  let nav = document.querySelector("#container > ul");

  //~ Set keyframes for the container
  let kE1 = new KeyframeEffect(
    container,
    [
      {
        width: "80%",
      },
    ],
    { duration: 1200, fill: "forwards", easing: "ease-out" }
  );

  //~ Set keyframes for the subContainer
  let kE2 = new KeyframeEffect(
    subContainer,
    [
      {
        height: 0,
        borderBottom: "1px dashed white",
        paddingTop: 0,
        paddingLeft: 0,
        paddingTop: 0,
      },
      {
        height: "90%",
        borderBottom: "1px dashed white",
        paddingTop: "3rem",
        paddingLeft: "3rem",
        paddingRight: "3rem",
      },
    ],
    { delay: 1200, duration: 1200, fill: "forwards" }
  );

  //~ Set keyframes for the ul apparition
  let kE3 = new KeyframeEffect(
    nav,
    [
      {
        height: 0,
      },
      { height: "30px" },
    ],
    { delay: 1200, duration: 1200, fill: "forwards" }
  );

  //~ Create instance animation for each element
  container = new Animation(kE1, document.timeline);
  subContainer = new Animation(kE2, document.timeline);
  nav = new Animation(kE3, document.timeline);

  //~ Return array of functions
  return [container, subContainer, nav];
}

export  class DatasInterfaceAnims {
  static keyframes1 = { width: "80%" };
  static keyframes2 = {
    height: [0, "90%"],
    borderBottom: "1px dashed white",
    paddingTop: [0, "3rem"],
    paddingLeft: [0, "3rem"],
    paddingTop: [0, "3rem"],
  };
  static keyframes3 = { height: [0, "30px"] };
  static options1 = { duration: 1200, fill: "forwards", easing: "ease-out" }
  static options2 = { delay: 1200, duration: 1200, fill: "forwards" }

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