"use-strict";

import { connectView } from "../views/connect.view.js";

//^ Control to display connect Page
export function accessAdmin() {
  let code = [17, 16, 67];

  window.addEventListener("keydown", (e) => {
    if (e.keyCode == code[0]) {
      code.shift();
      if (!code[0]) connectView();
    } else code = [17, 16, 67];
  });
}
