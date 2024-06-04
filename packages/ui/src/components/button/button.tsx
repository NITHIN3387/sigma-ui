import clsx from "clsx";
import { cva } from "class-variance-authority";
import { cn, hexToRgb } from "../../utils";
import { type CSSProperties, forwardRef } from "react";
import type { ButtonProps } from "./button.types";

export const buttonConfig = cva(
  // common style of the button
  clsx(
    "text-light-primary text-sm font-medium",
    "disabled:opacity-50 disabled:pointer-events-none",
    "dark:text-dark-primary",
    "dark:focus:ring-dark-primary",
  ),
  // style according to the button props
  {
    variants: {
      // style according to the button size
      size: {
        sm: "px-2 py-1 rounded-sm",
        default: "px-3 py-2 rounded-md",
        md: "px-5 py-3 rounded-lg",
        lg: "px-6 py-4 rounded-lg",
      },
      // style according to the button variant
      variant: {
        default: clsx(
          "bg-light-primary text-white",
          "hover:bg-light-primary/75",
          "dark:!text-black dark:bg-dark-primary",
          "dark:hover:bg-dark-primary/75",
        ),
        outlined: clsx(
          "border border-2 border-light-primary/10",
          "hover:bg-light-primary/10",
          "dark:border-dark-primary/15",
          "dark:hover:bg-dark-primary/15",
        ),
        ghost: clsx(
          "hover:bg-light-primary/10",
          "dark:hover:bg-dark-primary/15",
        ),
      },
    },
    // default prop values
    defaultVariants: {
      size: "default",
      variant: "default",
    },
  },
);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      className,
      color, // in hexa value only
      size,
      variant,
      ...restProps
    } = props;

    // function to add custom color provided by user to the button (only hexa color)
    const buttonColor = (color: string | undefined) =>
      color
        ? ({
            "--light-primary-color": hexToRgb(color),
            "--dark-primary-color": hexToRgb(color),
          } as CSSProperties)
        : undefined;

    return (
      <button
        className={cn(buttonConfig({ className, size, variant }))}
        ref={ref}
        style={buttonColor(color)}
        {...restProps}
      >
        {children}
      </button>
    );
  },
);
