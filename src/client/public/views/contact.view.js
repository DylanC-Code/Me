"use-strict";

import { contactControllers } from "../controllers/contact.controllers.js";
import { Contact } from "../components/Contact.js";
import HTMLElement from "../../global/classes/HTMLElement.js";
import SVGElement from "../../global/classes/SVGElement.js";
import Container from "../../global/classes/Container.js";

//^ Display Contact View
export function contactView() {
  let main = document.getElementById("main");
  main.className = "main_contact";
  removeChild(main);

  let container = new Container("container").element

  //~ Create HTML, SVG elements and append them
  let h1 = new HTMLElement("h1").element;
  let p = new HTMLElement("p").element;
  let svg = new SVGElement("svg").element;
  svg.appendChild(Contact())
  container.append(h1, p, svg);

  // document.createElement("");
  //~ Call the controllers of this view
  contactControllers();
}
