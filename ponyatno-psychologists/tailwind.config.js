/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "425px",
      },
      colors: {
        "green-pon": "#10CE9A",
      },
    },
  },
  plugins: [],
};
