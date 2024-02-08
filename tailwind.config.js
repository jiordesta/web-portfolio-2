/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '576px',    // Small screens (phones)
      'md': '768px',    // Medium screens (tablets)
      'lg': '992px',    // Large screens (desktops)
      'xl': '1200px',   // Extra-large screens (large desktops)
      'edmd': '500px',
      'edlg': '1550px',
      'selg': '1330px',
      'semd': '1280px',
      'sesm': '1000px',
      'sexm' : '680px'
    },
    extend: {

    },
  },
  plugins: [],
}