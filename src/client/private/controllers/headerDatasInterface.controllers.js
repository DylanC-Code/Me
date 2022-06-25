"use-strict";

import HeaderDatasInterface from "../components/HeaderDatasInterface.js";
import MainDatasInterface from "../components/MainDatasInterface.js";

//* Controllers For Add And NextPrevious Buttons In The HeaderDatasInterface
export default function headerDatasInterfaceControllers(table, datas) {
  // Listener on next button element
  next.addEventListener("click", () => {
    let last = document.querySelectorAll("[data-category]")[3].dataset.category;
    last = datas.findIndex((d) => d.id == last) + 1;

    // Reload the interface with new datas
    new HeaderDatasInterface(table, datas).display
    new MainDatasInterface(table, datas, last).display
    // mainDatasInterface(table, datas, last); //! to delete
  });

  // Listener on previous button element
  previous.addEventListener("click", () => {
    let first = document.querySelector("[data-category]").dataset.category;
    first = datas.findIndex((d) => d.id == first) - 4;

    // Reload the interface with new datas
    new HeaderDatasInterface(table, datas).display
    new MainDatasInterface(table, datas, first).display
    // mainDatasInterface(table, datas, first); //! to delete
  });
}
