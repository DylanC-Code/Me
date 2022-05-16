"use-strict";

import { Create } from "../components/Create.js";
import { Delete } from "../components/Delete.js";
import { Update } from "../components/Update.js";
import { modalControllers } from "./Modal.controllers.js";

export async function datasInterfaceControllers(datas, table) {
  let updates = document.querySelectorAll(".update");
  let deletes = document.querySelectorAll(".delete");
  let add = document.getElementById("add");
  let section = document.getElementById("subContainer");

  // ^ Manage click listener to delete buttons
  //~ For each update buttons apply click listener
  deletes.forEach((dlt) => {
    dlt.addEventListener("click", (e) => {
      let id_click = e.target.parentElement.dataset.category;
      let data;
      datas.forEach((d) => (d.id == id_click ? (data = d) : null));

      //~ Create an instance of delete class (extend of modal)
      let modal = new Delete(table, data, id_click).modal;
      section.appendChild(modal);

      //~ Apply controllers to the modal
      modalControllers("DELETE", table, id_click);
    });
  });

  //^ Manage click listener to update buttons

  //~ For each update buttons apply click listener
  updates.forEach((update) => {
    update.addEventListener("click", async (e) => {
      let id_click = e.target.parentElement.dataset.category;
      let data;
      datas.forEach((d) => (d.id == id_click ? (data = d) : null));

      //~ Create new modal
      let modal = new Update(table, data, id_click);
      await section.appendChild(modal.modal);

      //~ Apply controllers to the modal
      modalControllers("UPDATE", table, id_click);
    });
  });

  //~ Apply click listener to the button
  add.addEventListener("click", async () => {
    //~ Create modal
    let modal = new Create(table);
    await section.append(modal.modal);

    //~ Apply controllers to the modal
    modalControllers("CREATE", table);
  });
}
