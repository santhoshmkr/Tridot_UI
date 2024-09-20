/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'droid-sans': ['Droid Sans', 'sans-serif'],
        'notoRashi': ['Noto Rashi Hebrew', 'sans-serif']
      },
    },
  },
  plugins: [],
}