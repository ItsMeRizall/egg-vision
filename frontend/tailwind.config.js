/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        maroon: {
          600: "#800000", // Ganti dengan kode warna merah maroon yang Anda inginkan
          700: "#690000", // Warna lebih gelap untuk hover
        },
      },
    },
  },
  plugins: [],
};
