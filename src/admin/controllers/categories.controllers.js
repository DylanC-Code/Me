"use-strict";

import { Modal } from "../components/Modal.js";
import { Delete, Update } from "../components/Modale.js";
import { deleteController } from "./delete.controllers.js";
import { updateControllers } from "./update.controllers.js";

/** Controllers for all events about categories interface
 * @param  { OBJECT } categories Object with all datas about categories
 */
export function interfaceDatasControllers(categories) {
  let updates = document.querySelectorAll(".update");
  let deletes = document.querySelectorAll(".delete");
  let languages = document.querySelectorAll(".languages"); //! For see languages associates
  let section = document.getElementById("subContainer");

  //~ For each delete buttons apply click listener
  deletes.forEach((dlt) => {
    dlt.addEventListener("click", async (e) => {
      //~ Create new modal
      let id_category = e.target.parentElement.dataset.category;

      //~ Create an instance of delete class (extend of modal)
      let modal = new Delete(
        "categories",
        categories[id_category - 1],
        id_category
      ).modal;
      section.appendChild(modal);

      //~ Controllers for delete modal
      deleteController(id_category);
    });
  });

  //~ For each update buttons apply click listener
  updates.forEach((update) => {
    update.addEventListener("click", (e) => {
      //~ Create new modal
      let id_category = e.target.parentElement.dataset.category;

      let modal = new Update(
        "categories",
        categories[id_category - 1],
        id_category
      ).modal;
      section.append(modal);

      //~ Controllers for update modal
      updateControllers("categories", id_category);
    });
  });
  // new Modal("categories", "CREATE").display;

  document.getElementById("add").addEventListener("click", async () => {
    let modal = await new Modal("languages", "CREATE").display;
    section.append(modal);
  });

  // document.getElementById("next").addEventListener("click", () => {});
}
