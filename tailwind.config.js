/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xm':'430px',
      'sm': '576px',    // Small screens (phones)
      'md': '768px',    // Medium screens (tablets)
      'lg': '992px',    // Large screens (desktops)
      'xl': '1440px',   // Extra-large screens (large desktops)
      'helg': '1010px',
      'hexl':'1480px',
      'edmd': '500px',
      'edlg': '1550px',
      'selg': '1330px',
      'semd': '1280px',
      'sesm': '1000px',
      'sexm' : '680px',
      'sklg' : '1500px'
    },
    extend: {

    },
  },
  plugins: [],
}