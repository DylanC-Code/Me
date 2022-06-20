"use-strict";

import SVGElement from "../../../global/classes/SVGElement.js";
import { Input } from "../../../global/classes/Input.js";
import Animate from "../../../global/classes/Animate.js";

export default function EmailInput() {
  let g = new SVGElement('g').element
  let rect = new SVGElement("rect").element
  let line1 = new SVGElement('line').attributes([["stroke", "white"]])
  let line2 = new SVGElement('line').attributes([["stroke", "white"], ["y1", "45"], ["y2", "45"]])
  let line3 = new SVGElement('line').attributes([["stroke", "white"], ["x1", "55%"], ["x2", "55%"], ["y1", "45"], ["y2", "45"]])
  let line4 = new SVGElement('line').attributes([["stroke", "white"], ["x1", "55%"], ["x2", "55%"],])

  let email1 = new Animate("y2", 0, 45, 0.5, 0, "freeze", "email1").element
  let email2 = new Animate("x2", 0, "55%", 2, "email1.end", "freeze").element
  let email3 = new Animate("y2", 45, "0", 0.5, 0, "freeze", "email2").element
  let email4 = new Animate("x2", "55%", "0", 2, "email2.end", "freeze").element
  line1.appendChild(email1)
  line2.appendChild(email2)
  line3.appendChild(email3)
  line4.appendChild(email4)

  let fO = new SVGElement("foreignObject").attributes([["width", "55%"], ["height", "45px"]])
  let input = new Input("email", "email").attributes([["placeholder", "Email"]])
  fO.appendChild(input)

  g.append(rect, line1, line2, line3, line4, fO)
  return g
}