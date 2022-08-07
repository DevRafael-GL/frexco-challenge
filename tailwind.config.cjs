/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Roboto, sans-serif",
      },
      colors: {
        green: {
          400: "#8bc34a",
          300: "#8bc34a87",
        },
      },
    },
  },
  plugins: [],
};
