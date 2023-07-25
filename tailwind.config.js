/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',


  ],
  theme: {
    
    screens: {
    
      'mobile': '375px', 
      'tablet': '768px',
      'desktop': '1440px',

    },
    letterSpacing: {
      'close':'-0.0125em',
      'closer':'-0.015625em',
      'closest':'-0.020625em',
    },
    
    lineHeight: {
      '19': '1.1875rem',
      '20': '1.25rem',
      '22': '1.375rem',
      '23': '1.4375rem',
      '26': '1.625rem',
      '29': '1.8125rem',
      '35': '2.1875rem',

    },
    fontSize: {
      '13x': '0.8125rem',
      '14x': '0.875rem',
      '15x': '0.9375rem',
      '16x': '1rem',
      '18x': '1.125rem',
      '20x': '1.25rem',
      '24x': '1.5rem',
    },

    extend: {



      colors: {
        'xFuchisia-600': '#AD1FEA',
        'xIndigo-600': '#4661E6',
        'xSlate-700': '#373F68',
        'xSiolet-50': '#F2F4FF',
        'xSlate-50': '#F7F8FD',
        'xSlate-600': '#3A4374',
        'xSlate-500':'#647196',
        'xOrange-300': '#F49F85',
        'xBlue-400': '#62BCFA',
        'xRed-600': '#D73737',


      },

    },
  },
  plugins: [
  ],
}