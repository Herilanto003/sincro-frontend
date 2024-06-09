/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e1f7ff",
          100: "#b7e7fb",
          200: "#8bcef6",
          300: "#60b2f2",
          400: "#3e92ee",
          500: "#2d6fd4",
          600: "#204da6",
          700: "#142f77",
          800: "#041448",
          900: "#00031b",
        },
        secondary: {
          50: "#fff4db",
          100: "#ffe1af",
          200: "#ffce7f",
          300: "#ffba4d",
          400: "#ffa61d",
          500: "#e68d05",
          600: "#b36d00",
          700: "#804e00",
          800: "#4e2f00",
          900: "#1e0f00",
        },
        accent: {
          50: "#e9f4ff",
          100: "#c6d6ed",
          200: "#a2b8dc",
          300: "#7e98ce",
          400: "#5a76bf",
          500: "#405aa5",
          600: "#314381",
          700: "#232e5d",
          800: "#141e3a",
          900: "#050b19",
        },
      },
    },
  },
  plugins: [],
};
