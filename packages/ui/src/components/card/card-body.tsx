import { forwardRef } from "react";
import { CardBodyProps } from "./card.types";
import { cn } from "../../utils";

export const CardBody = forwardRef<HTMLElement, CardBodyProps>((props, ref) => {
  const { children, className, ...restProps } = props;

  return (
    <section className={cn([className, "dark:text-white"])} ref={ref} {...restProps}>
      {children}
    </section>
  );
});

CardBody.displayName = "CardBody";
