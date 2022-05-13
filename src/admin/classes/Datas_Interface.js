"use-strict";

import { Container } from "../../public/build/components/Containers.js";
import { ContentsAdmin } from "../../public/build/contents/admin.contents.js";

export class Datas_Interface {
  /** Create data interface body
   */
  constructor() {
    this._interface = new DocumentFragment();
    this._container = Container.Base();
    this._subContainer = Container.SubContainer();
  }

  get interface() {
    this.createContainer();
    this.createSubContainer();
    this._interface.append(this._container, this._subContainer);

    return this._interface;
  }

  /**
   ** Create top container with the sub navigation
   */
  createContainer() {
    //~ Create ul
    let ul = document.createElement("ul");

    //~ For each element create li, add text and append to ul
    ContentsAdmin.interfaceData.nav.forEach((cat) => {
      let li = document.createElement("li");
      li.textContent = cat;
      ul.appendChild(li);
    });

    //~ Append ul to this._container
    this._container.appendChild(ul);
  }

  /**
   ** Create bottom container with header and section
   */
  createSubContainer() {
    //~ Create header and section
    let header = document.createElement("header");
    let section = document.createElement("section");

    //~ Append to this._interface
    this._subContainer.append(header, section);
  }
}
