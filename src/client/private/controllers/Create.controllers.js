// "use-strict";

// import checkName from "../tools/checkName.js";
// import Validator from "../../global/utils/Validator.js";
// import Request from "../../public/api/Request.js";
// import DatasInterfaceView from "../views/DatasInterface.view.js";

// export default class CreateControllers extends ModalControllers {
//   /**
//    * Create controllers for check the inputs in the create modal
//    * @param  { STRING } table The name of the table
//    */
//   constructor(table) {
//     super(table);
//     this.req = new Request("POST", `/${this.table}/create`);
//   }

//   //^ When its table categories
//   categories() {
//     //~ If checkName return true send the request
//     if (!checkName()) return;

//     this.body.name = this.name.value;
//     this.req.body = this.body;
//     this.request();
//   }

//   //^ If its table languages
//   async languages() {
//     //~ Control the differents inputs and send error
//     checkName();
//     if (!this.file.files)
//       return (this.err.textContent = "Please select a Logo");
//     else if (!this.cat)
//       return (this.err.textContent = "Please select an associate category");

//     //~ Create new Form Data and append it the elements
//     this.body = new FormData();
//     this.body.set("name", this.name.value);
//     this.body.set("id_category", this.cat.id);
//     this.body.set("image", this.file.files[0]);

//     //~ Send request
//     let req = await fetch("http://127.0.0.1:4000/api/languages/create", {
//       method: "POST",
//       body: this.body,
//     }).then((res) => res.json());

//     //~ If an error is return by the server display it
//     if (req.error) return (this.err.textContent = req.result);
//     document.getElementById("modal").remove();
//     new DatasInterfaceView(this.table).create();
//   }

//   //^ When its table concepts
//   concepts() {
//     //~ Control the validity of the input number and get all id_language
//     let id_languages = this._languages.map((language) => language.id);
//     let error = new Validator(this.note).numberValue(0, 5);

//     //~ Control the differents inputs and send error
//     checkName();
//     if (error) return (this.err.textContent = error);
//     else if (!id_languages[0])
//       return (this.err.textContent = "Please chose minimum one language !");

//     //~ Make the body
//     this.body = {
//       name: this.name.value,
//       value: this.note.value,
//       languages: id_languages,
//     };

//     //~ Send the request
//     this.req.body = this.body;
//     this.request();
//   }
// }
