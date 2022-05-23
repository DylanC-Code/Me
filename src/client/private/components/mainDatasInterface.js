"use-strict";

import { removeChild } from "../../global/utils/removeChilds.js";
import { Request } from "../../public/api/Request.js";
import { categoriesDataAnims } from "../animations/categoriesData.animations.js";
import { buttonsControllers } from "../controllers/buttons.controllers.js";
import { mainDatasInterfaceControllers } from "../controllers/mainDatasInterface.controllers.js";
import { Card } from "./Card.js";

export async function mainDatasInterface(table, datas, index = 0) {
  //~ Remove child of the main
  let main = document.querySelector("#subContainer section");
  removeChild(main);

  //~ If datas is undefined make request to the database
  if (!datas) {
    datas = await new Request("GET", `/${table}`).play;
    datas = datas.result;
  }

  //~ Create maximum four cards
  for (const d of datas) {
    if (typeof datas != "object") {
      break;
    }
    if (datas.indexOf(d) > index + 3 || datas.indexOf(d) < index) {
      continue;
    }
    let card = new Card(table, d).card;
    main.appendChild(card);
  }

  //! anims
  categoriesDataAnims().forEach((anim) => anim.play());

  //~ Controllers
  mainDatasInterfaceControllers(table, datas);
  buttonsControllers(datas);
}
