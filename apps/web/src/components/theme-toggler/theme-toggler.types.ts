import type { ButtonHTMLAttributes } from "react";

export interface ThemeTogglerProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: "dark" | "light"
  }
