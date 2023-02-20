/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Inter",
        serif: "Lora",
        mono: "Inconsolata",
      },
      colors: {
        primary: {
          300: "#3A3A3A",
          400: "#2D2D2D",
          500: "#1F1F1F",
          600: "#050505",
        },
        secondary: {
          400: "#757575",
          300: "#E9E9E9",
          200: "#F4F4F4",
        },
        danger: "#FF5252",
        accent: "#A445ED",
      },
    },
  },
  plugins: [],
};
