"use-strict";

import { sessionCheck } from "../../../admin/tools/session.js";
import { TypeWriter } from "../animations/TypeWriter.js";
import { ContentsAdmin } from "../contents/admin.contents.js";
import { Contents } from "../contents/global.contents.js";

export function homeView() {
  let main = document.getElementById("main");
  main.className = "";
  main.innerHTML = "<p></p>";

  let p = document.querySelector("#main > p");
  let session = sessionCheck();

  // session
  //   ? new TypeWriter(p, ContentsAdmin.home.p).play()
  //   : new TypeWriter(p, Contents.home.p).play();
}
