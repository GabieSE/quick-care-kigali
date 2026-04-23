/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"Instrument Sans"', 'sans-serif'],
      },
      letterSpacing: {
        tight: '-0.025em',
        tighter: '-0.04em',
      },
    },
  },
  plugins: [],
}
