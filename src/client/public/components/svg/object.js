"use-strict";

import Animate from "../../../global/classes/Animate.js";
import Input from "../../../global/classes/Input.js";
import SVGElement from "../../../global/classes/SVGElement.js";

export default function ObjectInput() {
  let g = new SVGElement("g").element
  let rect = new SVGElement("rect").attributes([["x", "65%"]])
  let line1 = new SVGElement('line').attributes([["stroke", "white"], ["y1", "0"], ["y2", "0"], ["x1", "100%"], ["x2", "100%"]])
  let line2 = new SVGElement('line').attributes([["stroke", "white"], ["y1", "45"], ["y2", "45"], ["x1", "100%"], ["x2", "100%"]])
  let line3 = new SVGElement('line').attributes([["stroke", "white"], ["x1", "65%"], ["x2", "65%"], ["y1", "45"], ["y2", "45"]])
  let line4 = new SVGElement('line').attributes([["stroke", "white"], ["y1", "0"], ["y2", "0"], ["x1", "65%"], ["x2", "65%"]])

  let object1 = new Animate("y2", "0", 45, 0.5, "0", "freeze", "object1").element
  let object2 = new Animate("x2", "100%", "65%", 2, "object1.end", "freeze").element
  let object3 = new Animate("y2", 45, "0", 0.5, "0", "freeze", "object2").element
  let object4 = new Animate("x2", "65%", "100%", 2, "email2.end", "freeze").element

  line1.appendChild(object1)
  line2.appendChild(object2)
  line3.appendChild(object3)
  line4.appendChild(object4)

  let fO = new SVGElement("foreignObject").attributes([["x", "65%"], ["width", "35%"], ["height", "45px"], ["maxlength", "500"]])
  let input = new Input("object", "text").attributes([["placeholder", "Object"]])
  fO.appendChild(input)

  g.append(rect, line1, line2, line3, line4, fO)
  return g
}