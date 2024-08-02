/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        13: '3.25rem', //52p
      },
      colors: {
        'header-gray': '#474747',
        'btn-gray': '#D0D0D0',
        navy: '#091430',
        white: '#fff',
      },
      fontFamily: {
        Suite: ['Suite'],
      },
      boxShadow: {
        '3xl': '0px 5px 5px 0 rgba(0, 0, 0, .5)',
      },
    },
  },
  plugins: [],
};
