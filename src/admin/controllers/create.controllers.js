"use-strict";

export async function createControllers() {
  let modal = document.getElementById("modal");
  let buttons = document.querySelectorAll("#modal button");

  buttons[0].addEventListener("click", () => {
    let valid = [0, 0, 0, 0];

    //~ Control if input name is valid
    valid[0] = document
      .querySelector('#modal input[type="text"]')
      .value.match(/^[\wÜ-ü]{2,15}(\s)?[\wÜ-ü]{0,15}$/)
      ? 1
      : 0;

    //~ Control if radio is checked
    valid[1] = document.querySelector('#modal input[type="radio"]:checked')
      ? 1
      : 0;

    //~ Control if an input checkbox is checked
    valid[2] = document.querySelectorAll(
      '#modal input[type="checkox"]:checked'
    )[0]
      ? 1
      : 0;

    let value = document.querySelector("#modal input[type='number']");
    if (value !== null) valid[3] = value.value.match(/^[0-5]$/) ? 1 : 0;
    else valid[3] = 0;

    switch (key) {
      case value:
        
        break;
    
      default:
        break;
    }
  });

  buttons[1].addEventListener("click", () => modal.remove());
}
