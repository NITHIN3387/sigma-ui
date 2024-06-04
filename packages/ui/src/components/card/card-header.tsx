import { forwardRef } from "react";
import { CardHeaderProps } from "./card.types";
import { cn } from "../../utils";

export const CardHeader = forwardRef<HTMLElement, CardHeaderProps>((props, ref) => {
  const { children, className, ...restProps } = props;

  return (
    <header className={cn([className, "dark:text-white"])} ref={ref} {...restProps}>
      {children}
    </header>
  );
});

CardHeader.displayName = "CardHeader";
