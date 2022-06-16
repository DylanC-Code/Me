"use-strict";

import { removeChild } from "../../global/utils/removeChilds.js";

//^ Container For Sub View "Bio" Or "Skill"
//^ Return container
export function bioSkillsContainer(view) {
  //~ Get container and remove childs
  let subContainer = document.getElementById("subContainer");
  removeChild(subContainer);

  //~ Conditional structure for apply style to container
  subContainer.classList = view == "bio" ? "container_bio" : "container_skills";

  //~ Return container
  return subContainer;
}
