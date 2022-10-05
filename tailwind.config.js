/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: { fontFamily: { montserrat: "Montserrat" } },
    colors: {
      gray: {
        "100": "#c9d0d2",
        "200": "#a1a5a6",
        "300": "#0d0d0d",
        "400": "rgba(201, 208, 210, 0.85)",
      },
    },
    fontSize: { base: "14px", lg: "16px" },
    screens: { md: { max: "768px" } },
  },
  corePlugins: { preflight: false },
};
