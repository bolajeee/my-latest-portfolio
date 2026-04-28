/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
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
        card: "rgb(var(--card-rgb))",
        border: "rgb(var(--border-rgb))",
        muted: {
          DEFAULT: "rgb(var(--muted-rgb))",
          foreground: "rgb(var(--muted-foreground-rgb))",
        },
        primary: {
          DEFAULT: "rgb(var(--primary-color))",
          foreground: "rgb(var(--primary-foreground-rgb))",
        },
        secondary: {
          DEFAULT: "rgb(var(--secondary-color))",
          foreground: "rgb(var(--secondary-foreground-rgb))",
        },
        accent: {
          DEFAULT: "rgb(var(--accent-color))",
          foreground: "rgb(var(--accent-foreground-rgb))",
        },
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
};
