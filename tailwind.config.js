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
      boxShadow: {
        soft: "0 4px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.03)",
        "soft-lg":
          "0 10px 40px -10px rgba(0, 0, 0, 0.12), 0 15px 15px -10px rgba(0, 0, 0, 0.05)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
