"use-strict";

import EmailInput from "./svg/email.js";
import ObjectInput from "./svg/object.js";
import TextBoxInput from "./svg/textBox.js";
import SubmitInput from "./svg/submit.js";

export default function Contact() {
  let fragment = new DocumentFragment()

  fragment.append(EmailInput(), ObjectInput(), TextBoxInput(), SubmitInput())

  return fragment
}
