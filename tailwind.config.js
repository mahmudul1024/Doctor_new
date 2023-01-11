/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
        },
      },
      "dark",
      "cupcake",
      "light",
      "aqua",
      "retro",
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        googleFont1: ["Staatliches", "cursive"],
        googFont2: ["Oswald", "sans-serif"],
        googFont3: ["Bebas Neue", "cursive"],
        googFont4: ["Kaushan Script", "cursive"],
      },
    },
  },
  plugins: [require("daisyui")],
};
