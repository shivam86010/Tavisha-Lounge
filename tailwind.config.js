/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        "royal-maroon": "#7A1E1E",
        "royal-maroon-dark": "#5A1515",
        "metallic-gold": "#D4AF37",
        "soft-cream": "#FAF3E0",
        charcoal: "#2E2E2E",
        "burnt-orange": "#C55A11",
        "burnt-orange-dark": "#A4490E",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
