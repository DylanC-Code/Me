"use-strict";

// import { Request } from "../../public/build/api/Request.js";
// import { ContentsAdmin } from "../../public/build/contents/admin.contents.js";
// import { Card } from "./Card.js";
// import { HTMLElement } from "../../global/classes/HTMLElement.js";
// import { nextPreviousBtn } from "./Buttons.js";

export class Datas {
  /**
   *^ Display the header and the section with all the datas of the interface
   * @param  { STRING } table Specify the table
   * @param  { OBJECT } Datas The datas of the each elements
   */
  constructor(table, datas) {
    this.table = table;
    this.datas = datas;
    this.header = document.querySelector("#subContainer header");
    this.section = document.querySelector("#subContainer section");
    this.anims;
  }

  //~ Get of the interface

  get anims() {
    return this._anims;
  }

  set anims(value) {
    this._anims = value;
  }

  async create() {
    await this.createSection();
    this.createHeader();
  }
  //^ Verify if the elements are bigger than 4
  //^ Return an article or a empty string
  // special() {
  //   let first = document.querySelector("[data-category]");
  //   let last = document.querySelectorAll("[data-category]")[3];

  //   // console.log(first);
  //   // console.log(last);
  //   // console.log(this.datas);
  //   let plus = last
  //     ? this.datas.filter((d) => d.id > last.dataset.category)
  //     : [];
  //   let less = first
  //     ? this.datas.filter((d) => d.id < first.dataset.category)
  //     : [];

  //   // console.log(plus, less);
  //   if (!plus[0] && !less[0]) return nextPreviousBtn(0);
  //   else if (plus[0] && less[0]) return nextPreviousBtn(3);
  //   else if (less[0]) return nextPreviousBtn(2);
  //   else if (plus[0]) return nextPreviousBtn(1);
  // }

  // //^ Create the header
  // createHeader() {
  //   //~ Create paragraphe with difference
  //   let p = document.createElement("p");
  //   if (this.table == "categories")
  //     p.textContent = ContentsAdmin.interfaceData.categories.p;
  //   else if (this.table == "languages")
  //     p.textContent = ContentsAdmin.interfaceData.categories.p;
  //   else if (this.table == "concepts")
  //     p.textContent = ContentsAdmin.interfaceData.categories.p;

  //   // //~ Create article button for add a new element
  //   let article = new HTMLElement("article", "add").element;
  //   let h1 = new HTMLElement("h1", null).text("Add one");
  //   let svg = `
  //     <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
  //       <path d="M6.5 0.25C6.7072 0.25 6.90591 0.33231 7.05243 0.478823C7.19894 0.625336 7.28125 0.82405 7.28125 1.03125V5.71875H11.9688C12.176 5.71875 12.3747 5.80106 12.5212 5.94757C12.6677 6.09409 12.75 6.2928 12.75 6.5C12.75 6.7072 12.6677 6.90591 12.5212 7.05243C12.3747 7.19894 12.176 7.28125 11.9688 7.28125H7.28125V11.9688C7.28125 12.176 7.19894 12.3747 7.05243 12.5212C6.90591 12.6677 6.7072 12.75 6.5 12.75C6.2928 12.75 6.09409 12.6677 5.94757 12.5212C5.80106 12.3747 5.71875 12.176 5.71875 11.9688V7.28125H1.03125C0.82405 7.28125 0.625336 7.19894 0.478823 7.05243C0.33231 6.90591 0.25 6.7072 0.25 6.5C0.25 6.2928 0.33231 6.09409 0.478823 5.94757C0.625336 5.80106 0.82405 5.71875 1.03125 5.71875H5.71875V1.03125C5.71875 0.82405 5.80106 0.625336 5.94757 0.478823C6.09409 0.33231 6.2928 0.25 6.5 0.25Z" fill="#FF4B33"/>
  //     </svg>
  //   `;
  //   article.appendChild(h1);
  //   article.innerHTML += svg;

  //   //~ Call the other button or a empty string
  //   let special = this.special();

  //   //~ Append all of us to this.header
  //   this.header.append(p, article, special);
  // }

  // //^ Create all cards of the section
  // async createSection() {
  //   if (!this.datas) {
  //     this.datas = await new Request("GET", `/${this.table}`).play;
  //     this.datas = this.datas.result;
  //   }
  //   //~ While d < 4 create new card and if is an object
  //   for (const d of this.datas) {
  //     if (this.datas.indexOf(d) > 3 || typeof this.datas != "object") return;

  //     let card = new Card(this.table, d).card;
  //     this.section.appendChild(card);
  //   }
  // }
}
