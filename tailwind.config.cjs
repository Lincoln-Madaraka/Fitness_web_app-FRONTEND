/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lavender: "#f0e7f4",
        midnightblue: "#110435",
        gray: "#908091",
        black: "#000",
        white: "#fff",
        plum: "#876a9d",
        snow: "#fffafa",
        dimgray: "#5a4b62",
        gray: { "100": "#fffefe", "200": "rgba(0, 0, 0, 0.81)" },
        salmon: "#ff6f6f",
        black: "#000",
        whitesmoke: "#f6f6f6",
      },
      screens: {
        xl: { max: '767px' },
      },
      fontFamily: { inter: "Inter" },
      borderRadius: { "3xs": "10px" },
    },
    fontSize: { "11xl": "30px", "6xl": "25px" },
  },
  corePlugins: { preflight: false },
};



