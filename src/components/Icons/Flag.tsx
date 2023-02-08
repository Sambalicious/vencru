import * as React from "react";
import { SVGProps } from "react";
const SvgFlag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 18 22"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 14s1-1 4-1 5 2 8 2 4-1 4-1V2s-1 1-4 1-5-2-8-2-4 1-4 1v12Zm0 0v7"
    />
  </svg>
);
export default SvgFlag;
