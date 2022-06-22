"use-strict"

import headerProjectsInterface from "../components/headerProjectsInterface.js";
import mainProjectsInterface from "../components/mainProjectsInterface.js";

//^ Controllers for the header of data interface
export function headerProjectsInterfaceControllers(datas) {


  //~ Get the elements
  let next = document.getElementById("next");
  let previous = document.getElementById("previous");

  //~ Listener on next button element
  next.addEventListener("click", () => {
    let last = document.querySelectorAll("[data-project]")[3].dataset.project;
    last = datas.findIndex((d) => d.id == last) + 1;

    //~ Reload the interface with new datas
    headerProjectsInterface(datas)
    mainProjectsInterface(datas, last)
  });

  //~ Listener on previous button element
  previous.addEventListener("click", () => {
    let first = document.querySelector("[data-project]").dataset.project;
    first = datas.findIndex((d) => d.id == first) - 4;

    //~ Reload the interface with new datas
    headerProjectsInterface(datas)
    mainProjectsInterface(datas, first)
  });
}
