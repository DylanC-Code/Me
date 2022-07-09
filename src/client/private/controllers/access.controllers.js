"use-strict";

import connectView from "../views/connect.view.js";

// Control the combo for display connect view
export default function accessAdmin() {
  let code = [17, 16, 67];

  function controlCode(key, code) {
    if (key.keyCode !== code[0]) return code = [17, 16, 67]
    code.shift()
    if (!code[0]) {
      connectView()
      window.onkeydown = null
    }
  }

  window.addEventListener("keydown", (e) => controlCode(e, code));
}
