"use-strict";

import Tools from "../../global/utils/Tools.js";
import Container from "../../global/classes/Container.js";
import HTMLElement from "../../global/classes/HTMLElement.js";
import DatasInterfaceView from "../views/DatasInterface.view.js";
import { ContentsAdmin } from "../../public/contents/admin.contents.js";
// import DatasInterfaceAnims from "../animations/datasInterface.animations.js";
import datasInterfaceAnims from "../animations/datasInterface.animations.js";

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

  //!! anims
  // DatasInterfaceAnims.play
  datasInterfaceAnims().forEach((anim) => anim.play()); //! anims
  controllers();
}

//^ Controllers for the datas interface container
function controllers() {
  // Change categories of datas
  let buttons = document.querySelectorAll("#container li");
  buttons[0].addEventListener("click", () =>
    new DatasInterfaceView("categories").create()
  );

  buttons[1].addEventListener("click", () =>
    new DatasInterfaceView("languages").create()
  );

  buttons[2].addEventListener("click", () =>
    new DatasInterfaceView("concepts").create()
  );

  // Remove colors and add to the category clicked
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => {
        b.style.border = "1px dashed white";
        b.style.color = "white";
      });

      btn.style.border = "1px solid #38C7C7";
      btn.style.color = "#38C7C7";
    });
  });
}
