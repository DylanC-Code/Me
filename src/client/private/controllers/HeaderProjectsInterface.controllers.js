"use-strict"

import HeaderProjectsInterface from "../components/HeaderProjectsInterface.js";
import MainProjectsInterface from "../components/MainProjectsInterface.js";

export default class HeaderProjectsInterfaceControllers {
  #datas
  constructor(datas) {
    this.#datas = datas
  }

  get play() {
    this.#create()
  }

  //*Play The Controllers For The HeaderDatasInterface
  #create() {
    // Listener on next button element
    next.addEventListener("click", () => {
      let last = document.querySelectorAll("[data-project]")[3].dataset.project;
      last = this.#datas.findIndex((d) => d.id == last) + 1;

      // Reload the interface with new datas
      new HeaderProjectsInterface(this.#datas).display
      new MainProjectsInterface(this.#datas, last).display
    });

    // Listener on previous button element
    previous.addEventListener("click", () => {
      let first = document.querySelector("[data-project]").dataset.project;
      first = this.#datas.findIndex((d) => d.id == first) - 4;

      // Reload the interface with new datas
      new HeaderProjectsInterface(this.#datas).display
      new MainProjectsInterface(this.#datas, first).display
    });
  }
}