import { cva } from "class-variance-authority";
import clsx from "clsx";
import { forwardRef } from "react";
import { cn } from "../../utils";
import { LabelProps } from "./label.types";

export const labelConfig = cva(
  // common style of the label
  "",
  // style according to the label props
  {
    variants: {
      // style according to the label variant
      variant: {
        default: clsx(
          "text-black",
          "dark:text-white"
        ),
        success: "text-green-500",
        warning: "text-yellow-500",
        error: "text-red-500",
      },
    },
    // default prop values
    defaultVariants: {
      variant: "default",
    },
  },
);

export const Label = forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {
  const { children, className, variant, ...restProps } = props;

  return (
    <label
      className={cn(labelConfig({ className, variant }))}
      ref={ref}
      {...restProps}
    >
      {children}
    </label>
  );
});

Label.displayName = "Label"