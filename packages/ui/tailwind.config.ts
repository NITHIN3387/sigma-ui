import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "presets" | "content" | "darkMode" | "theme"> = {
  content: [
    "./src/**/*.tsx",
    "./components/**/*.tsx"
  ],
  darkMode: "class",
  presets: [sharedConfig],
  theme: {
    extend: {
      colors: {
        "light-primary": "rgb(var(--light-primary-color))",
        "dark-primary": "rgb(var(--dark-primary-color))",
        "light-primary-bg": "rgb(var(--light-primary-bg-color))",
        "dark-primary-bg": "rgb(var(--dark-primary-bg-color))",
      }
    }
  }
};

export default config;