/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: 'hsl(0, 0%, 100%)',
        'lightis-pink': 'hsl(275, 100%, 97%)',
        'grayis-purple': 'hsl(292, 16%, 49%)',
        'dark-purple': 'hsl(292, 42%, 14%)',
        'darker-purple': '#301534',
        pink: '#AD28EB',
      },
    },
  },
  plugins: [],
};
