/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      josefin: ["Josefin Sans", "sans-serif"],
      lora: ["Lora", "serif"],
      varela: ["Varela", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
