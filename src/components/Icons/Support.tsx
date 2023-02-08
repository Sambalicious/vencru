import * as React from "react";
import { SVGProps } from "react";
const SvgSupport = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m4.93 4.93 4.24 4.24m5.66 5.66 4.24 4.24m0-14.14-4.24 4.24 3.53-3.53M4.93 19.07l4.24-4.24M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-6 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
    />
  </svg>
);
export default SvgSupport;
