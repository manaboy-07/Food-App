/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00302E",

          secondary: "#E2B887",

          accent: "#06E775",

          neutral: "#1f2937",

          "base-100": "#e5e7eb",

          info: "#C92C33",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },

  plugins: [require("daisyui")],
};
