"use-strict";

export class Graph {
  constructor(svg, xStart, xEnd, yStart, yEnd, year) {
    this.w = svg.clientWidth;
    this.h = svg.clientHeight;
    this.xStart = xStart;
    this.xEnd = xEnd;
    this.yStart = yStart;
    this.yEnd = yEnd;
    this.widthStart = (this.xStart * this.w) / 100;
    this.widthEnd = (this.xEnd * this.w) / 100;
    this.heightStart = (this.yStart * this.h) / 100;
    this.heightEnd = (this.yEnd * this.h) / 100;
    this.result = "";
    this.year = year;
  }

  get display() {
    this.create();
    return `<g id="graph">${this.result}</g><g id="skills"></g>`;
  }
  percent(percent, reference) {
    return parseFloat((percent * reference) / 100);
  }

  create() {
    //~ Create the horizontal bottom line with his arrow
    this.result += `
  <g>
    <line data-baseX="${this.xStart}" data-baseY="${this.yEnd}" data-endX="${this.xEnd}" data-endY="${this.yStart}"  x1="${
      this.xStart
    }%" x2="${this.xStart}%" y1="${this.yEnd}%" y2="${this.yEnd}%">
      <animate
        attributeName="x2"
        from="${this.xStart}%" to="${this.xEnd}%"
        dur="1.2s"
        fill="freeze"
        id="animLV1"
      />
    </line>
    <path stroke="white">
      <animate
            attributeName="d"
            attributeType="XML"
            keyTimes="0;0.5;1"
            values="
            M${this.widthEnd + 4} ${this.heightEnd - 3};
            M${this.widthEnd + 4} ${this.heightEnd - 3} L${this.widthEnd + 8} ${
      this.heightEnd
    };
            M${this.widthEnd + 4} ${this.heightEnd - 3} L${this.widthEnd + 8} ${
      this.heightEnd
    } L${this.widthEnd + 4} ${this.heightEnd + 3}"
            dur="0.5s"
            fill="freeze"
            begin="animLV1.end"
          />
    </path>
  </g>
  `;

    //~ Create the vertical lines their arrow
    for (let i = 0; i < 5; i++) {
      this.result += `
    <g>
    <text x="${this.xStart + 12 * i - 1.5}%" y="4%">${this.year + i}</text>
        <line data-year="${this.year + i}" x1="${this.xStart + 12 * i}%" x2="${
        this.xStart + 12 * i
      }%" y1="${this.yEnd}%" y2="${this.yEnd}%">
        <animate
          attributeName="y2"
          from="${this.yEnd}%" to="${this.yStart}%"
          dur="1.2s"
          fill="freeze"
          begin="${0.24 * i}s"
          id="animLV${i}"
        />
        </line>
        <path stroke="white">
          <animate
            attributeName="d"
            attributeType="XML"
            keyTimes="0;0.5;1"
            values="
            M${this.widthStart + this.percent(12, this.w) * i - 3} 45;
            M${this.widthStart + this.percent(12, this.w) * i - 3} 45 L${
        this.widthStart + this.percent(12, this.w) * i
      } 42;
            M${this.widthStart + this.percent(12, this.w) * i - 3} 45 L${
        this.widthStart + this.percent(12, this.w) * i
      } 42 L${this.widthStart + this.percent(12, this.w) * i + 3} 45"
            dur="0.5s"
            fill="freeze"
            begin="animLV${i}.end"
          />
        </path>
        </g>
      `;
    }

    //~ Create percentage value on vertical line
    for (let b = 0; b < 4; b++) {
      this.result += `<g>
      <text x="${this.xStart - 4}%" y="${
        this.yEnd -
        this.percent(20, this.yEnd - this.yStart) -
        this.percent(20, this.yEnd - this.yStart) * b
      }%">${20 + b * 20}%</text>
      <line data-percentage="${20 + b * 20}" x1="${this.xStart - 0.4}%" x2="${
        this.xStart - 0.4
      }%" y1="${
        this.yEnd -
        this.percent(20, this.yEnd - this.yStart) -
        this.percent(20, this.yEnd - this.yStart) * b
      }%" y2="${
        this.yEnd -
        this.percent(20, this.yEnd - this.yStart) -
        this.percent(20, this.yEnd - this.yStart) * b
      }%">
      <animate
      attributeName="x2"
      dur="0.5s"
      from="${this.xStart - 0.4}%"
      to="${this.xStart + 0.4}%"
      begin="${1.2 / 5 + (1.2 / 5) * b}"
      fill="freeze"
      />
      </line>
      </g>
      `;
    }
  }
}
