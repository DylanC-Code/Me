"use-strict";

import { Graph } from "../components/Graph.js";
import { NavGraph } from "../components/NavGraph.js";
import { Skill } from "../components/Skill.js";
import { bioSkillsContainer } from "../containers/bioSkills.container.js";
import { SVGElement } from "../../global/classes/SVGElement.js";
import { chibrery } from "../../../../node_modules/chibrery/chibrery.js";
import { Request } from "../api/Request.js";

//^ Display Skills View
export async function skillsView() {
  //~ Make the container of view
  let subContainer = bioSkillsContainer();
  let { result } = await new Request("GET", "/notes").fetch()
  let spider = chibrery.Graph("spider")

  const params = {
    target: subContainer,
    datas: result,
    multi: true,
    styles: {
      text: { color: "white" },
      note: { stroke: "#FF4B33", fill: "transparent" },
      polygon: { anim: "rotate", stroke: "#38C7C7", fill: "transparent" },
      square: { anim: "synchronous", stroke: "#38C7C7" }
    }
  }
  spider(params)
}
