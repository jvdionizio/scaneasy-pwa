const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: 12,
      sm: 14,
      md: 16,
      '2md': 18,
      '3md': 20,
      lg: 24,
      xl: 32,
    },
    colors: {
      transparent: 'transparent',

      black:'#000',

      white: '#fff',

      green: {
        500: '#00A281',
        200: '#00DEB0',
      },

      gray: {
        900: '#121214',
        800: '#202024',
        850: '#000000b3',
        400: '#7c7c8a',
        200: '#B2B2B2',
        100: '#E1E1E6',
      },

      yellow: {
        200: '#F9EBC1',
      },

      red: {
        500: '#C95747',
      },

      blue: {
        700: '#1E2358',
        400: '#363F9D',
        smoked: '#1E235899',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
