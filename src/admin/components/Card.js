"use-strict";

export class Card {
  /**
   *^ Create card for the interface data view
   * @param  { STRING } table The name of the table
   * @param  { OBJECT } datas The data of the element
   */
  constructor(table, datas) {
    this.table = table;
    this.datas = datas;
    this._card = document.createElement("article");
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
    let h1 = document.createElement("h1");
    h1.textContent = this.datas.name;
    div.append(h1, special[0]);

    //~ Create the content for the hidden div
    let div2 = document.createElement("div");
    div2.setAttribute("data-category", this.datas.id_category);
    div2.innerHTML = `
      <button class="update">Update</button>
      <button class="delete">Delete</button>
    `;
    div2.appendChild(special[1]);

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
      this._card.className = "card_category";
      p.textContent = `${this.datas.languages} languages`;
      button.className = "languages";
      button.textContent = "See languages";
    } else if (this.table == "languages") {
      this._card.className = "card_language";
      p.textContent = `${this.datas.concepts} concepts`;
      button.className = "concepts";
      button.textContent = "See concepts";
    } else {
      this._card.className = "card_concept";
      p = "";
    }

    //~ Return the paragraphe and the button
    return [p, button];
  }
}
