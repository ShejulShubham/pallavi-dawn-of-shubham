/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Cinzel", "Playfair Display", "serif"],
        sans: ["Plus Jakarta Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        wedding: {
          bg: "#0B0C10",
          card: "#16181E",
          gold: "#D4AF37",
          goldLight: "#F3E5AB",
          crimson: "#8B1E2D",
          border: "#282B35",
        },
      },
    },
  },
  plugins: [],
};