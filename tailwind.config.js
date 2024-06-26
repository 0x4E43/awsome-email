/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "background-deep": "#344C64",
      light: "#FFF",
      red: "#FF0000",
      blue: "#0096FF",
      primary: "#0096FF",
    },
    fontFamily: {
      sans: ["Helvetica", "Arial", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
