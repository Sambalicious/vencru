import * as React from "react";
import { SVGProps } from "react";
const SvgArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 12 12"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.333}
      d="M6 1.333v9.334m0 0L10.667 6M6 10.667 1.333 6"
    />
  </svg>
);
export default SvgArrowDown;
