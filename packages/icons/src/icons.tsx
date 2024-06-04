import { IconsProps } from "./icons.types";
import { forwardRef } from "react";

export const NavbarToggleIcon = forwardRef<SVGSVGElement, IconsProps>(
  (props, ref): JSX.Element => {
    const { fill = "currentcolor", ...restProps } = props

    return (
      <svg fill="currentcolor" {...restProps} ref={ref} viewBox="0 0 640 640">
        <path d="M119.4 151.9c-8 3.6-13.4 13.5-11.9 22 1.4 8.3 8.8 15.5 17.6 17.1 3.7.7 52.9.9 145 .8l139.5-.3 4.9-2.6c12.2-6.2 15.2-21.4 6.2-31.6-1.8-2-5-4.4-7.2-5.4-3.8-1.8-10.8-1.9-147-1.9-137 0-143.2.1-147.1 1.9m3.4 148.1c-5.2 1.6-9.8 5.2-12.5 9.8-5.8 9.8-2.4 22.1 7.5 27.9l4.7 2.8h395l4.7-2.8c13.7-8 13.7-27.4 0-35.4l-4.7-2.8-196-.2c-107.8-.1-197.2.2-198.7.7m1.3 149.1c-7.8 1.5-15.3 9.2-16.6 17-1.5 8.5 3.9 18.4 11.9 22 3.9 1.8 8.7 1.9 94.2 1.9h90.1l4.4-2.3c6.6-3.5 10.2-9.3 10.7-17.1.6-9.3-3-15.6-11.8-20.2-3.3-1.8-7.7-1.9-91-2.1-48.1 0-89.5.3-91.9.8" />
      </svg>
    );
  },
);
