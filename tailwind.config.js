/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text-black': '#000403',
        'main-bg':'111111',
        'footer-bg':'#AEAEAE',
      },
    },
  },
  plugins: [],
}