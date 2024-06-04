import { forwardRef } from "react";
import type { FormDescriptionProps } from "./form.types";
import { cn } from "../../utils";

export const FormDescription = forwardRef<
  HTMLParagraphElement,
  FormDescriptionProps
>((props, ref) => {
  const { children, className, ...restProps } = props;

  return (
    <p
      className={cn([[className, "text-sm text-gray-500"]])}
      ref={ref}
      {...restProps}
    >
      {children}
    </p>
  );
});

FormDescription.displayName = "FormDescription"