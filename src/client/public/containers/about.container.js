"use-strict";

import Container from "../../global/classes/Container.js";
import { removeChild } from "../../global/utils/removeChilds.js";

//^ Container for about view
//^ Return the containers
export function aboutContainer() {
  //~ Get main and remove childs
  let main = document.getElementById("main");
  main.className = "main_about";
  removeChild(main);

  //~ Create containers with its attribute
  let container = new Container("container", "sub_navbar").element;
  let subContainer = new Container("subContainer").element;

  //~ Append to the main and return containers
  main.append(container, subContainer);
  return [container, subContainer];
}
