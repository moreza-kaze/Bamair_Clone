/** @type {import('tailwindcss').Config} */
/* eslint-env node */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  theme: {
    fontFamily: {
      main: "peyda-regular",
    },
    extend: {
      colors: {
        bamaIr: "#befa00",
      },
    },
  },
  plugins: [],
};
