"use-strict";

import { Graph } from "../components/Graph.js";
import { NavGraph } from "../components/NavGraph.js";
import { Skill } from "../components/Skill.js";

export function skillsView() {
  let subContainer = document.getElementById("subContainer");
  subContainer.style.margin = "3rem 0";
  subContainer.innerHTML = `
      <svg width='100%' height='100%'></svg>
    `;

  let svg = document.querySelector("#subContainer >svg");
  svg.innerHTML += new Graph(svg, 20, 80, 10, 95, 2018).display;
  svg.innerHTML += NavGraph(svg);
  let skills = document.getElementById("skills");
  skills.innerHTML += new Skill("HTML", 2019, 100).display;
  skills.innerHTML += new Skill("CSS", 2021, 100).display;
  skills.innerHTML += new Skill("SCSS", 2021, 72).display;
}
