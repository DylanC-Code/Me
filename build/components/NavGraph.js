"use-strict";

export function NavGraph(svg) {
  let width = svg.clientWidth;
  let height = svg.clientHeight;
  let baseY = document.querySelector("[data-basey]").dataset.basey;
  let endY = parseInt(document.querySelector("[data-endy]").dataset.endy);

  return `
  <g id="nav_graph">
    <line x1="5%" x2="5%" y1="${endY}%" y2="${endY}%" stroke="white">
    <animate
  attributeName="y2"
    from="${endY}%"
    to="${baseY}%"
    dur="1s"
    begin="2s"
    fill="freeze"
    />
    </line>

    <path fill="none" stroke="white">
    <animate
    attributeName="d"
    keyTimes="0;0.5;1"
    values="
    M${(width * 4.5) / 100} ${(height * baseY) / 100 + 4};
    M${(width * 4.5) / 100} ${(height * baseY) / 100 + 4} L${
    (width * 5) / 100
  } ${(height * baseY) / 100 + 6};
    M${(width * 4.5) / 100} ${(height * baseY) / 100 + 4} L${
    (width * 5) / 100
  } ${(height * baseY) / 100 + 7} L${(width * 5.5) / 100} ${
    (height * baseY) / 100 + 4
  }"
    dur="0.5s"
    begin="2s"
    fill="freeze"
    />
    </path>
      <text x="7%" y="35%" transform="rotate(270,${(7 * width) / 100},${
    (35 * height) / 100
  })">Scroll up to</text>
      <text x="7%" y="90%" transform="rotate(270,${(7 * width) / 100},${
    (90 * height) / 100
  })">Scroll down to</text>
      <text x="4%" y="35%" transform="rotate(270,${(4 * width) / 100},${
    (35 * height) / 100
  })">Frontend</text>
      <text x="4%" y="90%" transform="rotate(270,${(4 * width) / 100},${
    (90 * height) / 100
  })">Backend</text>

    </g>
    `;
}
