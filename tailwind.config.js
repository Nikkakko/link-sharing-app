/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#633CFF',
        primaryHover: '#BEADFF',
        lightPurple: '#EFEBFF',
        darkGrey: '#333333',
        lightGrey: '#FAFAFA',
        customGrey: '#737373',
        borders: '#D9D9D9',
        customRed: '#FF3939',
      },
    },
  },
  plugins: [],
};
