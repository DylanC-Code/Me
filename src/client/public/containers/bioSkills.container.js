"use-strict";

import Tools from "../../global/utils/Tools.js";

//^ Container For Sub View "Bio" Or "Skill"
//^ Return container
export function bioSkillsContainer(view) {
  //~ Get container and remove childs
  let subContainer = document.getElementById("subContainer");
  Tools.removeChilds(subContainer);

  //~ Conditional structure for apply style to container
  subContainer.classList = view == "bio" ? "container_bio" : "container_skills";

  //~ Return container
  return subContainer;
}
