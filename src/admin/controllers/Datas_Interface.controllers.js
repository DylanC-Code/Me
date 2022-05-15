"use-strict";

import { Create, Delete, Update } from "../components/Modal.js";
import { Datas_Interface_View } from "../views/Datas_Interface_View.view.js";
import { Modal_Controllers } from "./Modal.controllers.js";

export class Datas_Interface_Controllers {
  /** Controllers for the datas interface view
   * @param  { OBJECT } datas The datas of the about table
   * @param  { STRING } table The table of the content to control
   */
  constructor(datas, table) {
    this.datas = datas;
    this.table = table;
    this.section = document.getElementById("subContainer");
  }

  //^ Getter display the modal
  get display() {
    this.delete();
    this.update();
    this.create();
    this.categories();
  }

  //^ Manage click listener to delete buttons
  delete() {
    let deletes = document.querySelectorAll(".delete");

    //~ For each update buttons apply click listener
    deletes.forEach((dlt) => {
      dlt.addEventListener("click", (e) => {
        let id_click = e.target.parentElement.dataset.category;
        let data;
        this.datas.forEach((d) => (d.id == id_click ? (data = d) : null));

        //~ Create an instance of delete class (extend of modal)
        let modal = new Delete(this.table, data, id_click).modal;
        this.section.appendChild(modal);

        //~ Apply controllers to the modal
        new Modal_Controllers("DELETE", this.table, id_click).active;
      });
    });
  }

  //^ Manage click listener to update buttons
  update() {
    let updates = document.querySelectorAll(".update");

    //~ For each update buttons apply click listener
    updates.forEach((update) => {
      update.addEventListener("click", async (e) => {
        let id_click = e.target.parentElement.dataset.category;
        let data;
        this.datas.forEach((d) => (d.id == id_click ? (data = d) : null));

        //~ Create new modal
        let modal = new Update(this.table, data, id_click);
        await this.section.appendChild(modal.modal);

        //~ Apply controllers to the modal
        new Modal_Controllers("UPDATE", this.table, id_click).active;
      });
    });
  }

  //^ Manage click listener to add button
  create() {
    let add = document.getElementById("add");

    //~ Apply click listener to the button
    add.addEventListener("click", async () => {
      //~ Create modal
      let modal = new Create(this.table);
      await this.section.appendChild(modal.modal);

      //~ Apply controllers to the modal
      new Modal_Controllers("CREATE", this.table).active;
    });
  }

  //^ Apply click listener to tab categories
  categories() {
    let lis = document.querySelectorAll("#container li");

    //~ Create new interface for categories elements on click to button 0
    lis[0].addEventListener(
      "click",
      () => new Datas_Interface_View("categories").display
    );

    //~ Create new interface for languages elements on click to button 1
    lis[1].addEventListener(
      "click",
      () => new Datas_Interface_View("languages").display
    );

    //~ Create new interface for concepts elements on click to button 2
    lis[2].addEventListener(
      "click",
      () => new Datas_Interface_View("concepts").display
    );
  }
}
