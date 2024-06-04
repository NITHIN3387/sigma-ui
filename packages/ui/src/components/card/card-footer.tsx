import { forwardRef } from "react";
import { CardFooterProps } from "./card.types";
import { cn } from "../../utils";

export const CardFooter = forwardRef<HTMLElement, CardFooterProps>((props, ref) => {
  const { children, className, ...restProps } = props;

  return (
    <footer className={cn([className, "dark:text-white"])} ref={ref} {...restProps}>
      {children}
    </footer>
  );
});

CardFooter.displayName = "CardFooter";