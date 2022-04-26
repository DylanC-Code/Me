"use-strict";

export function Graph() {
  let svg = document.querySelector("#subContainer >svg");
  let w = document.querySelector("#subContainer >svg").clientWidth;
  let h = document.querySelector("#subContainer >svg").clientHeight;

  //~ Important values for calculate position elements in the svg
  let x = 20;
  let y = 90;
  let lV = 5;
  let startW = (40 * w) / 100 / 2;
  let endW = w - (20 * w) / 100;
  let endH = (90 * h) / 100;
  let douze = (12 * w) / 100;
  let graph = "";

  //~ Create the horizontal bottom line with his arrow
  graph += `
  <g>
    <line x1="${x}%" x2="${x}%" y1="${y}%" y2="${y}%">
      <animate
        attributeName="x2"
        from="${x}%" to="80%"
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
            M${endW + 4} ${endH - 3};
            M${endW + 4} ${endH - 3} L${endW + 8} ${endH};
            M${endW + 4} ${endH - 3} L${endW + 8} ${endH} L${endW + 4} ${
    endH + 3
  }"
            dur="0.5s"
            fill="freeze"
            begin="animLV1.end"
          />
    </path>
  </g>
  `;

  //~ Create the vertical lines their arrow
  for (let i = 0; i < lV; i++) {
    graph += `
    <g>
        <line x1="${x + 12 * i}%" x2="${x + 12 * i}%" y1="${y}%" y2="${y}%">
        <animate
          attributeName="y2"
          from="${y}%" to="5%"
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
            M${startW + douze * i - 3} 20;
            M${startW + douze * i - 3} 20 L${startW + douze * i} 16;
            M${startW + douze * i - 3} 20 L${startW + douze * i} 16 L${
      startW + douze * i + 3
    } 20"
            dur="0.5s"
            fill="freeze"
            begin="animLV${i}.end"
          />
        </path>
        </g>
      `;
  }
  svg.innerHTML = `<g id="graph">${graph}</g>`;
}