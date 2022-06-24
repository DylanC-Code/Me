"use-strict";

import Tools from "../../global/utils/Tools.js";
import Container from "../../global/classes/Container.js";
import HTMLElement from "../../global/classes/HTMLElement.js";
import { ContentsAdmin } from "../../public/contents/admin.contents.js";
import DatasInterfaceAnims from "../animations/DatasInterface.animations.js";

//* Create The Container Of DatasInterfaceView
export default function datasInterfaceContainer() {
  // Remove childs of main
  let main = Tools.getClearMain("main_interface");

  // Create containers
  let container = new Container("container").element;
  let subContainer = new Container("subContainer").element;

  // Create HTMLElements and his content
  let ul = document.createElement("ul");
  ContentsAdmin.interfaceData.nav.forEach((cat) => {
    let li = new HTMLElement("li", cat).text(cat);
    ul.appendChild(li);
  });

  let header = document.createElement("header");
  let section = document.createElement("section");

  // Append them to containers
  container.appendChild(ul);
  subContainer.append(header, section);
  main.appendChild(subContainer);

  // Play animations for container, subNavbar and subContainer 
  DatasInterfaceAnims.play
}

