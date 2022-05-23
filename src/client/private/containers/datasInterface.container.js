"use-strict";

import { Container, SubContainer } from "../../global/classes/Container.js";
import { ContentsAdmin } from "../../public/build/contents/admin.contents.js";
import { HTMLElement } from "../../global/classes/HTMLElement.js";
import { datasInterfaceAnims } from "../animations/datasInterface.animations.js";
import { removeChild } from "../../global/utils/removeChilds.js";

//^ Create the container of the datas interface view
export function datasInterfaceContainer() {
  //~ Remove childs of main
  let main = document.getElementById("main");
  removeChild(main);

  //~ Create containers
  let container = new Container().element;
  let subContainer = new SubContainer().element;

  //~ Create HTMLElement and his content
  let ul = document.createElement("ul");
  ContentsAdmin.interfaceData.nav.forEach((cat) => {
    let li = new HTMLElement("li", cat).text(cat);
    ul.appendChild(li);
  });
  let header = document.createElement("header");
  let section = document.createElement("section");

  //~ Append them to containers
  container.appendChild(ul);
  subContainer.append(header, section);
  main.append(container, subContainer);

  //!! anims
  datasInterfaceAnims().forEach((anim) => anim.play()); //! anims
}
