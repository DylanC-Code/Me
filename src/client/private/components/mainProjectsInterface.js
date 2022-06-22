"use-strict"

import { HTMLElement } from "../../global/classes/HTMLElement.js";
import { removeChild } from "../../global/utils/removeChilds.js";
import { categoriesDataAnims } from "../animations/categoriesData.animations.js";
import { buttonsControllers } from "../controllers/buttons.controllers.js";
import { mainProjectsInterfaceControllers } from "../controllers/mainProjectsInterface.controllers.js";

export default function mainProjectsInterface(datas, index = 0) {
  //~ Remove child of the main
  let main = document.querySelector("#subContainer section");
  removeChild(main);

  //~ Create maximum four cards
  for (const d of datas) {
    if (typeof datas != "object") {
      break;
    }
    if (datas.indexOf(d) > index + 3 || datas.indexOf(d) < index) {
      continue;
    }
    let card = cardProject(d)
    main.appendChild(card);
  }

  // //! anims
  categoriesDataAnims().forEach((anim) => anim.play());

  // //~ Controllers
  mainProjectsInterfaceControllers(datas)
  buttonsControllers(datas);
}

function cardProject(data) {
  let article = new HTMLElement("article").attributes([["class", "card_category"]])
  let div = new HTMLElement("div").element
  let h1 = new HTMLElement("h1").text(data.name)
  let figure = new HTMLElement('figure').element
  let image = new HTMLElement('image').attributes([["src", data.url], ['alt', "des images"]])

  //~ Create the content for the hidden div
  let div2 = new HTMLElement("div", null).attributes([
    ["data-project", data.id],
  ]);

  div2.innerHTML = `
    <button class="update">Update</button>
    <button class="delete">Delete</button>
  `;

  div.append(h1, figure)
  figure.appendChild(image)
  article.append(div, div2)
  return article
}