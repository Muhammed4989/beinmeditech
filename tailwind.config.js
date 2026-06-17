/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark purple-navy — exact site colors
        primary: {
          50:  '#F3F6FD',  // light section background
          100: '#EDEAFF',  // very light purple
          200: '#D5D0F5',
          300: '#8877ED',  // light purple / icon color
          400: '#6355C4',
          500: '#3D3568',  // mid purple
          600: '#28214C',  // main dark (section backgrounds)
          700: '#1E1A3A',
          800: '#141025',  // very dark purple
          900: '#100D1F',  // near black
          DEFAULT: '#28214C',
        },
        // Orange accent — exact site CTA color
        orange: {
          50:  '#FFE1CD',
          100: '#FCA972',
          DEFAULT: '#FF6400',
          600: '#E05500',
          700: '#C04400',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'count-up': 'countUp 2s ease-out forwards',
      },
    },
  },
  plugins: [],
};
