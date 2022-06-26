"use-strict";

export default class ButtonsControllers {
  #datas

  /**
   * Control the display datas and remove the elements of the nextPrevious button
   * @param  { Array } datas Content actually datas display
   */

  constructor(datas) {
    this.#datas = datas
  }

  get play() {
    this.#create()
  }

  #create() {
    // Get first and last cards elements on the main
    let first = document.querySelector("[data-category]") ? document.querySelector("[data-category]") : document.querySelector("[data-project]")
    let last = document.querySelectorAll("[data-category]")[3] ? document.querySelectorAll("[data-category]")[3] : document.querySelectorAll("[data-project]")[3]

    let plus = [];
    let less = [];

    // Control if datas have more or less elements to display
    if (last) {
      last = this.#datas.findIndex((d) => d.id == last.dataset.category || d.id == last.dataset.project);
      plus = this.#datas.filter((d) => this.#datas.indexOf(d) > last);
    }
    if (first) {
      first = this.#datas.findIndex((d) => d.id == first.dataset.category || d.id == first.dataset.project);
      less = this.#datas.filter((d) => this.#datas.indexOf(d) < first);
    }

    // Check the good situation for display the good button
    if (!first && !last && this.#datas.length > 4)
      return document.getElementById("previous").remove();
    if (!plus[0] && !less[0])
      return document.getElementById("add_previous").remove();
    else if (plus[0] && less[0]) return;
    else if (less[0]) return document.getElementById("next").remove();
    else if (plus[0]) return document.getElementById("previous").remove();
  }
}