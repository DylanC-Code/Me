"use-strict";

import { Modal } from "../components/Modal.js";
import { deleteController } from "./delete.controllers.js";
import { updateControllers } from "./update.controllers.js";

/** Controllers for all events about categories interface
 * @param  { OBJECT } categories Object with all datas about categories
 */
export function categoriesControllers(categories) {
  let updates = document.querySelectorAll(".update");
  let deletes = document.querySelectorAll(".delete");
  let languages = document.querySelectorAll(".languages"); //! For see languages associates
  let section = document.getElementById("subContainer");

  //~ For each delete buttons apply click listener
  deletes.forEach((dlt) => {
    dlt.addEventListener("click", (e) => {
      //~ Create new modal
      let id_category = e.target.parentElement.dataset.category;
      let modal = new Modal("delete", categories[id_category - 1], id_category)
        .display;
      section.appendChild(modal);

      //~ Controllers for delete modal
      deleteController(id_category);
    });
  });

  //~ For each delete buttons apply click listener
  updates.forEach((update) => {
    update.addEventListener("click", (e) => {
      //~ Create new modal
      let id_category = e.target.parentElement.dataset.category;
      let modal = new Modal("update", categories[id_category - 1], id_category)
        .display;
      section.appendChild(modal);

      //~ Controllers for update modal
      updateControllers("categories", id_category);
    });
  });


  document.getElementById("add").addEventListener('click',()=>{

  })

  document.getElementById("next").addEventListener('click',()=>{})
}
