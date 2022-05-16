"use-strict";

export async function createControllers() {
  let modal = document.getElementById("modal");
  let buttons = document.querySelectorAll("#modal button");

  buttons[0].addEventListener("click", () => {
    let valid = [0, 0, 0, 0];

    //~ Control if input name is valid
    valid[0];
    let name = document.querySelector('#modal input[type="text"]');
    // .value.matches(/^[\wÜ-ü]{2,15}(\s)?[\wÜ-ü]{0,15}$/)
    // ? 1
    // : 0;
    console.log(name);

    let radio = document.querySelector('#modal input[type="radio"]:checked');

    let checkbox = document.querySelectorAll(
      '#modal input[type="checkox"]:checked'
    );
    let value = document
      .querySelector("input[type='number']")
      .value.matches(/^[0-5]$/);

    console.log(radio);
    console.log(checkbox);
    console.log(value);
    console.log(valid);
  });

  buttons[1].addEventListener("click", () => modal.remove());
}
