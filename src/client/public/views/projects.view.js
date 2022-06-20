"use-strict";

import { Container } from "../components/Containers.js";
import projects from "../components/Projects.js";
import { projectBoxAnims } from "../components/svg/projectsBox.js";
import projectsContainer from "../containers/projects.container.js";

export function projectsView() {
  let main = document.getElementById("main");
  let svg = projectsContainer()
  svg.append(projects())
  main.appendChild(svg)

  projectBoxAnims().play()
}
