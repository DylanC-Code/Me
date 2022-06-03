"use-strict";

import { removeChild } from "../../global/utils/removeChilds.js";

//^ Container For Sub View "Bio" Or "Skill"
//^ Return container
export function bioSkillsContainer(view) {
  //~ Get container and remove childs
  let subContainer = document.getElementById("subContainer");
  removeChild(subContainer);

  //~ Conditional structure for apply style to container
  subContainer.style.margin = view == "bio" ? "3rem" : "3rem 0";

  //~ Return container
  return subContainer;
}
