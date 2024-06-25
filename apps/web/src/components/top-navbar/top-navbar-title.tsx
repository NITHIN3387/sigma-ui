import { forwardRef } from "react";
import { TopNavbarTitleProps } from "./top-navbar.types";
import { cn } from "../../utils";
import { cva } from "class-variance-authority";
import clsx from "clsx";

export const topNavbarTitleConfig = cva(
  clsx(
    "font-bold min-w-fit text-light-primary",
    "dark:text-dark-primary"
  ),
  {
    variants: {
      size: {
        sm: "text-xl",
        default: "text-2xl",
        lg: "text-3xl",
      }
    },
    defaultVariants: {
      size: "default"
    }
  }
)

export const TopNavbarTitle = forwardRef<HTMLParagraphElement, TopNavbarTitleProps>(
  (props, ref) => {
    const { children, className, size, ...restProps } = props;

    return (
      <h3 className={cn(topNavbarTitleConfig({ className, size }))} ref={ref} {...restProps}>
        {children}
      </h3>
    );
  },
);
