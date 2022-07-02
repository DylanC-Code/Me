"use-strict"

import Animate from "../../global/classes/Animate.js"
import SVGElement from "../../global/classes/SVGElement.js"
import Tools from "../../global/utils/Tools.js"

export default function SwitchGraphs() {
  let graph = document.querySelector("#subContainer svg")
  let line_arrow = lineArrow(graph)
  let texts = textsCategories(graph)
  let scrolls = textsScroll(graph)
  let g = new SVGElement("g", "switch").element

  g.append(...line_arrow, ...texts, ...scrolls)

  graph.appendChild(g)
}

function lineArrow(graph) {
  let w_perc = new Tools.Percentage(graph.clientWidth)
  let h_perc = new Tools.Percentage(graph.clientHeight)
  let line = new SVGElement("line").attributes([["x1", "5%"], ["x2", "5%"], ["y1", "15%"], ["y2", "15%"], ["stroke", "white"]])
  let l_anim = new Animate("y2", "15%", "85%", 1, 0.5, "freeze").element
  line.appendChild(l_anim)

  let start_dt = `M${w_perc.value(5) - 3} ${h_perc.value(15)}L${w_perc.value(5) - 3} ${h_perc.value(15)}L${w_perc.value(5) - 3} ${h_perc.value(15)}Z`
  let final_dt = `M${w_perc.value(5) - 3} ${h_perc.value(15)}L${w_perc.value(5)} ${h_perc.value(15) - 5}L${w_perc.value(5) + 3} ${h_perc.value(15)}Z`
  let arrow_t = new SVGElement("path").attributes([["d", start_dt], ["stroke", "white"]])
  let at_anim = new Animate("d", start_dt, final_dt, 0.5, 0, "freeze").element
  arrow_t.appendChild(at_anim)

  let start_db = `M${w_perc.value(5) - 3} ${h_perc.value(85)}L${w_perc.value(5) - 3} ${h_perc.value(85)}L${w_perc.value(5) - 3} ${h_perc.value(85)}Z`
  let final_db = `M${w_perc.value(5) - 3} ${h_perc.value(85)}L${w_perc.value(5)} ${h_perc.value(85) + 5}L${w_perc.value(5) + 3} ${h_perc.value(85)}Z`
  let arrow_b = new SVGElement("path").attributes([["d", start_db], ["stroke", "white"]])
  let ab_anim = new Animate("d", start_db, final_db, 0.5, 1.5, "freeze").element
  arrow_b.appendChild(ab_anim)

  if (graph.id == 'curves') return [line, arrow_b]
  if (graph.id == 'lines') return [line, arrow_b, arrow_t]
}

function textsCategories(graph) {
  let id_category = sessionStorage.getItem("category")

  let w_perc = new Tools.Percentage(graph.clientWidth)
  let h_perc = new Tools.Percentage(graph.clientHeight)

  let languages = new SVGElement("text", id_category).attributes([["x", "4%"], ["y", "25%"], ["text-anchor", "middle"], ["transform", `rotate(-90,${w_perc.value(4)} ,${h_perc.value(25)})`]])
  languages.textContent = "Languages"

  let categories = new SVGElement("text").attributes([["x", "4%"], ["y", "75%"], ["text-anchor", "middle"], ["transform", `rotate(-90 ,${w_perc.value(4)}, ${h_perc.value(75)})`]])
  categories.textContent = "Categories"
  return [languages, categories]
}

function textsScroll(graph) {
  let w_perc = new Tools.Percentage(graph.clientWidth)
  let h_perc = new Tools.Percentage(graph.clientHeight)

  let scrollDown = new SVGElement("text", "down").attributes([["x", "7%"], ["y", "75%"], ["text-anchor", "middle"], ["transform", `rotate(-90,${w_perc.value(7)}, ${h_perc.value(75)} )`]])
  scrollDown.textContent = "Scroll down"

  let scrollUp = new SVGElement("text", "up").attributes([["x", "7%"], ["y", "25%"], ["text-anchor", "middle"], ["transform", `rotate(-90,${w_perc.value(7)}, ${h_perc.value(25)} )`]])
  scrollUp.textContent = "Scroll up"

  if (graph.id == "curves") return [scrollDown]
  else if (graph.id == "lines") return [scrollDown, scrollUp]
}

export function switchGraphResize() {
  let graph = document.querySelector("#subContainer svg")
  let line_arrow = lineArrowResize(graph)
  let texts = textsCategories(graph)
  let scrolls = textsScroll(graph)
  let g = new SVGElement("g", "switch").element

  g.append(...line_arrow, ...texts, ...scrolls)

  graph.appendChild(g)
}

function lineArrowResize(graph) {
  let w_perc = new Tools.Percentage(graph.clientWidth)
  let h_perc = new Tools.Percentage(graph.clientHeight)

  let line = new SVGElement("line").attributes([["x1", "5%"], ["x2", "5%"], ["y1", "15%"], ["y2", "85%"], ["stroke", "white"]])

  let dt = `M${w_perc.value(5) - 3} ${h_perc.value(15)}L${w_perc.value(5)} ${h_perc.value(15) - 5}L${w_perc.value(5) + 3} ${h_perc.value(15)}Z`
  let arrow_t = new SVGElement("path").attributes([["d", dt], ["stroke", "white"]])

  let db = `M${w_perc.value(5) - 3} ${h_perc.value(85)}L${w_perc.value(5)} ${h_perc.value(85) + 5}L${w_perc.value(5) + 3} ${h_perc.value(85)}Z`
  let arrow_b = new SVGElement("path").attributes([["d", db], ["stroke", "white"]])

  if (graph.id == 'curves') return [line, arrow_b]
  if (graph.id == 'lines') return [line, arrow_b, arrow_t]
}