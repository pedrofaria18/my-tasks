import React from "react";
import { SvgXml } from "react-native-svg";

export default function DotsSVG() {
  const dots = `<svg xmlns="http://www.w3.org/2000/svg" width="4" height="20" viewBox="0 0 4 20" fill="none">
  <circle cx="2" cy="2" r="2" fill="#302F4C"/>
  <circle cx="2" cy="10" r="2" fill="#302F4C"/>
  <circle cx="2" cy="18" r="2" fill="#302F4C"/>
  </svg>
  `;

  const IconDots = () => <SvgXml xml={dots} />;

  return <IconDots />;
}
