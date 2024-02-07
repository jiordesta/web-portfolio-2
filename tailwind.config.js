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
      'edmd': '1000px',
      'edsm': '680px',
      'edlg': '1460px'
    },
    extend: {

    },
  },
  plugins: [],
}