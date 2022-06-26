// "use-strict";

// import Request from "../../public/api/Request.js";
// import Modal from "../../global/classes/Modal.js";
// import Input from "../../global/classes/Input.js";
// import Label from "../../global/classes/Label.js";
// import HTMLElement from "../../global/classes/HTMLElement.js";
// import { ContentsAdmin } from "../../public/contents/admin.contents.js";

// export class Create extends Modal {
//   /**
//    * Create the modal for add new element
//    * @param  { STRING } table The name of the about table
//    */
//   constructor(table) {
//     super(table);
//   }

//   //^ Create the modal and append the to 'this.modal'
//   async create() {
//     //~ Call this.special() to control the difference
//     let special = await this.special();

//     //~ Create and set the global HTMLElements
//     let name = new Input("text", "name", null).attributes([
//       ["placeholder", "Name"],
//     ]);
//     let div = document.createElement("div");
//     let btn1 = new HTMLElement("button").text("Create");
//     let btn2 = new HTMLElement("button").text("Cancel");

//     //~ Append them
//     div.append(btn1, btn2);
//     this.element.append(name, special, div);

//     return this.element;
//   }

//   //^ Control the difference between the table
//   //^ Return a fragment
//   async special() {
//     //~ Create new fragment
//     let fragment = new DocumentFragment();

//     let h1, h2, div;
//     let error = new HTMLElement("p", "error").element;
//     this.element.appendChild(error);

//     switch (this.table) {
//       // ###############################################################
//       // ###############################################################
//       //~ If table is equal to categories
//       case "categories":
//         //~ Create h1 element and return it
//         return new HTMLElement("h1", null).inner(
//           ContentsAdmin.create.categories.h1
//         );

//       // ###############################################################
//       // ###############################################################
//       //~ If table is equal to languages
//       case "languages":
//         //~ Request to the database for get all categories
//         let categories = await new Request("GET", "/categories").play;

//         //~ Create and set the HTMLElements
//         let file = new Input("file", "file", null).element;
//         let label = new HTMLElement("label", null).attributes([
//           ["for", "file"],
//         ]);
//         h1 = new HTMLElement("h1", null).inner(
//           ContentsAdmin.create.languages.h1
//         );
//         h2 = new HTMLElement("h2", null).inner(
//           ContentsAdmin.create.categories.h2
//         );
//         div = document.createElement("div");

//         //~ Append them
//         this.element.appendChild(h1);
//         fragment.append(file, label, h2);

//         //~ For each category create input with its label
//         if (categories.result[0]) {
//           categories.result.forEach((cat) => {
//             let input = new Input("radio", cat.id, null).attributes([
//               ["name", "category"],
//             ]);
//             let label = new Label(cat.id, null, cat.name).element;

//             //~ Append them to the div
//             div.append(input, label);
//           });

//           //~ Return the fragment
//           fragment.append(div);
//           return fragment;
//         } else {
//           h1 = new HTMLElement("h1", null).inner(
//             ContentsAdmin.create.errors.parents
//           );
//           this.element.innerHTML = h1;
//         }

//       // ###############################################################
//       // ###############################################################

//       //~ If table is equal to concepts
//       case "concepts":
//         //~ Request to the database for get all languages
//         let languages = await new Request("GET", `/languages`).play;

//         //~ Create and set the HTMLElements
//         let lvl = new HTMLElement("h2", null).text(
//           ContentsAdmin.create.concepts.h2
//         );
//         let value = new Input("number", "value", 0).attributes([
//           ["min", 0],
//           ["max", 5],
//         ]);
//         h1 = new HTMLElement("h1", null).inner(
//           ContentsAdmin.create.concepts.h1
//         );
//         h2 = new HTMLElement("h2", null).inner(
//           ContentsAdmin.create.concepts.associates
//         );
//         div = document.createElement("div");

//         //~ Append them
//         this.element.appendChild(h1);
//         fragment.append(lvl, value);

//         //~ For each concept create input with its label
//         if (languages.result[0]) {
//           languages.result.forEach((language) => {
//             let input = new Input("checkbox", language.id, null).element;
//             let label = new Label(language.id, null, language.name).element;

//             //~ Append them to the fragment
//             div.append(input, label);
//           });

//           //~ Return the fragment
//           fragment.append(h2, div);
//           return fragment;
//         } else {
//           h1 = new HTMLElement("h1", null).inner(
//             ContentsAdmin.create.errors.parents
//           );
//           this.element.innerHTML = h1;
//         }
//     }
//   }
// }
