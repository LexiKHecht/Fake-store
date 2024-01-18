/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // files locations go here
    // Ex: "./views/layouts/*.{handlebars,html,js}"
  ],
  theme: {
    extend: {},
    colors: {
    //   custom colors go here
    //   Ex: ashGray: "#99B7B8"
    //   then use like normal color in html
    },
  },
  plugins: [require("daisyui")],
};
