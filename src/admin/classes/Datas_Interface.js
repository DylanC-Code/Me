"use-strict";

import { Container } from "../../public/build/components/Containers.js";
import { ContentsAdmin } from "../../public/build/contents/admin.contents.js";

export class Datas_Interface {
  /**
   *^ Create body of data interface view
   */
  constructor() {
    this._interface = new DocumentFragment();
    this.container = Container.Base();
    this.subContainer = Container.SubContainer();
    this.anims;
  }

  //^ Getter return this.interface framgent
  get interface() {
    this.createContainer();
    this.createSubContainer();
    this._interface.append(this.container, this.subContainer);

    return this._interface;
  }

  get anims() {
    return this._anims;
  }
  set anims(values) {
    this._anims = values;
  }

  //^ Create top container with the sub navigation
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
    this.container.appendChild(ul);
  }

  //^ Create bottom container with header and section
  createSubContainer() {
    //~ Create header and section
    let header = document.createElement("header");
    let section = document.createElement("section");

    //~ Append to this._interface
    this.subContainer.append(header, section);
  }
}
