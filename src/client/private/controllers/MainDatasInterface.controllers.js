"use-strict";

import Datas from "../components/Datas.js";
import DatasControllers from "./Datas.controllers.js";

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
    add.addEventListener("click", async () => {
      // Create modal
      let modal = await new Datas.Create(this.#table).display
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
        let modal = new Datas.Remove(this.#table, data).display
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
        let modal = await new Datas.Update(this.#table, data, id_click).display
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
      if (method == "CREATE") new DatasControllers.Create(this.#table).active;
      if (method == "UPDATE") new DatasControllers.Update(this.#table, primaryKey).active;
      if (method == "DELETE") new DatasControllers.Remove(this.#table, primaryKey).request();
    });

    // Apply click listener for close the modal
    buttons[1].addEventListener("click", () => modal.remove());
  }
}