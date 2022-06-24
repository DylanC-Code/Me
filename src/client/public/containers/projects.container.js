"use-strict"

import Container from "../../global/classes/Container.js";
import { removeChild } from "../../global/utils/removeChilds.js";


export default function projectsContainer() {
  let main = document.getElementById('main')
  main.className = "main_projects"
  removeChild(main)

  let container = new Container("container", "projects_container").element
  let subContainer = new Container("subContainer").element
  container.appendChild(subContainer)

  return container
}