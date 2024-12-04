import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          text: "#697586",
          50: "#e8eaef",
          100: "#b6bfce",
          200: "#939fb7",
          300: "#627496",
          400: "#435981",
          500: "#142f62",
          600: "#122b59",
          700: "#0e2146",
          800: "#0b1a36",
          900: "#081429",
        },
        yellow: {
          50: "#f7f3ea",
          100: "#e7d9be",
          200: "#dcc69e",
          300: "#ccad72",
          400: "#c29d56",
          500: "#b3842c",
          600: "#a37828",
          700: "#7f5e1f",
          800: "#624918",
          900: "#4b3712",
        },
      },
      fontFamily: {
        Playfair_Display: ["var(--font-playfair-display)", "serif"],
        lato: ["var(--font-lato)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
