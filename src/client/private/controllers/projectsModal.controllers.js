"use-strict"

import Request from "../../public/api/Request.js";
import { checkName } from "../tools/checkName.js";

class ModalProjectsControllers {
  /**Parent class for differents projects modal
   */
  constructor() {
    this.name = document.getElementById("name");
    this.err = document.getElementById("error");
    this.file = document.getElementById("file");
    this.url = document.getElementById("url")
    this.text = document.getElementById("text")
    this.date = document.getElementById("date")
    this.collabs = document.getElementById("collabs")
    this.err ? (this.err.textContent = "") : null;
    this.body = {};
    this.req = null;
  }
}

/**
 * Delete controllers for project modal
 * @param  {} primaryKey
 */
async function deleteControllers(primaryKey) {
  let req = await new Request("DELETE", `/projects/delete/${primaryKey}`).play
  document.getElementById('modal').remove()
}

class updateProjectControllers extends ModalProjectsControllers {
  constructor(primaryKey) {
    super()
    this.body.pk = primaryKey
  }

  get active() {
    this.control()
  }

  async control() {
    // Control each inputs and return error
    // If input is ok push the value on the body object
    if (checkName()) this.body.name = this.name.value
    else return

    if (!this.url.value) return this.url.setAttribute("placeholder", "The url input is empty")
    else {
      this.body.url = this.url.value
      this.url.setAttribute("placeholder", "")
    }
    if (!this.text.value) return this.text.setAttribute("placeholder", "The text input is empty")
    else {
      this.body.text = this.text.value
      this.text.setAttribute("placeholder", "")
    }
    if (!this.date.value) return this.date.setAttribute("placeholder", "The date input is empty")
    else {
      this.body.date = this.date.value
      this.date.setAttribute("placeholder", "")
    }
    if (!this.collabs.value) this.collabs.setAttribute("placeholder", "The collabs input is empty")
    else {
      this.body.collabs = this.collabs.value
      this.collabs.setAttribute("placeholder", "")
    }

    // Request for update project
    // If error is return display it to the client
    let error = await new Request("PUT", `/projects/update`, this.body).play
    if (error.result) this.err.value = error.result
  }
}

class createProjectControllers extends ModalProjectsControllers {
  constructor() {
    super()
  }

  get active() {
    this.control()
  }

  async control() {
    this.body = new FormData();
    // Control each inputs and return error
    // If input is ok push the value on the body object
    if (checkName()) this.body.set("name", this.name.value)
    else return

    if (!this.url.value) return this.url.setAttribute("placeholder", "The url input is empty")
    else {
      this.body.set("url", this.url.value);
      this.url.setAttribute("placeholder", "")
    }
    if (!this.text.value) return this.text.setAttribute("placeholder", "The text input is empty")
    else {
      this.body.set("text", this.text.value);
      this.text.setAttribute("placeholder", "")
    }
    if (!this.date.value) return this.date.setAttribute("placeholder", "The date input is empty")
    else {
      this.body.set("date", this.date.value);
      this.date.setAttribute("placeholder", "")
    }
    if (!this.collabs.value) this.collabs.setAttribute("placeholder", "The collabs input is empty")
    else {
      this.body.set("collabs", this.collabs.value);
      this.collabs.setAttribute("placeholder", "")
    }
    if (this.file.files[0]) this.body.set("image", this.file.files[0])

    //~ Send request
    let error = await fetch("http://127.0.0.1:4000/api/projects/create", {
      method: "POST",
      body: this.body,
    }).then((res) => res.json());
    // Request for add project
    // If error is return display it to the client
    if (error.result) this.err.value = error.result
  }
}

export { deleteControllers, updateProjectControllers, createProjectControllers }