"use-strict";

// Create instance of the skill
export class Skill {
  /**
   * @param  {String} skill
   * @param  {Integer} year
   * @param  {Integer} percentage
   */
  constructor(skill, year, percentage) {
    this.skill = skill;
    this.year = year;
    this.percentage = percentage;
    this.color = `rgb(${Math.floor(Math.random() * 200 + 100)},${Math.floor(
      Math.random() * 200 + 100
    )},${Math.floor(Math.random() * 200 + 100)})`;
    document.querySelector("[data-endy]").dataset.endy -
      (this.baseX * percentage) / 100;

    this.graph = document.querySelector("#subContainer > svg");
    this.widthGraph = this.graph.width.animVal.value;
    this.heightGraph = this.graph.height.animVal.value;
    this.baseX = document.querySelector(
      `[data-year='${this.year}']`
    ).x1.baseVal.value;
    this.baseY = document.querySelector(
      `[data-year='${this.year}']`
    ).y1.baseVal.value;
    this.result = "";
  }
  //~ Display the skill when is create
  get display() {
    this.create();
    return this.result;
  }

  //# Utils for find the exact position of the percentage in yAxe
  percentagePosition() {
    let yTop =
      (document.querySelector("[data-endy]").dataset.endy * this.heightGraph) /
      100;
    let yBottom =
      (document.querySelector("[data-basey]").dataset.basey *
        this.heightGraph) /
      100;

    let lengthY = yBottom - yTop;
    return this.baseY - (this.percentage * lengthY) / 100;
  }

  create() {
    let nextYear = (((this.widthGraph * 60) / 100) * 20) / 100;
    let percentagePosition = this.percentagePosition();

    let cubicBezierEnd = `${this.baseX + (42 * nextYear) / 100} ${
      this.baseY
    }, ${this.baseX + (58 * nextYear) / 100} ${percentagePosition}`;
    let cubicBezierStart = `${this.baseX + nextYear} ${this.baseY},${
      this.baseX + nextYear
    } ${this.baseY}`;

    this.result +=
      //~ Create groupe with the courbe and text(the name of skill)
      `
      <g data-skill=${this.skill}>
        <path stroke='${this.color}' d="M${this.baseX} ${
        this.baseY
      } C${cubicBezierStart}, ${this.baseX + nextYear} ${this.baseY}">
          <animate
          attributeName="opacity"
          from="0"
          to="1"
          dur="0.75s"
          begin="2s"
          fill="freeze"
          id="${this.skill}_opacity"
          />

          <animate
          attributeName="d"
          attributeType="XML"
          keyTimes="0;0.5;1"
          values="
          M${this.baseX} ${this.baseY} C${cubicBezierStart}, ${
        this.baseX + nextYear
      } ${this.baseY};
          M${this.baseX} ${this.baseY} C${cubicBezierStart},${
        this.baseX + nextYear
      } ${percentagePosition};
          M${this.baseX} ${this.baseY} C${cubicBezierEnd},${
        this.baseX + nextYear
      } ${percentagePosition}"
          begin='${this.skill}_opacity.end'
          dur="1s"
          fill="freeze"
          />
        </path>

        <text fill="${this.color}" x="${this.baseX + nextYear + 10}" y="${
        percentagePosition + 3
      }">${this.skill}
      <animate
      attributeName="opacity"
      from="0"
      to="1"
      begin="${this.skill}_opacity.end"
      dur="1s"
      fill="freeze"
      >
      </text>
      </g>
    `;
  }
}
