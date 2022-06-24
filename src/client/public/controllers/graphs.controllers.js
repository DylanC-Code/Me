"use-strict"

import Request from "../api/Request.js"
import { CurvesGraph, LinesGraph } from "../components/Graph.js"

export default function graphsControllers() {
  let graph = document.querySelector("#subContainer > svg")

  if (!graph) return
  switch (graph.id) {
    case "spider": return spiderControllers()
    case "curves": return curvesControllers()
    case "lines": return
    default: return
  }
}

function spiderControllers() {
  let categories = document.querySelectorAll("text")

  categories.forEach(cat => {
    cat.addEventListener("click", async () => {
      let { result } = await new Request("GET", `/notes/category/${cat.id}`).play
      CurvesGraph(result)
    })
  })
}

function curvesControllers() {
  let skills = document.querySelectorAll("#curves > text")

  skills.forEach(v => {
    v.addEventListener("click", async () => {
      let { result } = await new Request("GET", `/notes/language/${v.id}`).play
      LinesGraph(result)
    })
  })
}