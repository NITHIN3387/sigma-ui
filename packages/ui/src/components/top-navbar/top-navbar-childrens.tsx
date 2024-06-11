import { forwardRef } from "react";
import { TopNavbarChildrenProps } from "./top-navbar.types";
import { cn } from "../../utils";
import { useToggle } from "./top-navbar";
import { cva } from "class-variance-authority";

const topNavbarChildrenConfig = cva("w-full flex justify-end", {
  variants: {
    toggle: {
      sm: "sm:max-w-fit sm:justify-normal",
      md: "md:max-w-fit md:justify-normal",
      lg: "lg:max-w-fit lg:justify-normal",
      xl: "xl:max-w-fit xl:justify-normal",
      none: "max-w-fit justify-normal",
    },
  },
  defaultVariants: {
    toggle: "sm",
  },
});

export const TopNavbarChildren = forwardRef<
  HTMLDivElement,
  TopNavbarChildrenProps
>((props, ref) => {
  const { children, className, ...restProps } = props;

  const { toggle } = useToggle();

  return (
    <div
      className={cn(topNavbarChildrenConfig({ toggle, className }))}
      ref={ref}
      {...restProps}
    >
      {children}
    </div>
  );
});
