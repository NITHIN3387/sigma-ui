import { VariantProps } from "class-variance-authority";
import type { HTMLAttributes, Dispatch, SetStateAction } from "react";
import { topNavbarTitleConfig } from "./top-navbar-title";
import { topNavbarConfig } from "./top-navbar";

export interface TopNavbarProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof topNavbarConfig> {}

export interface TopNavbarTitleProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof topNavbarTitleConfig> {}

export interface TopNavbarListProps extends HTMLAttributes<HTMLUListElement> {}

export interface ToggleContextType {
  isToggle: boolean;
  setIsToggle: Dispatch<SetStateAction<boolean>>;
  toggle: "sm" | "md" | "lg" | "xl" | "none";
}

export interface TopNavbarChildrenProps
  extends HTMLAttributes<HTMLDivElement> {}

export interface TopNavbarItemProps
  extends Omit<HTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
}
