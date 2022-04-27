"use-strict";

export class Skill {
  constructor(skill, year, percentage) {
    this.skill = skill;
    this.year = year;
    this.percentage = percentage;
    this.graph = document.querySelector("#subContainer > svg");
    this.widthGraph = this.graph.width.animVal.value;
    this.heightGraph = this.graph.height.animVal.value;
    this.baseX = document.querySelector("[data-baseX]").x1.baseVal.value;
    this.baseY = document.querySelector(
      `[data-year='${this.year}']`
    ).y1.baseVal.value;
    this.result = "";
  }

  get display() {
    this.create();
    return this.result;
  }
  create() {
    let nextYear = (((this.widthGraph * 60) / 100) * 20) / 100;
    this.result += `
      <g data-skill=${this.skill}>
        
        <path stroke='white' d="M${this.baseX} ${this.baseY} 
        
        C${this.baseX + nextYear} ${this.baseY},${
      this.baseX + (nextYear * 20) / 100
    } ${this.baseY - 35},
    
    
     ${this.baseX + nextYear} ${this.baseY - 50}">
        </path>
      </g>
    `;
  }
}
{
  /* <path stroke='white' d="M${this.baseX} ${this.baseY} C${
      this.baseX + nextYear
    } ${this.baseY},${(nextYear * 20) / 100},${this.baseY - 35} ${
      this.baseX + nextYear
    } ${this.baseY - 50}">
        </path> */
}
