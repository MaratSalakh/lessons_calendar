import daisyui from "daisyui";
import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      brand: "#8D7FC7",
      darkBrand: "#62588b",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
    },
    extend: {},
  },
  plugins: [daisyui],
};
