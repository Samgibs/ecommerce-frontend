module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        blue: '#1DA1F2',
        grey: '#657786',
        dark: '#000000',
        'grey-dark': '#2E2E2E',
      },
      transitionProperty: {
        'width': 'width',
        'spacing': 'margin, padding',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
