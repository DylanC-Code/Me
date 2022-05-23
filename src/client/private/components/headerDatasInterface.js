"use-strict";

import { ContentsAdmin } from "../../public/build/contents/admin.contents.js";
import { headerInterfaceAnims } from "../animations/headerInterface.animations.js";
import { addBtn, nextPreviousBtn } from "../components/Buttons.js";

//^ Components for display header of datas interface
export function headerDatasInterface(table, datas) {
  //~ Create paragraphe with difference
  let p = document.createElement("p");
  if (table == "categories")
    p.textContent = ContentsAdmin.interfaceData.categories.p;
  else if (table == "languages")
    p.textContent = ContentsAdmin.interfaceData.categories.p;
  else if (table == "concepts")
    p.textContent = ContentsAdmin.interfaceData.categories.p;

  let add = addBtn();
  let nextPrevious = special(datas);

  //~ Append all of us to header
  document.querySelector("#subContainer header").append(p, add, nextPrevious);

  //! anims
  headerInterfaceAnims().forEach((anim) => anim.play());
}

function special(datas) {
  let first = document.querySelector("[data-category]");
  let last = document.querySelectorAll("[data-category]")[3];

  let plus = last ? datas.filter((d) => d.id > last.dataset.category) : [];
  let less = first ? datas.filter((d) => d.id < first.dataset.category) : [];

  if (!plus[0] && !less[0]) return nextPreviousBtn(0);
  else if (plus[0] && less[0]) return nextPreviousBtn(3);
  else if (less[0]) return nextPreviousBtn(2);
  else if (plus[0]) return nextPreviousBtn(1);
}
