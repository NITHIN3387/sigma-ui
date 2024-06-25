"use client"

import { forwardRef, useEffect, useState } from "react";
import { ThemeTogglerProps } from "./theme-toggler.types";
import { cn } from "../../utils";
import { DarkModeIcon, LightModeIcon } from "sigma-ui-icons";

export const ThemeToggler = forwardRef<HTMLButtonElement, ThemeTogglerProps>(
  (props, ref) => {
    const { className, theme = "light", ...restProps } = props;

    const [userTheme, setUserTheme] = useState<"dark" | "light">(
      (localStorage.getItem("sigma-ui-theme") as "dark" | "light") || theme,
    );

    useEffect(() => {
      if (!userTheme) localStorage.setItem("sigma-ui-theme", theme);

      toggleTheme(userTheme);
    }, []);

    const toggleTheme = (theme: "dark" | "light") => {
      theme === "dark"
        ? document.documentElement.classList.add("dark")
        : document.documentElement.classList.remove("dark");

      localStorage.setItem("sigma-ui-theme", theme);
      setUserTheme(theme);
    };

    return (
      <button
        className={cn([
          "dark:text-white hover:bg-black/10 dark:hover:bg-white/15 p-2 rounded-full",
          className,
        ])}
        onClick={() =>
          userTheme === "dark" ? toggleTheme("light") : toggleTheme("dark")
        }
        ref={ref}
        {...restProps}
      >
        {userTheme === "dark" ? (
          <DarkModeIcon height={20} width={20} />
        ) : (
          <LightModeIcon height={20} width={20} />
        )}
      </button>
    );
  },
);

ThemeToggler.displayName = "ThemeToggler";
