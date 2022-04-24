"use-strict";

import { TypeWriter } from "../animations/TypeWriter.js";

export function About(parent) {
  let h1 = "Manuel Ferrara";
  let p =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, illo";
    
  new TypeWriter(parent, "h1", h1).play();
  new TypeWriter(parent, "p", p).delay(6000);
}
