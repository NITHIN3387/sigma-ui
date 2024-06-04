import { forwardRef } from "react";
import { TopNavbarChildrenProps } from "./top-navbar.types";
import { cn } from "../../utils";

export const TopNavbarChildren = forwardRef<HTMLDivElement, TopNavbarChildrenProps>(
  (props, ref) => {
    const { children, className, ...restProps } = props;

    return (
      <div className={cn(["sm:max-w-fit w-full flex sm:justify-normal justify-end", className])} ref={ref} {...restProps}>
        { children }
      </div>
    );
  },
);
