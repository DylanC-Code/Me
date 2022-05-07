"use-strict";

export const objectSVG = `
    <g>
      <rect x="65%" />

      <line y1="0" y2="0" x1="100%" x2="100%" stroke="white" id="line5"/>
      <animate
      href="#line5"
      attributeName="y2"
      from="0" to="45"
      dur="0.5s"
      fill="freeze"
      id="object1"
      />

      <line y1="45" y2="45" x1="100%" x2="100%" stroke="white" id="line6"/>
      <animate
      href="#line6"
      attributeName="x2"
      from="100%" to="65%"
      dur="2s"
      begin="object1.end"
      fill="freeze"
      id="object2"
      />
      
      <line x1="65%" x2="65%" y1="45" y2="45" stroke="white" id="line7"/>
      <animate
      href="#line7"
      attributeName="y2"
      from="45" to="0"
      dur="0.5s"
      repeatCount="1"
      fill="freeze"
      id="object3"
      />
      
      <line y1="0" y2="0" x1="65%" x2="65%" stroke="white" id="line8"/>
      <animate
      href="#line8"
      attributeName="x2"
      from="65%" to="100%"
      dur="2s"
      begin="object3.end"
      fill="freeze"
      id="object4"
      />

      <foreignObject x="65%" width="35%" height="45px" maxlenght="500">
        <input placeholder="Object">
      </foreignObject>
    </g>
  `;
