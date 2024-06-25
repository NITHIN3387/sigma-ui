import { forwardRef } from "react";
import { CardProps } from "./card.types";
import { cn } from "../../utils";

export const Card = forwardRef<HTMLElement, CardProps>((props, ref) => {
  const { children, className, ...restProps } = props;

  return (
    <article className={cn([className, "border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm p-4 w-fit space-y-4 bg-light-primary-bg dark:bg-dark-primary-bg"])} ref={ref} {...restProps}>
      {children}
    </article>
  );
});

Card.displayName = "Card";
