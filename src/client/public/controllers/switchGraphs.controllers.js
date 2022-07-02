"use-strict"

import Request from "../api/Request.js"
import { CurvesGraph, SpiderGraph } from "../components/Graph.js"

export default function switchGraphsController() {
  window.onwheel = null
  window.onwheel = switchGraphOnScroll
  switchGraphOnClick()

  async function switchGraphOnScroll(scroll) {
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

export function switchGraphOnClick() {
  let graph = document.querySelector('#subContainer > svg')

  if (!graph || !graph.id) return
  if (graph.id == 'curves' || graph.id == 'lines')
    document.querySelector('#switch > text:nth-of-type(2)').addEventListener('click', () => SpiderGraph())

  if (graph.id === 'lines')
    document.querySelector('#switch > text:nth-of-type(1)').addEventListener('click', async () => {
      let id = sessionStorage.getItem("category")
      let { result } = await new Request("GET", `/notes/category/${id}`).play
      CurvesGraph(result)
    })

}
