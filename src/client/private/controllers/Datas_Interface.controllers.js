"use-strict";

import { Datas_Interface_View } from "../views/Datas_Interface.view.js";
import { chooseControllers } from "../tools/chooseController.js";
import { Create } from "../components/Create.js";
import { Delete } from "../components/Delete.js";
import { Update } from "../components/Update.js";
import { Request } from "../../public/build/api/Request.js";
import { Datas } from "../components/-Datas.js";
import { mainDatasInterface } from "../components/mainDatasInterface.js";

export class Datas_Interface_Controllers {
  /** Controllers for the datas interface view
   * @param  { STRING } table The table of the content to control
   * @param  { OBJECT } datas The datas of the about table
   */
  constructor(table, datas) {
    this.table = table;
    this._datas = datas;
    this.section = document.getElementById("subContainer");
  }

  //^ Getter display the modal
  get display() {
    this.datas();
  }

  async datas() {
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
        this._datas.forEach((d) => (d.id == id_click ? (data = d) : null));

        //~ Create an instance of delete class (extend of modal)
        let modal = new Delete(this.table, data).create();
        this.section.append(modal);

        //~ Apply controllers to the modal
        chooseControllers("DELETE", this.table, id_click);
      });
    });
  }

  //^ Manage click listener to update buttons
  async update() {
    let updates = document.querySelectorAll(".update");

    //~ For each update buttons apply click listener
    updates.forEach((update) => {
      update.addEventListener("click", async (e) => {
        let id_click = e.target.parentElement.dataset.category;
        let data;
        this._datas.forEach((d) => (d.id == id_click ? (data = d) : null));

        //~ Create new modal
        let modal = await new Update(this.table, data, id_click).create();
        this.section.append(modal);

        //~ Apply controllers to the modal
        chooseControllers("UPDATE", this.table, id_click);
      });
    });
  }

  //^ Manage click listener to add button
  create() {
    let add = document.getElementById("add");

    //~ Apply click listener to the button
    add.addEventListener("click", async () => {
      //~ Create modal
      let modal = await new Create(this.table).create();
      this.section.appendChild(modal);

      //~ Apply controllers to the modal
      chooseControllers("CREATE", this.table);
    });
  }

  // next() {
  //   let next = document.getElementById("next");
  //   if (!next) return;
  //   next.addEventListener("click", () => {
  //     let last =
  //       document.querySelectorAll("[data-category]")[3].dataset.category;

  //     let newDatas = this._datas.filter((d) => d.id > last);
  //     mainDatasInterface(this.table, newDatas);
  //   });
  // }

  // previous() {
  //   let previous = document.getElementById("previous");
  //   if (!previous) return;
  //   previous.addEventListener("click", () => {
  //     let first = document.querySelector("[data-category]").dataset.category;

  //     function ideal(d) {
  //       let e = parseInt(d.id);
  //       if (e >= first) return;
  //       if (e < first - 4) return;
  //       return d;
  //     }

  //     let newDatas = this._datas.filter(ideal);

  //     // new Datas_Interface_View(this.table, newDatas).create();
  //     new Datas(this.table, newDatas).create();
  //   });
  // }

  //^ Apply click listener to tab categories
  categories() {
    let lis = document.querySelectorAll("#container li");

    //~ Create new interface for categories elements on click to button 0
    lis[0].addEventListener("click", () =>
      new Datas_Interface_View("categories").create()
    );

    //~ Create new interface for languages elements on click to button 1
    lis[1].addEventListener("click", () =>
      new Datas_Interface_View("languages").create()
    );

    //~ Create new interface for concepts elements on click to button 2
    lis[2].addEventListener("click", () =>
      new Datas_Interface_View("concepts").create()
    );
  }
}
