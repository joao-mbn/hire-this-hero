import { forwardRef } from "react";
import type { IconProps } from "./types";

export const Corner = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <svg viewBox="0 0 240 240" {...props.svgProps} ref={ref}>
      <path d="m98.282 164.73h-84.732v-163.4l-12.095 0.0022v163.4 12.13h12.095 96.86l-12.128-12.13z" />
      <polygon
        points="6650 0 6650 339 2070 339 2070 2714 1730 3054 1730 339 1730 0 2070 0"
        transform="matrix(.035677 0 0 -.035677 1.4156 238.78)"
      />
      <path d="m37.692 77.617v112.59h-24.225-12.095l0.0004 12.1v24.22 12.1h12.095 24.225 12.094v-12.1-24.22h112.59l-12.13-12.1h-100.46l-0.004-100.46-12.094-12.133zm0 124.69v24.22h-24.225v-24.22h24.225z" />
    </svg>
  );
});
