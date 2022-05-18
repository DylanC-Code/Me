"use-strict";

import { Request } from "../../public/build/api/Request.js";

export async function createControllers(table) {
  let modal = document.getElementById("modal");
  let buttons = document.querySelectorAll("#modal button");
  let name = document.querySelector('input[type="text"]');
  let body = {};
  let elements = [];
  let valid = true;

  async function controller() {
    if (table == "languages") {
      if (name.value)
        name = name.value.match(/^[\wÜ-ü]{2,15}[\s-]?[\wÜ-ü]{0,15}$/);
      let radio = document.querySelector('input[type="radio"]:checked');

      [name, radio].forEach((input) =>
        !input ? (valid = false) : elements.push(input)
      );
    } else if (table == "concepts") {
      if (name.value)
        name = name.value.match(/^[\wÜ-ü]{2,15}(\s)?[\wÜ-ü]{0,15}$/);
      let checkbox = document.querySelectorAll('input[type="checkox"]:checked');
      let value = document.querySelector("input[type='number']");

      [name, value].forEach((input) =>
        !input ? (valid = false) : elements.push(input)
      );
      !checkbox[0] ? (valid = false) : elements.push(input);
    } else {
      if (name.value) {
        name = name.value.match(/^[\wÜ-ü]{2,15}[\s-]?[\wÜ-ü]{0,15}$/);
        elements.push(name);
      } else valid = false;
    }

    if (valid && table == "languages") {
      body = { name: elements[0][0], id_category: elements[1].id };
      let res = await new Request("POST", `/${table}/create`, body).play;
      console.log(res);
    } else if (valid && table == "concepts") {
      body = {
        name: elements[0][0],
        value: elements[2].value,
        languages,
      };
    } else if (valid && table == "categories") {
      body = { name: elements[0][0] };
      let res = await new Request("POST", `/${table}/create`, body).play;
      console.log(res);
    } else errorInputs();
  }

  buttons[0].addEventListener("click", () => controller());

  buttons[1].addEventListener("click", () => modal.remove());
}
