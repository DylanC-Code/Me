"use-strict";

import { contactControllers } from "../controllers/contact.controllers.js";
import { Container } from "../components/Containers.js";
import { Contact } from "../components/Contact.js";

export function contactView() {
  let main = document.getElementById("main");
  main.className = "main_contact";

  let container = Container.Base();
  container.innerHTML = `
    <h1></h1>
    <p></p>
    <svg>${Contact()}</svg>
  `;
  contactControllers();
}
