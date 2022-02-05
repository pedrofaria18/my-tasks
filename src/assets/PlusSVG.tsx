import React from "react";
import { SvgXml } from "react-native-svg";

export default function PlusSVG() {
  const plus = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M2 8H14" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8 14V2" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `;

  const IconPlus = () => (
    <SvgXml
      xml={plus}
    />
  );

  return <IconPlus />;
}
