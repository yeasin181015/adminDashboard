/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      lgxl: "1165px",
      xl: "1280px",
      "2xl": "1366px",
    },
    extend: {
      colors: {
        customGreen: "rgba(33, 150, 83, 0.2)",
        customBlue: "rgba(242, 248, 255, 1)",
        custonTimebg: "rgba(221, 225, 228, 0.22)",
        customRed: "rgba(235, 87, 87, 0.2)",
      },
    },
  },
  plugins: [],
};
