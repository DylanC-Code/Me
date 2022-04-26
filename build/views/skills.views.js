"use-strict";

import { Graph } from "../components/Graph.js";

export function skillsView() {
  let subContainer = document.getElementById("subContainer");
  subContainer.style.margin = "3rem 0";

  subContainer.innerHTML = `
      <svg width='100%' height='100%'>
      </svg>
    `;

  Graph();
}
