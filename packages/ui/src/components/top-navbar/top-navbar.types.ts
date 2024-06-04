import { VariantProps } from "class-variance-authority";
import type { HTMLAttributes, Dispatch, SetStateAction } from "react";
import { topNavbarConfig } from "./top-navbar-title";

export interface TopNavbarProps extends HTMLAttributes<HTMLElement> {}

export interface TopNavbarTitleProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof topNavbarConfig> {}

export interface TopNavbarListProps extends HTMLAttributes<HTMLUListElement> {}

export interface ToggleContextType {
  isToggle: boolean;
  setIsToggle: Dispatch<SetStateAction<boolean>>;
}

export interface TopNavbarChildrenProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface TopNavbarItemProps extends Omit<HTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string
}
