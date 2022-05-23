"use-strict";

import { areaConnectSVG } from "../../public/build/components/svg/areaConnect.svg.js";
import { contentConnectSVG } from "../../public/build/components/svg/contentConnect.svg.js";

export function Connect() {
  return `${areaConnectSVG()} ${contentConnectSVG()}`;
}
