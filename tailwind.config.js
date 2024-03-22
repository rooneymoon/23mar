/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "index.html"],
  theme: {
    colors: {
      'royal': '#4851f4',
      'cornflower': '#add2ff',
      'chinese': '#0c0e1d',
      'seagreen': '#a4cd89',
      'cyclamen': '#f271aa',
      'french': '#70afff',
      'shampoo': '#fbc1f1',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')]
}

