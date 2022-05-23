"use-strict";

import { bioControllers } from "../controllers/bio.controllers.js";

export function bioView() {
  let subContainer = document.getElementById("subContainer");
  subContainer.style.margin = "3rem";
  subContainer.innerHTML = `
    <h1></h1>
    <p></p>
  `;

  bioControllers();
}
