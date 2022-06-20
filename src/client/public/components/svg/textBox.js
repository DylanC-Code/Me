"use-strict";

import Animate from "../../../global/classes/Animate.js";
import { HTMLElement } from "../../../global/classes/HTMLElement.js";
import SVGElement from "../../../global/classes/SVGElement.js";


export default function TextBoxInput() {
  let g = new SVGElement('g').element
  let rect = new SVGElement("rect").attributes([["y", "20%"]])
  let line1 = new SVGElement('line').attributes([["stroke", "white"], ["y1", "20%"], ["y2", "20%"], ["x1", "0%"], ["x2", "0%"]])
  let line2 = new SVGElement('line').attributes([["stroke", "white"], ["y1", "20%"], ["y2", "20%"], ["x1", "100%"], ["x2", "100%"]])
  let line3 = new SVGElement('line').attributes([["stroke", "white"], ["y1", "70%"], ["y2", "70%"], ["x1", "100%"], ["x2", "100%"]])
  let line4 = new SVGElement('line').attributes([["stroke", "white"], ["y1", "70%"], ["y2", "70%"], ["x1", "0"], ["x2", "0"]])

  let text1 = new Animate("x2", "0", "100%", 1.5, 0, "freeze", "text1").element
  let text2 = new Animate("y2", "20%", "70%", 1, "text1.end", "freeze").element
  let text3 = new Animate("x2", "100%", "0", 1.5, 0, "freeze", "text2").element
  let text4 = new Animate("y2", "70%", "20%", 1, "text2.end", "freeze").element
  line1.appendChild(text1)
  line2.appendChild(text2)
  line3.appendChild(text3)
  line4.appendChild(text4)

  let fO = new SVGElement("foreignObject").attributes([["y", "20%"], ["width", "100%"], ["height", "50%"]])
  let input = new HTMLElement("textarea", "text").attributes([["rows", 10], ["cols", 75], ["placeholder", "Write your message ..."]])
  fO.appendChild(input)

  g.append(rect, line1, line2, line3, line4, fO)
  return g
}