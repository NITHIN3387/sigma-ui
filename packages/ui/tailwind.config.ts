import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "presets" | "content" | "theme"> = {
  content: [
    "./src/**/*.tsx",
    "./components/**/*.tsx"
  ],
  presets: [sharedConfig],
  theme: {
    extend: {
      colors: {
        "light-primary": "rgb(var(--light-primary-color))",
        "dark-primary": "rgb(var(--dark-primary-color))"
      }
    }
  }
};

export default config;