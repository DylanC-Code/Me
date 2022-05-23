"use-strict";

import { areaConnectSVG } from "../../public/components/svg/areaConnect.svg.js";
import { contentConnectSVG } from "../../public/components/svg/contentConnect.svg.js";

export function Connect() {
  return `${areaConnectSVG()} ${contentConnectSVG()}`;
}
