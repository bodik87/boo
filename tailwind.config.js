/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        show: "show .3s ease-in-out",
      },
      keyframes: {
        show: {
          "0%": {
            opacity: 0,
          },
        },
        "100%": {
          opacity: 1,
        },
      },
      animation: {
        hide: "hide .3s ease-in-out",
      },
      keyframes: {
        hide: {
          "0%": {
            opacity: 1,
          },
        },
        "100%": {
          opacity: 0,
        },
      },
    },
  },
  plugins: [],
};
