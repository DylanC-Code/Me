"use-strict"

import Project from "../components/Project.js";
import ProjectsModalsControllers from "./projectsModal.controllers.js";

export default class MainProjectsInterfaceControllers {
  #datas
  constructor(datas) {
    this.#datas = datas
  }

  get play() {
    this.#create()
    this.#update()
    this.#remove()
  }

  #create() {
    add.addEventListener("click", async () => {
      // Create modal
      // let modal = addProject()
      let modal = new Project().add
      document.querySelector("#container section").appendChild(modal);

      // Apply controllers to the modal
      this.#chooseControllers("CREATE")
    });
  }


  #update() {
    let updates = document.querySelectorAll(".update");

    // For each update buttons apply click listener
    updates.forEach((update) => {
      update.addEventListener("click", async (e) => {
        let id_click = e.target.parentElement.dataset.project;
        let data;
        this.#datas.forEach((d) => (d.id == id_click ? (data = d) : null));

        // Create new modal
        // let modal = updateProject(data)
        let modal = new Project(data).update
        document.querySelector("#container section").append(modal);

        // Apply controllers to the modal
        this.#chooseControllers("UPDATE", id_click)
      });
    });
  }

  #remove() {
    let deletes = document.querySelectorAll(".delete");

    // For each update buttons apply click listener
    deletes.forEach((dlt) => {
      dlt.addEventListener("click", (e) => {
        let id_click = e.target.parentElement.dataset.project;
        let data;

        this.#datas.forEach((d) => (d.id == id_click ? (data = d) : null));

        // Create an instance of delete class (extend of modal)
        // let modal = removeProject(data)
        let modal = new Project(data).remove
        document.querySelector("#container section").append(modal);
        this.#chooseControllers("DELETE", id_click)
      });
    });
  }

  #chooseControllers(method, primaryKey) {
    let buttons = document.querySelectorAll("#modal button");
    let modal = document.getElementById("modal");

    // Apply click listener for left button of the each modal
    buttons[0].addEventListener("click", async () => {
      // Verify the method about the modal
      if (method == "CREATE") new ProjectsModalsControllers.create().active
      if (method == "UPDATE") new ProjectsModalsControllers.update(primaryKey).active
      if (method == "DELETE") ProjectsModalsControllers.delete(primaryKey)
    });

    // Apply click listener for close the modal
    buttons[1].addEventListener("click", () => modal.remove());
  }
}
