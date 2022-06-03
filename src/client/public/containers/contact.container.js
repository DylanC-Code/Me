"use-strict";

import { Container } from "../../global/classes/Container.js";
import { removeChild } from "../../global/utils/removeChilds.js";

//^ Create Container For Contact View
//^ Return container
export function contactContainer() {
  //~ Get main and remove childs
  let main = document.getElementById("main");
  main.className = "main_contact";
  removeChild(main);

  //~ Return container
  return new Container().element;
}
