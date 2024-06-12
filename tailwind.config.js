import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      brand: "#8D7FC7",
      darkBrand: "#62588b",
    },
    extend: {},
  },
  plugins: [daisyui],
};
