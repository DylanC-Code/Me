"use-strict";

import { emailSVG } from "../svg/email.svg.js";
import { objectSVG } from "../svg/object.svg.js";
import { textBoxSVG } from "../svg/textBox.svg.js";
import { submitSVG } from "../svg/submit.svg.js";

export function Contact() {
  return `
    ${emailSVG}
    ${objectSVG}
    ${textBoxSVG}
    ${submitSVG}
  `;
}
