import { hexToRgb } from "./hex-to-rgb";

export const TAILWIND_CONFIG = (srcDirExist: boolean) =>
`import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    ${!srcDirExist
      ? `"./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",`
      : `"./src/**/*.{js,ts,jsx,tsx,mdx}",`
    }
  ],
  theme: {
    extend: {
      colors: {
        "light-primary": "rgb(var(--light-primary-color))",
        "dark-primary": "rgb(var(--dark-primary-color))"
      }
    }
  },
  plugins: [],
};

export default config;`;

export const GLOBALS_CSS = (lightThemeColor: string, darkThemeColor: string) =>
`:root {
  --light-primary-color: ${hexToRgb(lightThemeColor)};
  --dark-primary-color: ${hexToRgb(darkThemeColor)};
}`