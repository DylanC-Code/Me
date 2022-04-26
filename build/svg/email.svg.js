"use-strict";

export function emailSVG() {
  return `
      <g>
        <rect />

        <line stroke="white" id="line1"/>
        <animate
        href="#line1"
        attributeName="y2"
        from="0" to="45"
        dur="0.5s"
        repeatCount="1"
        fill="freeze"
        id="email1"
        />
        
        <line y1="45" y2="45" stroke="white" id="line2"/>
        <animate
        href="#line2"
        attributeName="x2"
        from="0" to="55%"
        dur="2s"
        begin="email1.end"
        repeatCount="1"
        fill="freeze"
        id="email2"
        />

        <line x1="55%" x2="55%" y1="45" y2="45" stroke="white" id="line3"/>
        <animate
        href="#line3"
        attributeName="y2"
        from="45" to="0"
        dur="0.5s"
        begin="email2.end"
        repeatCount="1"
        fill="freeze"
        id="email3"
        />

        <line x1="55%" x2="55%" stroke="white" id="line4"/>
        <animate
        href="#line4"
        attributeName="x2"
        from="55%" to="0"
        dur="2s"
        begin="email3.end"
        repeatCount="1"
        fill="freeze"
        id="email4"
        />

        <foreignObject width="55%" height="45px">
          <input placeholder="Salut">
        </foreignObject>
        </g>
  `;
}
