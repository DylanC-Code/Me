"use-strict";

import Tools from "../../global/utils/Tools.js";
import Request from "../api/Request.js";
import graphsControllers from "../controllers/graphs.controllers.js";
import { chibrery } from "../../../../node_modules/chibrery/chibrery.js";
import changeGraph from "./SwitchGraphs.js";
import SwitchGraphs from "./SwitchGraphs.js";

async function SpiderGraph() {
  let { result } = await new Request("GET", "/notes").fetch()
  let spider = chibrery.Graph("spider")

  const params = {
    target: "subContainer",
    id: "spider",
    datas: { anim: true, datas: result, },
    multi: true,
    styles: {
      text: { color: "white" },
      note: { stroke: "#FF4B33", fill: "transparent" },
      polygon: { anim: "rotate", stroke: "#38C7C7", fill: "transparent" },
      square: { anim: "synchronous", stroke: "#38C7C7" }
    },
    controllers: graphsControllers
  }

  spider(params)
}

function CurvesGraph(datas) {
  let graph = chibrery.Graph("curves")
  let subContainer = document.getElementById("subContainer")
  Tools.removeChilds(subContainer)

  function getDates() {
    let dates = []

    for (let i = 4; i > 0; i--) {
      let date = new Date()
      date = new Date(date.getFullYear(), date.getMonth() - i)
      date = new Intl.DateTimeFormat("en-EN", { year: "numeric", month: "long" }).format(date)
      dates.push(date)
    }
    return dates
  }

  const params = {
    target: subContainer,
    id: "curves",
    datas,
    body: {
      styles: { stroke: "#38C7C7", fill: "none", titles: "white", texts: "white", ladders: "white", anim: "opacity" },
      ordinate: { title: "Percentages", graduate: [20, 40, 60, 80, 100] },
      abscissa: { title: "Months", graduate: getDates() },
      cartesien: { anim: "synchronous" },
      curves: { anim: "crescendo", color: "random" }
    },
    controllers: graphsControllers
  }

  graph(params)
  SwitchGraphs()
}

function LinesGraph(datas) {
  let lines = chibrery.Graph('lines')
  let subContainer = document.getElementById("subContainer")
  Tools.removeChilds(subContainer)

  const params = {
    target: subContainer,
    datas: datas,
    id: "lines",
    body: {
      styles: { stroke: "#38C7C7", fill: "none", titles: "white", texts: "white", ladders: "white", anim: "opacity" },
      ordinate: { title: "Notes", graduate: [1, 2, 3, 4, 5] },
      abscissa: { title: null, graduate: null },
      cartesien: { anim: "synchronous" },
      lines: { anim: "synchronous", fill: "rgba(255, 75, 51, 0.1)", stroke: "#FF4B33" },
      texts: { position: "oblique", fill: "white" }
    },
    controllers: graphsControllers
  }

  lines(params)
  SwitchGraphs()
}

export { SpiderGraph, CurvesGraph, LinesGraph }