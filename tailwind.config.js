/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./preact-components/**/*.js', './preact-components/**/*.liquid'],
  theme: {
    container: {
      center: true
    },
    extend: {
      zIndex: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9
      }
    },
  },
  plugins: [],
}

