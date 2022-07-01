"use-strict";

import { bioSkillsContainer } from "../containers/bioSkills.container.js";
import { SpiderGraph } from "../components/Graph.js";
import switchGraphsController from "../controllers/switchGraphs.controllers.js";

//^ Display Skills View
export default async function skillsView() {
  //~ Make the container of view

  let subContainer = bioSkillsContainer();
  // subContainer.style.height = "90%"

  await SpiderGraph()
  switchGraphsController()
}