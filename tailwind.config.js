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
        33: "33rem",
        28: "28rem",
      },
      screens: {
        sm: "280px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1330px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
