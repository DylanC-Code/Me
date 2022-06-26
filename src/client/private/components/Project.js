"use-strict"

import HTMLElement from "../../global/classes/HTMLElement.js"
import Input from "../../global/classes/Input.js"
import Modal from "../../global/classes/Modal.js"

export default class Project {
  #data
  #modal
  constructor(data) {
    this.#data = data
    this.#modal = new Modal().element
  }

  get add() {
    let div2 = new HTMLElement("div").element
    let btn1 = new HTMLElement("button").text("Yes")
    let btn2 = new HTMLElement("button").text("No")
    div2.append(btn1, btn2)

    let div = new HTMLElement("div", "update_project").element
    let name = new Input("text", "name").attributes([["placeholder", "Name"]])
    let url = new Input("url", "url").attributes([["placeholder", "URL"]])
    let text = new Input("text", "text").attributes([["placeholder", "Description"]])
    let date = new Input("date", "date").attributes([["placeholder", "Date"]])
    let collaborators = new Input("text", "collabs").attributes([["placeholder", "Collaborators"]])
    div.append(name, url, text, date, collaborators, div2)

    let error = new HTMLElement("p", "error").element
    let h1 = new HTMLElement("h1").text(`Add a project`)
    let image = new Input("file", "file").attributes([["placeholder", "image"]])
    let label = new HTMLElement("label").attributes([["for", "file"]])

    this.#modal.append(error, h1, image, label, div)

    return this.#modal
  }

  get remove() {
    let h1 = new HTMLElement("h1").text(`Are you sure you want to delete ${this.#data.name} project?!`)
    let div = new HTMLElement("div").element
    let btn1 = new HTMLElement("button").text("Yes")
    let btn2 = new HTMLElement("button").text("No")

    div.append(btn1, btn2)
    this.#modal.append(h1, div)

    return this.#modal
  }

  get update() {
    let div2 = new HTMLElement("div").element
    let btn1 = new HTMLElement("button").text("Yes")
    let btn2 = new HTMLElement("button").text("No")
    div2.append(btn1, btn2)

    let div = new HTMLElement("div", "update_project").element
    let name = new Input("text", "name", this.#data.name).element
    let url = new Input("text", "url", this.#data.url).element
    let text = new Input("text", "text", this.#data.text).element
    let image = new Input("file", "file", this.#data.image).element
    let date = new Input("text", "date", this.#data.date).element
    let collaborators = new Input("text", "collabs", this.#data.collaborators).element
    div.append(name, url, text, image, date, collaborators, div2)

    let error = new HTMLElement("p", "error").element
    let h1 = new HTMLElement("h1").text(`Update ${this.#data.name}`)
    this.#modal.append(error, h1, div)

    return this.#modal
  }
}