/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "mobile": "350px",
      "tablet": "760px",
      "laptop": "1024px",
      "desktop": "1150px"
    },
    extend: {
      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2c2c5e","700":"#5050a9","800":"#1e40af","900":"#1e3a8a"}
      },
    },
  },
  plugins: [],
});
