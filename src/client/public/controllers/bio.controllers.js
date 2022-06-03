"use-strict"

import { TypeWriter } from "../animations/TypeWriter.js";
import { Contents } from "../contents/global.contents.js";

// ####
export function bioControllers(){
  let h1 = document.querySelector("#subContainer > h1");
  let p = document.querySelector("#subContainer > p");
  
  new TypeWriter(h1, Contents.about.h1).play();
  new TypeWriter(p, Contents.about.p, 50).delay(2000);
}