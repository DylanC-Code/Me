"use-strict"

export default function Connect() {
  return `
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
  <g stroke="white" stroke-dasharray="5px" stroke-width="1px" id="area_zone">
    <title>Rectangle area zone</title>
    <desc>Four independant line with their filter shadow in background</desc>

    <g>
      <line x1="3%" x2="3%" y1="4%" y2="4%" filter="url(#shadow_t)">
        <animate attributeName="x2" from="2%" to="98%" dur="1.3s" fill="freeze" />
        <animate attributeName="y1" from="4%" to="50%" dur="1s" fill="freeze" begin="connect_end.end +1s" />
        <animate attributeName="y2" from="4%" to="50%" dur="1s" fill="freeze" begin="connect_end.end +1s" />
        <animate attributeName="x1" from="2%" to="50%" dur="0.9s" fill="freeze" begin="connect_end.end +2s" />
        <animate attributeName="x2" from="98%" to="50%" dur="0.9s" fill="freeze" begin="connect_end.end +2s" />
      </line>
      <line x1="0%" x2="101%" y1="4%" y2="4%" stroke-dasharray="0" stroke="#222429" stroke-width="50px">
        <animate attributeName="x1" from="0%" to="101%" dur="1.3s" fill="freeze" />
      </line>
    </g>

    <g>
      <line x1="3%" x2="3%" y1="4%" y2="96%" filter="url(#shadow_l)">
        <animate attributeName="y2" from="2%" to="96%" dur="1.5s" fill="freeze" />
        <animate attributeName="y1" from="2%" to="50%" dur="0.9s" fill="freeze" begin="connect_end.end +1s" />
        <animate attributeName="y2" from="96%" to="50%" dur="0.9s" fill="freeze" begin="connect_end.end +1s" />
      </line>
      <line x1="3%" x2="3%" y1="0%" y2="100%" stroke-dasharray="0" stroke="#222429" stroke-width="50px">
        <animate attributeName="y1" from="0%" to="100%" dur="1.5s" fill="freeze" />
      </line>
    </g>

    <g>
      <line x1="98%" x2="98%" y1="96%" y2="96%" filter="url(#shadow_b)">
        <animate attributeName="x2" from="98%" to="3%" dur="1.3s" fill="freeze" />
        <animate attributeName="y1" from="96%" to="50%" dur="1s" fill="freeze" begin="connect_end.end +1s" />
        <animate attributeName="y2" from="96%" to="50%" dur="1s" fill="freeze" begin="connect_end.end +1s" />
        <animate attributeName="x1" from="2%" to="50%" dur="0.9s" fill="freeze" begin="connect_end.end +2s" />
        <animate attributeName="x2" from="98%" to="50%" dur="0.9s" fill="freeze" begin="connect_end.end +2s" />
      </line>
      <line x1="-3%" x2="100%" y1="97%" y2="97%" stroke-dasharray="0" stroke="#222429" stroke-width="50px">
        <animate attributeName="x2" from="100%" to="-3%" dur="1.3s" fill="freeze" />
      </line>
    </g>

    <g>
      <line x1="98%" x2="98%" y1="96%" y2="96%" filter='url(#shadow_r)'>
        <animate attributeName="y2" from="96%" to="4%" dur="1.2s" fill="freeze" />
        <animate attributeName="y1" from="2%" to="50%" dur="0.9s" fill="freeze" begin="connect_end.end +1s" />
        <animate attributeName="y2" from="96%" to="50%" dur="0.9s" fill="freeze" begin="connect_end.end +1s" />
      </line>
      <line x1="97%" x2="97%" y1="0%" y2="100%" stroke-dasharray="0" stroke="#222429" stroke-width="50px">
        <animate attributeName="y2" from="100%" to="0%" dur="1.2s" fill="freeze" />
      </line>
    </g>

    <defs>
      <filter id="shadow_t" width="100%" height="100%" x="0" y="0" filterUnits="userSpaceOnUse">
        <feFlood width="97%" height="10px" x="2%" y="3%" flood-color="#38C7C7" flood-opacity="0.5">
          <animate attributeName="y" from="3%" to="50%" begin="connect_end.end + 1s" dur="1s" fill="freeze" />
          <animate attributeName="width" from="97%" to="0%" begin="connect_end.end + 2s" dur="1s" fill="freeze" />
          <animate attributeName="x" from="2%" to="50%" begin="connect_end.end + 2s" dur="1s" fill="freeze" />
          <animate attributeName="flood-opacity" from="0.5" to="0" dur="1s" begin="connect_end.end + 2s"
            fill="freeze" />
        </feFlood>
        <feBlend in="SourceGraphic" />
        <feGaussianBlur stdDeviation="5" />
        <feBlend in="SourceGraphic" />
      </filter>

      <filter id="shadow_l" width="100%" height="100%" x="0" y="0" filterUnits="userSpaceOnUse">
        <feFlood width="10px" height="94%" x="2%" y="3%" flood-color="#38C7C7" flood-opacity="0.5">
          <animate attributeName="height" from="94%" to="10px" begin="connect_end.end + 1s" dur="1s" fill="freeze" />
          <animate attributeName="y" from="3%" to="50%" begin="connect_end.end + 1s" dur="1s" fill="freeze" />
          <animate attributeName="flood-opacity" from="0.5" to="0" dur="0.1s" begin="connect_end.end + 2s"
            fill="freeze" />
        </feFlood>
        <feBlend in="SourceGraphic" />
        <feGaussianBlur stdDeviation="5" />
        <feBlend in="SourceGraphic" />
      </filter>

      <filter id="shadow_b" width="100%" height="100%" x="0" y="0" filterUnits="userSpaceOnUse">
        <feFlood width="97%" height="10px" x="2%" y="95%" flood-color="#38C7C7" flood-opacity="0.5">
          <animate attributeName="y" from="95%" to="50%" begin="connect_end.end + 1s" dur="1s" fill="freeze" />
          <animate attributeName="width" from="97%" to="0%" begin="connect_end.end + 2s" dur="1s" fill="freeze" />
          <animate attributeName="x" from="2%" to="50%" begin="connect_end.end + 2s" dur="1s" fill="freeze" />
          <animate attributeName="flood-opacity" from="0.5" to="0" dur="1s" begin="connect_end.end + 2s"
            fill="freeze" />
        </feFlood>
        <feBlend in="SourceGraphic" />
        <feGaussianBlur stdDeviation="5" />
        <feBlend in="SourceGraphic" />
      </filter>

      <filter id="shadow_r" width="100%" height="100%" x="0" y="0" filterUnits="userSpaceOnUse">
        <feFlood width="10px" height="94%" x="97%" y="3%" flood-color="#38C7C7" flood-opacity="0.5">
          <animate attributeName="height" from="94%" to="10px" begin="connect_end.end + 1s" dur="1s" fill="freeze" />
          <animate attributeName="y" from="3%" to="50%" begin="connect_end.end + 1s" dur="1s" fill="freeze" />
          <animate attributeName="flood-opacity" from="0.5" to="0" dur="0.1s" begin="connect_end.end + 2s"
            fill="freeze" />
        </feFlood>
        <feBlend in="SourceGraphic" />
        <feGaussianBlur stdDeviation="5" />
        <feBlend in="SourceGraphic" />
      </filter>
    </defs>
  </g>

  <g>
    <title>Content svg of the connect page</title>
    <text x="-50%" y="20%" text-anchor="middle">Connection
      <animate attributeName="x" begin="1s" dur="0.5s" keyTimes="0;0.7;1" values="-50%;60%;50%" fill="freeze" />
      <animate attributeName="opacity" begin="none" from="0.8" to="0" dur="0.5s" fill="freeze" id="connect_end" />
    </text>

    <foreignObject width="100%" height="50%" y="40%">
      <input type="password">
      <input type="password">
    </foreignObject>
  </g>
</svg>
  `
}
