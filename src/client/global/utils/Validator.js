"use-strict";

export default class Validator {
  /**
   * Control an HTMLElement with many check
   * @param  { HTMLElement } element The element to control
   * @param  { Number } minimum=0 The minimum value for the control length
   * @param  { Number } maximum="" The maximum value for the control length
   */
  constructor(element, minimum = 0, maximum = "") {
    this.element = element;
    this.minimum = minimum;
    this.maximum = maximum;
  }

  //* Control if the input is empty or null
  emptyOrNull() {
    if (!this.element.value || this.element.value == "")
      return "Input is empty please, write something !";
  }

  //* Control the specials caracteres
  special() {
    let valid = /^[0-9A-Za-zÜ-ü\s_-]+$/.test(this.element.value);
    if (!valid) return "Spécial char is denied !";
  }
  //* Control the length of the value
  length() {
    let min = new RegExp("^.{m,}$".replace("m", this.minimum)).test(
      this.element
    );
    let max = new RegExp("^.{0,m}$".replace("m", this.maximum)).test(
      this.element
    );

    if (!min) return `Minimum ${this.minimum} caracteres !`;
    else if (!max) return `Maximum ${this.maximum} caracteres !`;
  }

  //* Control it its a number
  number() {
    let valid = /^[0-9]+$/.test(this.element.value);
    if (!valid) return "Please enter a number !";
  }

  //* Control if the value is between the range
  numberValue(minimum, maximum) {
    function test(correspondance, p1, p2) {
      return [(p1 = minimum), (p2 = maximum)].join("-");
    }

    let valid = new RegExp("^[min-max]$".replace(/(min).*(max)/, test)).test(
      this.element.value
    );

    if (!valid)
      return `Value doesn't match between ${minimum} and ${maximum} !`;
  }

  //* Control if its repetion
  repetition() {
    let repetition = /([\s_-]{2,})+/.test(this.element.value);
    if (repetition) return "Repetition of the same caractere is denied !";
  }

  //* Control if its finish with space
  space() {
    let space = /(.[\s])$/.test(this.element.value);
    if (space) return "Please don't finish with space !";
  }

  //* Control if its name
  name() {
    let name = /^[A-Za-zÜ-ü]{2,20}([\s_-][A-Za-zÜ-ü]{2,20})?$/.test(
      this.element.value
    );

    if (name) return;
    if (this.emptyOrNull()) return this.emptyOrNull();
    if (this.special()) return this.special();
    if (this.repetition()) return this.repetition();
    if (!this.number()) return !this.number();
    if (this.space()) return this.space();
    if (this.length(2, 5)) return this.length(2, 5);
  }

  // email() {}
}
