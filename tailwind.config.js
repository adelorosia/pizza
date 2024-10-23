/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    container:{
      center:true
    },
    

    fontFamily: {
      FONT_VIGA: ["Viga", "sans-serif"],
      FONT_ROBOTO: ["Roboto", "sans-serif"],
      FONT_SALSA: ["Salsa", "cursive"],
      ANTON: ["Anton", "sans-serif"],
    },
    extend: {
      colors: {
        PRIMARY_BLACK: "#000000",
        SECONDARY_BLACK: "#042337",
        PRIMARY_WHITE: "#ffffff",
        SECONDARY_WHITE: "#f8f8f2",
        bg_DARK: "#282A36",
        bg_LIGHT: "#fcfcfc",
        PRIMARY_BLUE: "#0284c7",
        SECONDARY_BLUE: "#22d3ee",
        DARK_BLUE: "#172554",
        LIGHT_BLUE: "#eff6ff",
        PRIMARY_ORANGE: "#ee8425",
        SECONDARY_ORANGE: "#fdba74",
        PRIMARY_RED: "#dc2626",
        SECONDARY_RED: "#FF3D68",
        PRIMARY_GRAY: "#737373",
        SECONDARY_GRAY: "#a3a3a3",
        SECONDARY_GREEN: "#22c55e",
        PRIMARY_GREEN: "#15803d",
        LIGHT_GRAY: "#e5e7eb",
        DARK_GRAY: "#d1d5db",
        DARK_SLATE: "#0f172a"
      },
    },

  },
  plugins: [],
}