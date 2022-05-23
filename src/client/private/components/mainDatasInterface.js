"use-strict";

import { removeChild } from "../../global/utils/removeChilds.js";
import { Request } from "../../public/build/api/Request.js";
import { categoriesDataAnims } from "../animations/categoriesData.animations.js";
import { Card } from "./Card.js";

export async function mainDatasInterface(table, datas) {
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
    if (datas.indexOf(d) > 3 || typeof datas != "object") break;

    let card = new Card(table, d).card;
    main.appendChild(card);
  }

  //! anims
  categoriesDataAnims().forEach((anim) => anim.play());
}
