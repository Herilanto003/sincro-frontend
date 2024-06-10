/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Ajoutez vos familles de polices personnalisées ici
        sans: ["Poppins", "sans-serif"],
        // serif: ['Merriweather', 'serif'],
        // mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
};
