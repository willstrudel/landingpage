const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: { 

    screens: {
      'xs': '360px',
      // => @media (min-width: 375px)

      'sm': '640px',
      // => @media (min-width: 390px) 

      'md': '768px',
      // => @media (min-width: 768px) 

      'lg': '1024px',
      // => @media (min-width: 1024px)

      'xl': '1280px',
      // => @media (min-width: 1280px) 

      'xxl': '1420px',
      // => @media (min-width: 1420px)

      '2xl': '1536px',
      // => @media (min-width: 1536px) 
    },

    extend: {
      colors: colors,

      fontFamily: {
        'quicksand': ["Quicksand", "sans-serif"],
        'dosis': ["Dosis", "sans-serif"],
        'poiret': ["Poiret One", "cursive"],
        'voltaire': ["Voltaire", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
},
}