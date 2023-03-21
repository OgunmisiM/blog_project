/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        base: "'GT Walsheim Pro', 'san serif';",
        heading: "'Cooper Std','san serif';",
      },
      colors: {
        hot_yellow: "#c28f0b",
      }
    },
  },
  plugins: [],
}
