"use-strict"

import HTMLElement from "../classes/HTMLElement.js"

export default class Tools {

  /** Get width of screen if the window is bigger or return width of window
   * Return an integer
   */

  static getWidth() {
    let s = screen.width
    let w = window.innerWidth
    if (s <= w) return s
    return w
  }

  /**
   * Remove childs of an element
   * @param  { Node } element The element to remove childs
   */

  static removeChilds(element) {
    let range = document.createRange();

    range.selectNodeContents(element);
    range.deleteContents();
  }

  /**
  //todo
   */
  static checkSession() {
    let admin = sessionStorage.getItem("admin");

    return admin;
  }

  /**
   * Clear the main element and set class name
   * Return HTMLElement
   * @param  { String } attribut The name of the class to add
   */

  static getClearMain(attribut = null) {
    let main = document.getElementById("main");
    main.className = attribut;
    this.removeChilds(main)

    return main
  }
}