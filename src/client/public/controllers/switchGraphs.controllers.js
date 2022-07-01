"use-strict"

import Request from "../api/Request.js"
import { CurvesGraph, SpiderGraph } from "../components/Graph.js"

export default function switchGraphsController() {
  window.onwheel = null
  window.onwheel = switchGraph

  async function switchGraph(scroll) {
    scroll = scroll.wheelDeltaY > 0
    let graph = document.querySelector('#subContainer > svg')


    if (!graph || !graph.id) return
    if (!scroll && graph.id == 'curves' || !scroll && graph.id == 'lines') {
      await SpiderGraph()
    }
    if (scroll && graph.id && graph.id === 'lines') {
      let id = sessionStorage.getItem("category")
      let { result } = await new Request("GET", `/notes/category/${id}`).play
      CurvesGraph(result)
    }
  }
}
