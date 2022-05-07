"use-strict";

import { areaConnectSVG } from "./svg/areaConnect.svg.js";
import { contentConnectSVG } from "./svg/contentConnect.svg.js";

export function Connect() {
  return `${areaConnectSVG()} ${contentConnectSVG()}`;
}
