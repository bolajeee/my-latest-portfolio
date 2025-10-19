import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background-start-rgb))",
        foreground: "rgb(var(--foreground-rgb))",
        primary: "rgb(var(--primary-color))",
        secondary: "rgb(var(--secondary-color))",
        accent: "rgb(var(--accent-color))",
        orange: "rgb(var(--orange-color))",
        "btn-primary": {
          DEFAULT: "rgb(var(--btn-primary-bg))",
          hover: "rgb(var(--primary-color))",
        },
        "btn-secondary": {
          DEFAULT: "rgb(var(--btn-secondary-bg))",
          hover: "rgb(var(--secondary-color))",
        },
        "btn-orange-solid": {
          DEFAULT: "rgb(var(--btn-orange-solid-bg))",
          hover: "rgb(var(--orange-color))",
        },
        "btn-orange-outline": {
          DEFAULT: "rgb(var(--btn-orange-outline-bg))",
          hover: "rgb(var(--orange-color))",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
