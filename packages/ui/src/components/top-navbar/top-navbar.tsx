import { forwardRef, createContext, useContext, useState } from "react";
import { ToggleContextType, TopNavbarProps } from "./top-navbar.types";
import { cn } from "../../utils";
import { NavbarToggleIcon } from "sigma-ui-icons";
import clsx from "clsx";
import { cva } from "class-variance-authority";

const ToggleContext = createContext<ToggleContextType>({
  isToggle: false,
  setIsToggle: () => null,
  toggle: "sm",
});

export const useToggle = () => useContext(ToggleContext);

export const topNavbarConfig = cva("dark:fill-white", {
  variants: {
    toggle: {
      sm: "sm:hidden",
      md: "md:hidden",
      lg: "lg:hidden",
      xl: "xl:hidden",
      none: "hidden"
    },
  },
  defaultVariants: {
    toggle: "sm",
  },
});

export const TopNavbar = forwardRef<HTMLElement, TopNavbarProps>(
  (props, ref) => {
    const { children, className, toggle = "sm", ...restProps } = props;

    const [isToggle, setIsToggle] = useState<boolean>(false);

    const defaultClassname = clsx(
      "md:px-8 md:py-4 md:gap-10",
      "sm:px-6 sm:py-3 sm:gap-3",
      "flex items-center p-3 gap-2 border-b border-b-gray-300",
      "dark:border-b-gray-900",
    );

    return (
      <ToggleContext.Provider value={{ isToggle, setIsToggle, toggle: toggle ? toggle : "sm" }}>
        <nav
          className={cn([defaultClassname, className])}
          ref={ref}
          {...restProps}
        >
          <NavbarToggleIcon
            className={cn(topNavbarConfig({ toggle }))}
            height={45}
            onClick={() => setIsToggle(true)}
          />
          {children}
        </nav>
      </ToggleContext.Provider>
    );
  },
);
