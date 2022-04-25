"use-strict";

//^ Class For Create TypeWriter Animation

export class TypeWriter {
  /**
   * @param  { HTMLBodyElement } element
   * @param  { String } text
   * @param  { Integer } speedWrite=200
   */
  constructor(element, text, speedWrite = 75) {
    this.element = element;
    this.text = text;
    this.letterIndex = 0;
    this.speedWrite = speedWrite;
  }

  //~ Add the element with the text to the parent
  write() {
    let word =
      this.letterIndex == 0
        ? this.text.substring(0, this.letterIndex + 1)
        : this.text.substring(0, this.letterIndex);

    this.element.innerHTML = `
    <span>${word}</span>
  `;
  }

  //~ Launch the animation
  play() {
    if (this.letterIndex < this.text.length) {
      this.letterIndex++;
      setTimeout(() => {
        this.play();
      }, this.speedWrite);
    }
    return this.write();
  }

  //~ Add delay before launch the animation
  delay(delay) {
    setTimeout(() => this.play(), delay);
  }
}
