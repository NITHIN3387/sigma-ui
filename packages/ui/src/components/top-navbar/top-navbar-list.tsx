import { forwardRef } from "react";
import { TopNavbarListProps } from "./top-navbar.types";
import { cn } from "../../utils";
import { useToggle } from "./top-navbar";

export const TopNavbarList = forwardRef<HTMLUListElement, TopNavbarListProps>(
  (props, ref) => {
    const { children, className, ...restProps } = props;

    const { isToggle, setIsToggle } = useToggle();

    return (
      <>
        <ul
          className={cn(["sm:flex w-full gap-8 hidden", className])}
          ref={ref}
          {...restProps}
        >
          {children}
        </ul>
        <div
          className={`fixed top-0 left-0 h-full w-full grid grid-cols-[auto_1fr] sm:!hidden transition duration-300 ${isToggle ? "-translate-x-0" : "-translate-x-full"}`}
        >
          <ul
            className={cn([
              className,
              `flex flex-col top-0 left-0 bg-white dark:bg-zinc-950 gap-4 p-4`,
            ])}
            ref={ref}
            {...restProps}
          >
            {children}
          </ul>
          <div className={`bg-black/70 transition ${isToggle ? "delay-200 opacity-100" : "opacity-0"}`} onClick={() => setIsToggle(false)} />
        </div>
      </>
    );
  },
);
