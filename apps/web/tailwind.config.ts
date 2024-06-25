import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
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

export default config;