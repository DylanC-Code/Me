"use-strict"

import Container from "../../global/classes/Container.js";
import Tools from "../../global/utils/Tools.js";

export default function projectsContainer() {
  let main = document.getElementById('main')
  main.className = "main_projects"
  Tools.removeChilds(main)

  let container = new Container("container", "projects_container").element
  let subContainer = new Container("subContainer").element
  container.appendChild(subContainer)

  return container
}