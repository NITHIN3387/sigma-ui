import { forwardRef } from "react";
import { TopNavbarItemProps } from "./top-navbar.types";
import { cn } from "../../utils";
import clsx from "clsx";

export const TopNavbarItem = forwardRef<HTMLAnchorElement, TopNavbarItemProps>(
  (props, ref) => {
    const { children, className, href, ...restProps } = props;

    const defaultClassNames = clsx(
      window.location.pathname === href ? "text-light-primary dark:text-dark-primary" : "text-light-primary/50 hover:text-light-primary/70 dark:text-dark-primary/50 dark:hover:text-dark-primary/70"
    )

    return (
      <a
        className={cn([defaultClassNames, className])}
        href={href}
        ref={ref}
        {...restProps}
      >
        {children}
      </a>
    );
  },
);
