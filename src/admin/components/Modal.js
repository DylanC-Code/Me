"use-strict";

export class Modal {
  /** Create type of modal for update or delete an element
   * @param  { STRING } method The method as choice
   * @param  { OBJECT } data The datas of the element
   * @param  { INTEGER } id The id of the element
   */
  constructor(method, data, id) {
    this.method = method;
    this.data = data;
    this.id = id;
  }

  get display() {
    return this.modal();
  }

  delete() {
    return `
      <h1>Are you sure you want to <mark class="color_red">delete</mark><br><mark class="text_blue">${this.data.name}</mark> category ?</h1>
      <div>
        <button id="yes">Yes</button>
        <button id="no">No</button>
      </div>
    `;
  }

  update() {
    return `
      <h1>Update <mark class="text_blue">${this.data.name}</mark></h1>
      <input type="text" value="${this.data.name}" id="name"/>
      <div>
        <button id="yes">Update</button>
        <button id="no">Cancel</button>
      </div>
    `;
  }

  languages() {}

  modal() {
    let method;
    switch (this.method) {
      case "delete":
        method = this.delete();
        break;
      case "update":
        method = this.update();
        break;
      case "languages":
        method = this.languages();
        break;
      default:
        throw console.error("Veuillez precisez la méthode !");
    }

    let modal = document.createElement("div");
    modal.setAttribute("id", "modal");
    modal.innerHTML = method;

    return modal;
  }
}
