"use-strict";

import Request from "../../public/api/Request.js";
import HeaderProjectsInterface from "../components/HeaderProjectsInterface.js";
import MainProjectsInterface from "../components/MainProjectsInterface.js";
import projectsInterfaceContainer from "../containers/projectsInterface.container.js";

export default class ProjectsInterfaceView {
  /**
   * @param  { Array } datas The contents to display
   */

  #datas
  constructor(datas = false) {
    this.#datas = datas
  }

  get display() {
    this.#create()
  }

  //* Create Interface View
  async #create() {
    // Control if datas is not null
    if (!this.#datas) {
      this.#datas = await new Request("GET", `/projects`).play;
      this.#datas = this.#datas.result;
    }

    // Call the container of the view if not exist already
    projectsInterfaceContainer()
    new HeaderProjectsInterface(this.#datas).display
    new MainProjectsInterface(this.#datas).display
  }
}