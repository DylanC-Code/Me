"use-strict";

export class Validator {
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
    this._errors = null;
  }

  get errors() {
    return this._errors;
  }
  //^ Control if the input is empty or null
  emptyOrNull() {
    if (!this.element.value || this.element.value == "")
      this._errors = "Input is empty please, write something !";
    else return true;
  }

  //^ Control the specials caracteres
  special() {
    let valid = /^[0-9A-Za-zÜ-ü\s_-]+$/.test(this.element.value);
    if (!valid) this._errors = "Spécial char is denied !";
    else return true;
  }

  //^ Control the length of the value
  length() {
    let min = new RegExp("^.{m,}$".replace("m", this.minimum)).test(
      this.element
    );
    let max = new RegExp("^.{0,m}$".replace("m", this.maximum)).test(
      this.element
    );

    if (!min) this._errors = `Minimum ${this.minimum} caracteres !`;
    else if (!max) this._errors = `Maximum ${this.maximum} caracteres !`;
    else return true;
  }

  //^ Control the number
  number() {
    let valid = /^[0-9]+$/.test(this.element.value);
    if (valid) this._errors = "Number is denied !";
    else return true;
  }

  numberValue(minimum, maximum) {
    function test(correspondance, p1, p2) {
      return [(p1 = minimum), (p2 = maximum)].join("-");
    }

    let valid = new RegExp("^[min-max]$".replace(/(min).*(max)/, test)).test(
      this.element.value
    );

    if (!valid)
      this._errors = [
        this.element,
        `Value doesn't match between ${minimum} and ${maximum} !`,
      ];
  }

  repetition() {
    let repetition = /([\s_-]{2,})+/.test(this.element.value);
    if (repetition)
      this._errors = "Repetition of the same caractere is denied !";
    else return true;
  }

  space() {
    let space = /(.[\s])$/.test(this.element.value);
    if (space) this._errors = "Please don't finish with space !";
    else return true;
  }
  //^ Special control for the input name
  name() {
    let name = /^[A-Za-zÜ-ü]{2,20}([\s_-][A-Za-zÜ-ü]{2,20})?$/.test(
      this.element.value
    );

    if (!name)
      if (this.emptyOrNull())
        if (this.special())
          if (this.number())
            if (this.repetition())
              if (this.space())
                if (this.element.value.length < 2)
                  this._errors = `Minimum 2 caracteres !`;
                else if (this.element.value.length > 40)
                  this._errors = `Maximum 40 caracteres !`;

    return [this.element, this._errors];
  }

  // email() {}
}
