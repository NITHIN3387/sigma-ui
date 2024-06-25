"use client"

import { forwardRef } from "react";
import { TopNavbarListProps } from "./top-navbar.types";
import { cn } from "../../utils";
import { useToggle } from "./top-navbar";
import { cva } from "class-variance-authority";

const topNavbarListConfig = cva(
  "w-full gap-8 hidden",
  {
    variants: {
      toggle: {
        sm: "sm:flex",
        md: "md:flex",
        lg: "lg:flex",
        xl: "xl:flex",
        none: "flex"
      }
    },
    defaultVariants: {
      toggle: "sm"
    }
  }
)

const topNavbarListMobileConfig = cva(
  "fixed top-0 left-0 h-full w-full grid grid-cols-[auto_1fr] transition duration-300",
  {
    variants: {
      toggle: {
        sm: "sm:!hidden",
        md: "md:!hidden",
        lg: "lg:!hidden",
        xl: "xl:!hidden",
        none: "!hidden"
      },
      isToggle: {
        true: "-translate-x-0",
        false: "-translate-x-full"
      }
    },
    defaultVariants: {
      toggle: "sm",
      isToggle: false
    }
  }
)

export const TopNavbarList = forwardRef<HTMLUListElement, TopNavbarListProps>(
  (props, ref) => {
    const { children, className, ...restProps } = props;

    const { isToggle, setIsToggle, toggle } = useToggle();

    return (
      <>
        <ul
          className={cn(topNavbarListConfig({ toggle, className }))}
          ref={ref}
          {...restProps}
        >
          {children}
        </ul>
        <div
          className={cn(topNavbarListMobileConfig({ toggle,  isToggle, className }))}
        >
          <ul
            className={cn([
              className,
              `flex flex-col top-0 left-0 bg-white dark:bg-zinc-950 gap-4 p-4`,
            ])}
            ref={ref}
            {...restProps}
          >
            {children}
          </ul>
          <div className={`bg-black/70 transition ${isToggle ? "delay-200 opacity-100" : "opacity-0"}`} onClick={() => setIsToggle(false)} />
        </div>
      </>
    );
  },
);
