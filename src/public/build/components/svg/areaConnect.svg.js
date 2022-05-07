"use-strict";

export function areaConnectSVG() {
  return `
  <g stroke="white" stroke-dasharray="5px" stroke-width="1px" id="area_zone">
  <title>Rectangle area zone</title>
  <desc>Four independant line with their filter shadow in background</desc>
  <g>
    <line x1="3%" x2="3%" y1="4%" y2="4%" filter="url(#shadow_t)">
      <animate attributeName="x2" from="2%" to="98%" dur="1.3s" fill="freeze" />
    </line>
    <line x1="0%" x2="101%" y1="4%" y2="4%" stroke-dasharray="0" stroke="#222429" stroke-width="50px">
      <animate attributeName="x1" from="0%" to="101%" dur="1.3s" fill="freeze" />
    </line>
  </g>
  <g>
    <line x1="3%" x2="3%" y1="4%" y2="96%" filter="url(#shadow_l)">
      <animate attributeName="y2" from="2%" to="96%" dur="1.5s" fill="freeze" />
    </line>
    <line x1="3%" x2="3%" y1="0%" y2="100%" stroke-dasharray="0" stroke="#222429" stroke-width="50px">
      <animate attributeName="y1" from="0%" to="100%" dur="1.5s" fill="freeze" />
    </line>
  </g>
  <g>
    <line x1="98%" x2="98%" y1="96%" y2="96%" filter="url(#shadow_b)">
      <animate attributeName="x2" from="98%" to="3%" dur="1.3s" fill="freeze" />
    </line>
    <line x1="-3%" x2="100%" y1="97%" y2="97%" stroke-dasharray="0" stroke="#222429" stroke-width="50px">
      <animate attributeName="x2" from="100%" to="-3%" dur="1.3s" fill="freeze" />
    </line>
  </g>
  <g>
    <line x1="98%" x2="98%" y1="96%" y2="96%" filter='url(#shadow_r)'>
      <animate attributeName="y2" from="96%" to="4%" dur="1.2s" fill="freeze" />
    </line>
    <line x1="97%" x2="97%" y1="0%" y2="100%" stroke-dasharray="0" stroke="#222429" stroke-width="50px">
      <animate attributeName="y2" from="100%" to="0%" dur="1.2s" fill="freeze" />
    </line>
  </g>

<defs>
  <filter id="shadow_t" width="100%" height="100%" x="0" y="0" filterUnits="userSpaceOnUse">
    <feFlood width="97%" height="10px" x="2%" y="3%" flood-color="#38C7C7" flood-opacity="0.5" />
    <feBlend in="SourceGraphic"/>
    <feGaussianBlur stdDeviation="5"/>
    <feBlend in="SourceGraphic"/>
  </filter>
  <filter id="shadow_l" width="100%" height="100%" x="0" y="0" filterUnits="userSpaceOnUse">
    <feFlood width="10px" height="94%" x="2%" y="3%" flood-color="#38C7C7" flood-opacity="0.5" />
    <feBlend in="SourceGraphic"/>
    <feGaussianBlur stdDeviation="5"/>
    <feBlend in="SourceGraphic"/>
  </filter>
  <filter id="shadow_b" width="100%" height="100%" x="0" y="0" filterUnits="userSpaceOnUse">
    <feFlood width="97%" height="10px" x="2%" y="95%" flood-color="#38C7C7" flood-opacity="0.5" />
    <feBlend in="SourceGraphic"/>
    <feGaussianBlur stdDeviation="5"/>
    <feBlend in="SourceGraphic"/>
  </filter>
  <filter id="shadow_r" width="100%" height="100%" x="0" y="0" filterUnits="userSpaceOnUse">
    <feFlood width="10px" height="94%" x="97%" y="3%" flood-color="#38C7C7" flood-opacity="0.5" />
    <feBlend in="SourceGraphic"/>
    <feGaussianBlur stdDeviation="5"/>
    <feBlend in="SourceGraphic"/>
  </filter>
</defs>
</g>

      `;
}
