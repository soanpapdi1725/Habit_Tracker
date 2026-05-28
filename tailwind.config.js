/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{jsx,js,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        app: {
          bg: "#0F0F14",
          surface: "#1A1A24",
          "surface-light": "#242435",
        },
        txt: {
          primary: "#F0F0F5",
          secondary: "#8E8EA0",
          muted: "#5A5A6E",
        },
        done: {
          DEFAULT: "#34D399",
          soft: "#34D3991F",
          border: "#34D39940",
        },
        streak: {
          DEFAULT: "#F59E0B",
          soft: "#F59E0B1F",
          border: "#F59E0B40",
        },
        accent: {
          DEFAULT: "#818CF8",
          soft: "#818CF81F",
          border: "#818CF84D",
        },
        danger: {
          DEFAULT: "#EF4444",
          soft: "#EF44441F",
        },
        card: {
          border: "#FFFFFF0F",
        },
      },
    },
  },
  plugins: [],
};
