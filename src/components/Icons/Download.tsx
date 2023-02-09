import * as React from "react";
import { SVGProps } from "react";
const SvgDownload = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 20 18"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.667}
      d="M6.667 13.167 10 16.5m0 0 3.333-3.333M10 16.5V9m7.4 5.075A4.167 4.167 0 0 0 15 6.5h-1.05A6.666 6.666 0 1 0 2.5 12.575"
    />
  </svg>
);
export default SvgDownload;
