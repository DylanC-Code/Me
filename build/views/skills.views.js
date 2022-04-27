"use-strict";

import { Graph } from "../components/Graph.js";
import { Skill } from "../components/Skill.js";

export function skillsView() {
  let subContainer = document.getElementById("subContainer");
  subContainer.style.margin = "3rem 0";

  subContainer.innerHTML = `
      <svg width='100%' height='100%'>
      </svg>
    `;

  let svg = document.querySelector("#subContainer >svg");
  svg.innerHTML = new Graph(svg, 20, 80, 10, 95, 2021).display;

  svg.innerHTML += new Skill("html", 2025, 30).display;
}
