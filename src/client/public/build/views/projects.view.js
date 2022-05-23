"use-strict";

import { Container } from "../components/Containers.js";

export function projectsView() {
  let main = document.getElementById("main");
  main.className = "main_projects";

  let container = Container.Base();
  container.innerHTML = `
    <h2>Project 1/10</h2>
    <h1>Lemon's Quizz</h1>
    <svg id="projects" width="50vw" height="50vh"></svg>
  `;
}
