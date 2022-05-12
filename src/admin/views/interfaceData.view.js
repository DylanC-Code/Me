"use-strict";

import { Request } from "../../public/build/api/Request.js";
import { Container } from "../../public/build/components/Containers.js";
import { categoriesDataAnims } from "../animations/categoriesData.animations.js";
import { headerInterfaceAnims } from "../animations/headerInterface.animations.js";
import { interfaceDataAnims } from "../animations/subNavInterface.animations.js";
import { CardCategory } from "../components/CardCategory.js";
import { HeaderInterface } from "../components/HeaderInterface.js";
import { categoriesControllers } from "../controllers/categories.controllers.js";

export async function interfaceDataView() {
  //~ Request for get categories
  let { result } = await new Request("GET", "/categories/").play;

  let main = document.getElementById("main");
  main.className = "main_interface";

  let container = Container.Base();
  container.innerHTML = `<ul><li>Categories</li><li>Languages</li><li>Concepts</li></ul>`;

  let subContainer = Container.SubContainer();
  subContainer.innerHTML = `
    ${HeaderInterface(result > 4)}
    <section></section>
  `;

  for (let c = 0; c < 4; c++)
    document.querySelector("#subContainer > section").innerHTML += CardCategory(
      result[c]
    );

  interfaceDataAnims().forEach((anim) => anim.play());
  headerInterfaceAnims().forEach((anim) => anim.play());
  categoriesDataAnims().forEach((anim) => anim.play());

  categoriesControllers(result);
}
