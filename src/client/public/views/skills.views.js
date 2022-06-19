"use-strict";

import { bioSkillsContainer } from "../containers/bioSkills.container.js";
import { SpiderGraph } from "../components/Graph.js";

//^ Display Skills View
export default async function skillsView() {
  //~ Make the container of view

  let subContainer = bioSkillsContainer();
  subContainer.style.height = "90%"

  await SpiderGraph()
}