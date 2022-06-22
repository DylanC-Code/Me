"use-strict"

import { Container, SubContainer } from "../../global/classes/Container.js";
import { removeChild } from "../../global/utils/removeChilds.js";


export default function projectsContainer() {
  let main = document.getElementById('main')
  main.className = "main_projects"
  removeChild(main)

  let container = new Container("projects_container").element
  let subContainer = new SubContainer().element
  container.appendChild(subContainer)

  return container
}