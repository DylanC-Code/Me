"use-strict";

import { headerDatasInterface } from "../components/headerDatasInterface.js";
import { mainDatasInterface } from "../components/mainDatasInterface.js";

export function headerDatasInterfaceControllers(table, datas) {
  previous(table, datas);
  next(table, datas);
}

function next(table, datas) {
  let next = document.getElementById("next");
  if (!next) return;
  next.addEventListener("click", () => {
    let last = document.querySelectorAll("[data-category]")[3].dataset.category;
    headerDatasInterface(table, datas);
    mainDatasInterface(table, datas, last++);
  });
}

function previous(table, datas) {
  let previous = document.getElementById("previous");
  if (!previous) return;
  previous.addEventListener("click", () => {
    let first = document.querySelector("[data-category]").dataset.category;
    headerDatasInterface(table, datas);
    mainDatasInterface(table, datas, first - 5);
  });
}
