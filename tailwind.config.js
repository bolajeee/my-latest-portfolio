/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
        primary: {
          DEFAULT: 'rgb(var(--primary))',
          foreground: 'rgb(var(--background))',
        },
        secondary: {
          DEFAULT: 'rgb(var(--secondary))',
          foreground: 'rgb(var(--background))',
        },
        destructive: {
          DEFAULT: 'hsl(0 100% 50%)',
          foreground: 'rgb(var(--background))',
        },
        accent: {
          DEFAULT: 'rgb(var(--primary))',
          foreground: 'rgb(var(--background))',
        },
        border: 'rgb(var(--secondary))',
        input: 'rgb(var(--secondary))',
      },
    },
  },
  plugins: [],
  include: ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  exclude: ["node_modules"],
};
