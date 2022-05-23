"use-strict";

export function contentConnectSVG() {
  return `
    <g>
      <title>Content svg of the connect page</title>
      <text x="-50%" y="20%" text-anchor="middle">Connection
        <animate
        attributeName="x"
        begin="1s"
        dur="0.5s"
        keyTimes="0;0.7;1"
        values="-50%;60%;50%"
        fill="freeze"
        />
        <animate
        attributeName="opacity"
        begin="none"
        from="0.8"
        to="0"
        dur="0.5s"
        fill="freeze"
        id="connect_end"
        /> 
        </text>
      
      <foreignObject width="100%" height="50%" y="40%">
        <input type="password">
        <input type="password">
      </foreignObject>
    </g>
  `;
}
