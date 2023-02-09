import * as React from "react";
import { SVGProps } from "react";
const SvgLogout = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 36 36"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.67}
      d="M15.5 25.5h-3.333a1.666 1.666 0 0 1-1.667-1.667V12.167a1.666 1.666 0 0 1 1.667-1.667H15.5m5.833 11.667L25.5 18m0 0-4.167-4.167M25.5 18h-10"
    />
  </svg>
);
export default SvgLogout;
