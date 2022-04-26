"use-strict";

import { contactControllers } from "../controllers/contact.controllers.js";
import { Container } from "../components/Containers.js";
import { Contact } from "../components/Contact.js";

export function contactView() {
  let main = document.getElementById("main");
  main.classList = "main_contact";

  let container = Container.Base();
  container.innerHTML = `
    <h1></h1>
    <p></p>
    <svg>${Contact()}</svg>
    <svg width="50" height="30" viewBox="0 0 158 84" fill="none">
      <path d="M3.47659 49.6828C-18.8077 -11.2586 115.661 -11.2588 151.835 29.0464C188.008 69.3516 23.0135 116.106 3.47659 49.6828Z" stroke="black"/>
    </svg>
  `;

  contactControllers();
}
