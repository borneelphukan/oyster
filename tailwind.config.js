/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          100: "#2B7860",
          200: "#04AD79",
          300: "#D8FDF2",
          400: "#F5FFFC",
        },
        blue: {
          100: "#2C5282",
          200: "#3182CE",
          300: "#BEE3F8",
          400: "#EBF8FF",
        },
        red: {
          100: "#9B2C2C",
          200: "#E53E3E",
          300: "#FED7D7",
          400: "#FFF5F5",
        },
        yellow: {
          100: "#975A16",
          200: "#FACD1D",
          300: "#FEFCBF",
          400: "#FFFFF0",
        },
        indigo: {
          100: "#434190",
          200: "#667EEA",
          300: "#C3DAFE",
          400: "#EBF4FF",
        },
        purple: {
          100: "#553C9A",
          200: "#9F7AEA",
          300: "#E9D8FD",
          400: "#FAF5FF",
        },
        gray: {
          100: "#131317",
          200: "#49494D",
          300: "#BBBBBC",
          400: "#E8E8E9",
          500: "#ECEFF1",
        },
        light: "#F9FAFB",
        dark: {
          DEFAULT: "#131317",
          100: "#28282C",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
