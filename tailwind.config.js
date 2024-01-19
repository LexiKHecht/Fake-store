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
      teal: '#44848F',
      green: '#A4E034',
      lavender: '#BCA4DB',
      paleGreen: '#EBFFF3',
      ghostWhite: '#E6E7EF',
    },
  },
  plugins: [require('daisyui')],
};

