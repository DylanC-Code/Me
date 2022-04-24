"use-strict";

export class TypeWriter {
  constructor(parent, element, text) {
    this.parent = parent;
    this.element = element;
    this.text = text;
    this.letterIndex = 0;
  }

  write() {
    let word =
      this.letterIndex == 0
        ? this.text.substring(0, this.letterIndex + 1)
        : this.text.substring(0, this.letterIndex);

    this.parent.innerHTML = `
    <${this.element}>${word}</${this.element}>
  `;
  }

  play() {
    if (this.letterIndex < this.text.length) {
      this.letterIndex++;
      setTimeout(() => {
        this.play();
      }, 200);
    }
    return this.write();
  }

  delay(delay) {
    setTimeout(() => this.play(), delay);
  }
}
