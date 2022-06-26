"use-strict";

import Data from "../components/Data.js";
import CreateControllers from "./Create.controllers.js";
import DeleteControllers from "./Delete.controllers.js";
import UpdateControllers from "./Update.controllers.js";

// !remove
// // Control many events for the main of the data interface view
// export function mainDatasInterfaceControllers(table, datas) {
//   create(table);
//   update(table, datas);
//   remove(table, datas);
// }

// //^ Manage click listener to delete buttons
// function remove(table, datas) {
//   let deletes = document.querySelectorAll(".delete");

//   // For each update buttons apply click listener
//   deletes.forEach((dlt) => {
//     dlt.addEventListener("click", (e) => {
//       let id_click = e.target.parentElement.dataset.category;
//       let data;
//       datas.forEach((d) => (d.id == id_click ? (data = d) : null));

//       // Create an instance of delete class (extend of modal)
//       let modal = new Delete(table, data).create();
//       document.querySelector("#subContainer section").append(modal);

//       // Apply controllers to the modal
//       chooseControllers("DELETE", table, id_click);
//     });
//   });
// }

// //^ Manage click listener to update buttons
// async function update(table, datas) {
//   let updates = document.querySelectorAll(".update");

//   // For each update buttons apply click listener
//   updates.forEach((update) => {
//     update.addEventListener("click", async (e) => {
//       let id_click = e.target.parentElement.dataset.category;
//       let data;
//       datas.forEach((d) => (d.id == id_click ? (data = d) : null));

//       // Create new modal
//       let modal = await new Update(table, data, id_click).create();
//       document.querySelector("#subContainer section").append(modal);

//       // Apply controllers to the modal
//       chooseControllers("UPDATE", table, id_click);
//     });
//   });
// }

// //^ Manage click listener to add button
// function create(table) {
//   let add = document.getElementById("add");

//   // Apply click listener to the button
//   add.addEventListener("click", async () => {
//     // Create modal
//     let modal = await new Create(table).create();
//     document.querySelector("#subContainer section").appendChild(modal);

//     // Apply controllers to the modal
//     chooseControllers("CREATE", table);
//   });
// }

// //^ Manage the modal controllers appropriate
// export function chooseControllers(method, table, primaryKey) {
//   let buttons = document.querySelectorAll("#modal button");
//   let modal = document.getElementById("modal");

//   // Apply click listener for left button of the each modal
//   buttons[0].addEventListener("click", async () => {
//     // Verify the method about the modal
//     if (method == "CREATE") new CreateControllers(table).active;
//     if (method == "UPDATE") new UpdateControllers(table, primaryKey).active;
//     if (method == "DELETE") new DeleteControllers(table, primaryKey).request();
//   });

//   // Apply click listener for close the modal
//   buttons[1].addEventListener("click", () => modal.remove());
// }

export default class MainDatasInterfaceControllers {
  #table;
  #datas;
  constructor(table, datas) {
    this.#table = table;
    this.#datas = datas
  }

  get play() {
    this.#create()
    this.#remove()
    this.#update()
  }

  //* Add Click Listener On Add Button
  #create() {
    // let add = document.getElementById("add"); //!remove

    add.addEventListener("click", async () => {
      // Create modal
      // let modal = await new Create(this.#table).create();
      let modal = await new Data.Create(this.#table).display
      document.querySelector("#subContainer section").appendChild(modal);

      // Apply controllers to the modal
      this.#chooseControllers("CREATE");
    });
  }

  //* Add Click Listener On All Remove Buttons
  #remove() {
    let deletes = document.querySelectorAll(".delete");

    // For each update buttons apply click listener
    deletes.forEach((dlt) => {
      dlt.addEventListener("click", (e) => {
        let id_click = e.target.parentElement.dataset.category;
        let data;
        this.#datas.forEach((d) => (d.id == id_click ? (data = d) : null));

        // Create an instance of delete class (extend of modal)
        // let modal = new Delete(this.#table, data).create();
        let modal = new Data.Remove(this.#table, data).display
        document.querySelector("#subContainer section").append(modal);

        // Apply controllers to the modal
        this.#chooseControllers("DELETE", id_click);
      });
    });
  }

  //* Add Click Listener On All Update Buttons
  #update() {
    let updates = document.querySelectorAll(".update");

    // For each update buttons apply click listener
    updates.forEach((update) => {
      update.addEventListener("click", async (e) => {
        let id_click = e.target.parentElement.dataset.category;
        let data;
        this.#datas.forEach((d) => (d.id == id_click ? (data = d) : null));

        // Create new modal
        // let modal = await new Update(this.#table, data, id_click).create();
        let modal = await new Data.Update(this.#table, data, id_click).display
        document.querySelector("#subContainer section").append(modal);

        // Apply controllers to the modal
        this.#chooseControllers("UPDATE", id_click);
      });
    });
  }

  //* The Controllers For Choose The Appropriate Controllers
  #chooseControllers(method, primaryKey) {
    let buttons = document.querySelectorAll("#modal button");
    let modal = document.getElementById("modal");

    // Apply click listener for left button of the each modal
    buttons[0].addEventListener("click", async () => {
      // Verify the method about the modal
      if (method == "CREATE") new CreateControllers(this.#table).active;
      if (method == "UPDATE") new UpdateControllers(this.#table, primaryKey).active;
      if (method == "DELETE") new DeleteControllers(this.#table, primaryKey).request();
    });

    // Apply click listener for close the modal
    buttons[1].addEventListener("click", () => modal.remove());
  }
}