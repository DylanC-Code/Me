"use-strict"

import Request from "../api/Request.js"
import { CurvesGraph, SpiderGraph } from "../components/Graph.js"

export default function switchGraphsController() {
  async function switchGraph(scroll) {
    scroll = scroll.wheelDeltaY > 0
    let graph = document.querySelector('#subContainer > svg')

    if (!graph || !graph.id) return
    if (!scroll && graph.id == 'curves' || !scroll && graph.id == 'lines') {
      window.removeEventListener('wheel', switchGraph)
      SpiderGraph()
    }
    if (scroll && graph.id && graph.id === 'lines') {
      window.removeEventListener('wheel', switchGraph)
      let id = document.querySelector('#switch > text').id
      let { result } = await new Request("GET", `/notes/category/${id}`).play
      CurvesGraph(result, id)
    }

  }

  window.addEventListener('wheel', switchGraph)
}
