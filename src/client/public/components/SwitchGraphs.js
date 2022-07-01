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

  let start_d = `M${w_perc.value(5) - 3} ${h_perc.value(85)}L${w_perc.value(5) - 3} ${h_perc.value(85)}L${w_perc.value(5) - 3} ${h_perc.value(85)}Z`
  let final_d = `M${w_perc.value(5) - 3} ${h_perc.value(85)}L${w_perc.value(5)} ${h_perc.value(85) + 5}L${w_perc.value(5) + 3} ${h_perc.value(85)}Z`
  let arrow = new SVGElement("path").attributes([["d", start_d], ["stroke", "white"]])
  let a_anim = new Animate("d", start_d, final_d, 0.5, 1.5, "freeze").element
  arrow.appendChild(a_anim)

  return [line, arrow]
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

  let d = `M${w_perc.value(5) - 3} ${h_perc.value(85)}L${w_perc.value(5)} ${h_perc.value(85) + 5}L${w_perc.value(5) + 3} ${h_perc.value(85)}Z`
  let arrow = new SVGElement("path").attributes([["d", d], ["stroke", "white"]])

  return [line, arrow]
}