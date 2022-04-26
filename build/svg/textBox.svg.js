"use-strict";

export function textBoxSVG() {
  return `
    <g>
      <rect y="20%" />

      <line x1="0%" x2="0%" y1="20%" y2="20%" stroke="white" id="line9"/>
      <animate
      href="#line9"
      attributeName="x2"
      from="0%" to="100%"
      dur="1.5s"
      repeatCount="1"
      fill="freeze"
      id="textBox1"
      />

      <line x1="100%" x2="100%" y1="20%" y2="20%" stroke="white" id="line10"/>
        <animate
        href="#line10"
        attributeName="y2"
        from="20%" to="70%"
        dur="0.75s"
        begin="textBox1.end"
        repeatCount="1"
        fill="freeze"
        id="textBox2"
        />
        
        
        <line y1="70%" y2="70%" x1="100%" x2="100%" stroke="white" id="line11"/>
        <animate
        href="#line11"
        attributeName="x2"
        from="100%" to="0%"
        dur="1.5s"
        begin="textBox2.end"
        repeatCount="1"
        fill="freeze"
        id="textBox3"
        />

      <line y1="70%" y2="70%" x1="0" x2="0" stroke="white" id="line12"/>
        <animate
        href="#line12"
        attributeName="y2"
        from="70%" to="20%"
        dur="0.75s"
        begin="textBox3.end"
        repeatCount="1"
        fill="freeze"
        id="textBox4"
        />

         <foreignObject y="20%" width="100%" height="100%">
          <textarea rows="23" cols="126" placeholder="Write your message ..."></textarea>
        </foreignObject>
      </g>
  `;
}
