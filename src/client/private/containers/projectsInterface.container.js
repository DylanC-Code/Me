"use-strict"

import Tools from "../../global/utils/Tools.js";
import Container from "../../global/classes/Container.js"
import ProjectsInterfaceAnims from "../animations/projectsInteface.animations.js"

export default function projectsInterfaceContainer() {
  // let main = document.getElementById('main') //!remove
  // main.className = "main_interface_project" //!remove

  Tools.getClearMain("main_interface_project")
  let container = new Container("container").element

  let header = document.createElement("header");
  let section = document.createElement("section");

  // Append them to containers
  container.append(header, section);

  new ProjectsInterfaceAnims.play
}