/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
        "rb-white": "#FFFFFF",
        "rb-black": "#000000",
        "rb-green": "#60EA9F",
        "rb-light-green": "#D7FC6E",
        "rb-red": "#FF5C5D",
        "rb-light-red": "#FF7051",
        "rb-light-blue": "#A399FF",
        "rb-purple": "#DD7EFF",
        "rb-light-purple": "#E293FF",
        "rb-pinkish": "#FF8FE8",
        "rb-heavy-yellow": "#FFC900",
        "rb-medium-yellow": "#FEE333",
        "rb-light-yellow": "#D7FC6E",
        "rb-firozi": "#39DCFF",
        "rb-btn-green": "#61CE70",
      },

      fontFamily: {
        satoshi: ["Satoshi", "Segoe-UI", "sans-serif"],
        mabry: ["Mabry Pro", "Segoe-UI", "sans-serif"],
        inter: ["Inter", "Segoe-UI", "sans-serif"],
      },

      boxShadow: {
        custom: "3px 3px 0 0 #000000",
        hover: "5px 5px 0 0 #000000",
      },
    },
  },
  plugins: [],
};
