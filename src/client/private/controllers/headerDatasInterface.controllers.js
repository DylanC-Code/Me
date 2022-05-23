"use-strict";

import { headerDatasInterface } from "../components/headerDatasInterface.js";
import { mainDatasInterface } from "../components/mainDatasInterface.js";

//^ Controllers for the header of data interface
export function headerDatasInterfaceControllers(table, datas) {
  //~ Get the elements
  let next = document.getElementById("next");
  let previous = document.getElementById("previous");

  //~ Listener on next button element
  next.addEventListener("click", () => {
    let last = document.querySelectorAll("[data-category]")[3].dataset.category;
    last = datas.findIndex((d) => d.id == last) + 1;

    //~ Reload the interface with new datas
    headerDatasInterface(table, datas);
    mainDatasInterface(table, datas, last);
  });

  //~ Listener on previous button element
  previous.addEventListener("click", () => {
    let first = document.querySelector("[data-category]").dataset.category;
    first = datas.findIndex((d) => d.id == first) - 4;

    //~ Reload the interface with new datas
    headerDatasInterface(table, datas);
    mainDatasInterface(table, datas, first);
  });
}
