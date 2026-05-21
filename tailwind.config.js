/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        gold: "#FFD000",
        dark: "#0a0a0a",
        "dark-alt": "#111111",
        "dark-card": "#161616",
      },
      fontFamily: {
        bebas: ["'Bebas Neue'", "sans-serif"],
        inter: ["'Inter'", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.7s ease forwards",
        "pulse-gold": "pulseGold 2s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(255,208,0,0.4)" },
          "50%": { boxShadow: "0 0 20px 8px rgba(255,208,0,0.15)" },
        },
      },
    },
  },
  plugins: [],
};
