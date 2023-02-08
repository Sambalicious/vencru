import * as React from "react";
import { SVGProps } from "react";
const Svg3Layers = (props: SVGProps<SVGSVGElement>) => (
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
      d="m2 17 10 5 10-5M2 12l10 5 10-5M12 2 2 7l10 5 10-5-10-5Z"
    />
  </svg>
);
export default Svg3Layers;
