import { forwardRef } from "react";
import { CardDescriptionProps } from "./card.types";
import { cn } from "../../utils";

export const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>((props, ref) => {
  const { children, className, ...restProps } = props;

  return (
    <p className={cn([className, "text-sm w-fit text-gray-500"])} ref={ref} {...restProps}>
      {children}
    </p>
  );
});

CardDescription.displayName = "CardDescription";