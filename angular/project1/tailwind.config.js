/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      boxShadow: {
        primary: '0 8px 8px rgba(121, 197, 239, 0.38)'
      }
    },
  },
  plugins: [],
}