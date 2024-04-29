/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        470: "470px",
        400: "400px",
      },
       margin: {
        '33': '33rem',
        '28': '28rem'

      },
    },
  },
  plugins: [],
};

