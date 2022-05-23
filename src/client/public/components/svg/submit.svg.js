"use-strict";

export const submitSVG = `
  <g>
    <rect height="45px" width="35%" y="80%" x="33%" fill="#FF4B33"/>
    <line x1="33%" x2="33%" y1="80%" y2="80%" stroke="white">
    <animate
    attributeName="x2"
    to="68%"
    dur="1.3s"
    fill="freeze"
    />
    </line>
    <line x1="33%" x2="33%" y1="90%" y2="90%" stroke="white">
    <animate
    attributeName="y2"
    to="80%"
    dur="0.5s"
    fill="freeze"
    begin="1.3s"
    />
    </line>
    <line x1="68%" x2="68%" y1="90%" y2="90%" stroke="white">
    <animate
    attributeName="x2"
    to="33%"
    dur="1.3s"
    fill="freeze"
    />
    </line>
    <line x1="68%" x2="68%" y1="80%" y2="80%" stroke="white">
    <animate
    attributeName="y2"
    to="90%"
    dur="0.5s"
    fill="freeze"
    begin="1.3s"
    />
    </line>

    <foreignObject  height="45px" width="35%" y="80%" x="33%">
      <button>Send</button>
    </foreignObject>
  </g>
`;
