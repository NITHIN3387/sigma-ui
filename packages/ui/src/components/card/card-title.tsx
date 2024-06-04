import { forwardRef } from "react";
import { CardTitleProps } from "./card.types";
import { cn } from "../../utils";

export const CardTitle = forwardRef<HTMLParagraphElement, CardTitleProps>((props, ref) => {
  const { children, className, ...restProps } = props;

  return (
    <h3 className={cn([className, "text-2xl font-semibold w-fit dark:text-white"])} ref={ref} {...restProps}>
      {children}
    </h3>
  );
});

CardTitle.displayName = "CardTitle";