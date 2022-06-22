"use-strict"

import { SubContainer } from "../../global/classes/Container.js"
import { removeChild } from "../../global/utils/removeChilds.js"
import projectsInterfaceAnims from "../animations/projectsInteface.animations.js"

export default function projectsInterfaceContainer() {
  let main = document.getElementById('main')
  main.className = "main_interface_project"
  removeChild(main)

  let container = new SubContainer().element

  let header = document.createElement("header");
  let section = document.createElement("section");

  //~ Append them to containers
  container.append(header, section);
  main.append(container);

  projectsInterfaceAnims().play()
}