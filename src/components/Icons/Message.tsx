import * as React from "react";
import { SVGProps } from "react";
const SvgMessage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 20 16"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.667}
      d="M18.333 3c0-.917-.75-1.667-1.666-1.667H3.333c-.916 0-1.666.75-1.666 1.667m16.666 0v10c0 .917-.75 1.667-1.666 1.667H3.333c-.916 0-1.666-.75-1.666-1.667V3m16.666 0L10 8.833 1.667 3"
    />
  </svg>
);
export default SvgMessage;
