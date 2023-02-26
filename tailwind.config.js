/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "preview-block": "880px",
      },
      colors: {
        "main": "#0597F2",
        "primary": "#0597F2",
      },
      backgroundColor: {
        "main": "#0597F2",
        "block": "#161D27"
      },
    },
  },
  plugins: [],
};