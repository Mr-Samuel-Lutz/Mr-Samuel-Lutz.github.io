/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  plugins: [
    require("tw-elements/dist/plugin"),
    require("@material-tailwind/react")
  ],
  theme: {
    extend: {},
  },
};
