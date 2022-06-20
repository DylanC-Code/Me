"use-strict";

import { contactControllers } from "../controllers/contact.controllers.js";
import { Contact } from "../components/Contact.js";
import { contactContainer } from "../containers/contact.container.js";
import { HTMLElement } from "../../global/classes/HTMLElement.js";
import SVGElement from "../../global/classes/SVGElement.js";

//^ Display Contact View
export function contactView() {
  //~ Create container
  let container = contactContainer();

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
