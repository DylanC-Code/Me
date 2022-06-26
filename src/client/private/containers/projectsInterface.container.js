"use-strict"

import Tools from "../../global/utils/Tools.js";
import Container from "../../global/classes/Container.js"
import ProjectsInterfaceAnims from "../animations/ProjectsInterface.animations.js"

export default function projectsInterfaceContainer() {
  Tools.getClearMain("main_interface_project")

  let container = new Container("container").element
  let header = document.createElement("header");
  let section = document.createElement("section");

  // Append them to containers
  container.append(header, section);

  ProjectsInterfaceAnims.play
}