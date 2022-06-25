"use-strict";

import HTMLElement from "../../global/classes/HTMLElement.js";

// TODO
export default class Card {
  /**
   * Create card for the interface data view
   * @param  { STRING } table The name of the table
   * @param  { OBJECT } datas The data of the element
   */
  constructor(table, datas) {
    this.table = table;
    this.datas = datas;
    this._card = new HTMLElement("article").attributes([
      ["class", "card_category"],
    ]);
  }

  //^ The getter of this._card
  get card() {
    this.create();
    return this._card;
  }

  //^ Create the card
  create() {
    //~ Call this.special() for check the difference between the table
    let special = this.special();

    //~ Create the content for the first div
    let div = document.createElement("div");
    let h1 = new HTMLElement("h1", null).text(this.datas.name);

    div.appendChild(h1);
    if (special[0]) div.appendChild(special[0]);

    //~ Create the content for the hidden div
    let div2 = new HTMLElement("div", null).attributes([
      ["data-category", this.datas.id],
    ]);
    div2.innerHTML = `
      <button class="update">Update</button>
      <button class="delete">Delete</button>
    `;
    if (special[1]) div2.appendChild(special[1]);

    //~ Append all of us to the this._card
    this._card.append(div, div2);
  }

  //^ Control the difference between the table
  //^ Return elements
  special() {
    //~ Create a paragraphe and a button
    let p = document.createElement("p");
    let button = document.createElement("button");

    //~ Control whose table is it
    if (this.table == "categories") {
      p.textContent = `${this.datas.languages} languages`;
      button.className = "languages";
      button.textContent = "See languages";
      return [p, button];
    } else if (this.table == "languages") {
      let logo = new HTMLElement("img", null).attributes([
        ["src", `./private/static/${this.datas.name}.svg`],
        ["class", "logos"],
      ]);
      button.className = "concepts";
      button.textContent = "See concepts";
      return [logo, button];
    } else if (this.table == "concepts") {
      p.textContent = `${this.datas.value} / 5`;
      return [p];
    }
  }
}
