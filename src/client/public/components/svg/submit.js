"use-strict";

import Animate from "../../../global/classes/Animate.js";
import { HTMLElement } from "../../../global/classes/HTMLElement.js";
import { SVGElement } from "../../../global/classes/SVGElement.js";

export default function SubmitInput() {
  let g = new SVGElement("g").element
  let rect = new SVGElement("rect").attributes([["x", "33%"], ["y", "80%"], ["height", "10%"], ["width", "35%"], ["fill", "#FF4B33"]])
  let line1 = new SVGElement('line').attributes([["stroke", "white"], ["y1", "80%"], ["y2", "80%"], ["x1", "33%"], ["x2", "33%"]])
  let line2 = new SVGElement('line').attributes([["stroke", "white"], ["y1", "90%"], ["y2", "90%"], ["x1", "33%"], ["x2", "33%"]])
  let line3 = new SVGElement('line').attributes([["stroke", "white"], ["y1", "90%"], ["y2", "90%"], ["x1", "68%"], ["x2", "68%"]])
  let line4 = new SVGElement('line').attributes([["stroke", "white"], ["y1", "80%"], ["y2", "80%"], ["x1", "68%"], ["x2", "68%"]])

  let submit1 = new Animate("x2", "33%", "68%", 1.3, "0", "freeze").element
  let submit2 = new Animate("y2", "90%", "80%", 0.5, 1.3, "freeze").element
  let submit3 = new Animate("x2", "68%", "33%", 1.3, "0", "freeze").element
  let submit4 = new Animate("y2", "80%", "90%", 0.5, 1.3, "freeze").element

  line1.appendChild(submit1)
  line2.appendChild(submit2)
  line3.appendChild(submit3)
  line4.appendChild(submit4)

  let fO = new SVGElement("foreignObject").attributes([["x", "33%"], ["y", "80%"], ["width", "35%"], ["height", "45px"], ["maxlength", "500"]])
  let input = new HTMLElement("button", "submit").text("Submit")
  fO.appendChild(input)

  g.append(rect, line1, line2, line3, line4, fO)
  return g
}