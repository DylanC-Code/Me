"use-strict";

import { Request } from "../../public/api/Request.js";
import headerProjectsInterface from "../components/headerProjectsInterface.js";
import mainProjectsInterface from "../components/mainProjectsInterface.js";
import projectsInterfaceContainer from "../containers/projectsInterface.container.js";


export default async function projectInterfaceView(datas) {
  let main = document.getElementById("main");
  main.className = "main_interface";

  //~ Control if datas is not null
  if (!datas) {
    datas = await new Request("GET", `/projects`).play;
    datas = datas.result;
  }
  // //~ Call the container of the view if not exist already
  projectsInterfaceContainer()
  headerProjectsInterface(datas)
  mainProjectsInterface(datas)
}
