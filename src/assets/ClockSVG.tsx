import React from "react";
import { SvgXml } from "react-native-svg";

export default function ClockSVG() {
  const clock = `<svg width="29" height="29" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M19.25 10.5C19.25 15.33 15.33 19.25 10.5 19.25C5.67 19.25 1.75 15.33 1.75 10.5C1.75 5.67 5.67 1.75 10.5 1.75C15.33 1.75 19.25 5.67 19.25 10.5Z" stroke="#302F4C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.7463 13.2825L11.0338 11.6637C10.5613 11.3837 10.1763 10.71 10.1763 10.1587V6.57123" stroke="#302F4C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `;

  const IconClock = () => (
    <SvgXml
      xml={clock}
      style={{
        marginRight: 13,
      }}
    />
  );

  return <IconClock />;
}
