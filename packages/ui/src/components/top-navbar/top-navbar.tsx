import { forwardRef, createContext, useContext, useState } from "react";
import { ToggleContextType, TopNavbarProps } from "./top-navbar.types";
import { cn } from "../../utils";
import { NavbarToggleIcon } from "sigma-ui-icons"
import clsx from "clsx";

const ToggleContext = createContext<ToggleContextType>({isToggle: false, setIsToggle: () => null})

export const useToggle = () => useContext(ToggleContext)

export const TopNavbar = forwardRef<HTMLElement, TopNavbarProps>(
  (props, ref) => {
    const { children, className, ...restProps } = props;

    const [isToggle, setIsToggle] = useState<boolean>(false)

    const defaultClassNames = clsx(
      "md:px-8 md:py-4 md:gap-10",
      "sm:px-6 sm:py-3 sm:gap-3",
      "flex items-center p-3 gap-2 border-b border-b-gray-300",
      "dark:border-b-gray-900"
    )

    return (
      <ToggleContext.Provider value={{isToggle, setIsToggle}}>
        <nav className={cn([defaultClassNames, className])} ref={ref} {...restProps}>
          <NavbarToggleIcon className="sm:hidden dark:fill-white" height={45} fill="white" onClick={() => setIsToggle(true)}/>
          {children}
        </nav>
      </ToggleContext.Provider>
    );
  },
);
