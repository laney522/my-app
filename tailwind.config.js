/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    //"./src/**/*.{html,js}"
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary1: "#495E57",
        primary2: '#F4CE14',
        secondary1: '#EE9972',
        secondary2: '#FBDABB',
        grey1: '#EDEFEE',
        grey2: '#333333'
      }
    },
  },
  plugins: [],
}

