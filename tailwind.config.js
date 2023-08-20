/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');
const rotateY = plugin(function ({ addUtilities }) {
  addUtilities ({
    '.rotate-y-180': {
      transform: "rotateY(180deg)"
    },
    '.-rotate-y-180': {
      transform: "rotateY(-180deg)"
    }
  })
})

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "c-primary" : "#01051e",
        "c-primary-light" : "#020726",
        "c-primary-dark" : "#010417",
        "c-secondary" : "#ff7d3b",
        "c-gray" : "#333",
        "c-white" : "#fff",
        "c-blob" : "#A427DF",
      }
    },
    container:{
      center:true,
      padding:{
        DEFAULT:'20px',
        md : '5'
      },
    },
  },
  plugins: [rotateY],
}

