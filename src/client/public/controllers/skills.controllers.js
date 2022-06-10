"use-strict"

import { Request } from "../api/Request.js"

export function skillsControllers() {
  let graph = document.querySelector("#subContainer > svg")

  switch (graph.id) {
    case "spider": return spiderControllers()
    case "curves": return curvesControllers()
    case "bars": return barsControllers()
  }
}

function spiderControllers() {
  let categories = document.querySelectorAll("text")

  categories.forEach(cat => {
    cat.addEventListener("click", async () => {
      let result = await new Request("GET", `/notes/category/${cat.id}`).play
      console.log(result);
    })
  })
}

function curvesControllers() { }
function barsControllers() { }