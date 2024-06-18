import type { Config } from 'tailwindcss'

import colors from 'tailwindcss/colors'

const colorsConfig = {
  ...colors,
  primary: {
    50: '#EFF4FF',
    100: '#D1E0FF',
    200: '#B2CCFF',
    300: '#84ADFF',
    400: '#528BFF',
    500: '#2970FF',
    600: '#155EEF',
    700: '#004EEB',
    800: '#0040C1',
    900: '#00359E',
    950: '#002266',
    DEFAULT: '#2970FF',
  },
  header: '#FF8A08',
  danger: '#E9523D',
  white: '#ffffff',
  black: '#000000',
  brand: {
    50: '#EFF4FF',
    100: '#D1E0FF',
    200: '#B2CCFF',
    300: '#84ADFF',
    400: '#528BFF',
    500: '#2970FF',
    600: '#155EEF',
    700: '#004EEB',
    800: '#0040C1',
    900: '#00359E',
    950: '#002266',
  },
}
export default <Partial<Config>>{
  darkMode: 'class',
  theme: {
    screens: {},
    extend: {
      colors: colorsConfig,
    },
  },
  variants: {},
  plugins: [],
  purge: {},
}
