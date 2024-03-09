/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-4': '#434346',
        'peanut-pink': '#FDE9EA',
        'peanut-pink-darker': '#EECBC8',
        'peanut-pink-light': '#FEF4F5',
        'peanut-red': '#EA515A',
        'peanut-pink-400': '#F8DFE1',
      },
      fontSize: {
        '4.5xl': ['42px', '54px']
      },
      maxWidth: {
        '6/10': '60%'
      }
    },
  },
  plugins: [],
};

