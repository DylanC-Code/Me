"use-strict"

import { chibrery } from "../../../../node_modules/chibrery/chibrery.js";
import { removeChild } from "../../global/utils/removeChilds.js";
import { Request } from "../api/Request.js"

function skillsControllers(remover) {
  let graph = document.querySelector("#subContainer > svg")

  if (remover) window.removeEventListener("resize", remover)

  switch (graph.id) {
    case "spider": return spiderControllers()
    case "curves": return curvesControllers()
    case "bars": return barsControllers()
  }
}

// function spiderControllers() {
//   let categories = document.querySelectorAll("text")

//   categories.forEach(cat => {
//     cat.addEventListener("click", async () => {
//       let { result } = await new Request("GET", `/notes/category/${cat.id}`).play
//       createCurvesGraph(result)
//     })
//   })
// }

function barsControllers() { }

function createCurvesGraph(result) {
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

  let subContainer = document.getElementById("subContainer")
  removeChild(subContainer)

  const params = {
    target: subContainer,
    id: "curves",
    datas: result,
    body: {
      styles: { stroke: "#38C7C7", fill: "none", titles: "white", texts: "white", ladders: "white", anim: "opacity" },
      ordinate: { title: "Percentages", graduate: [20, 40, 60, 80, 100] },
      abscissa: { title: "Months", graduate: getDates() },
      cartesien: { anim: "synchronous" },
      curves: { anim: "crescendo", color: "random" }
    }
  }


  let graph = chibrery.Graph("curves")
  graph(params)

  function curvesControllers() {
    let skills = document.querySelectorAll("#curves > text")

    skills.forEach(v => {
      v.addEventListener("click", async () => {
        let { result } = await new Request("GET", `/notes/language/${v.id}`).play
        createLinesGraph(result)
      })
    })
  }

  curvesControllers()
}

// function createLinesGraph(datas) {
//   let subContainer = document.getElementById("subContainer")
//   removeChild(subContainer)
//   const params = {
//     target: subContainer,
//     datas: datas,
//     body: {
//       styles: { stroke: "#38C7C7", fill: "none", titles: "white", texts: "white", ladders: "white", anim: "opacity" },
//       ordinate: { title: "Notes", graduate: [1, 2, 3, 4, 5] },
//       abscissa: { title: null, graduate: null },
//       cartesien: { anim: "synchronous" },
//       lines: { anim: "synchronous", fill: "rgba(255, 75, 51, 0.1)", stroke: "#FF4B33" },
//       texts: { position: "oblique", fill: "white" }
//     }
//   }

//   let lines = chibrery.Graph('lines')
//   lines(params)
// }