/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/layouts/*.{handlebars,html,js}',
    './views/*.{handlebars,html,js}',
  ],
  theme: {
    extend: {},
    colors: {
      darkblue: '#2F4056',
      teal: '#2F4056',
      green: '#2F4056',
      lavender: '#2F4056',
      paleGreen: '#2F4056',
      ghostWhite: '#E6E7EF',
    },
  },
  plugins: [require('daisyui')],
};

