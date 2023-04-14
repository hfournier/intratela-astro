/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,json,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FFF0E5",
          100: "#FFE1CC",
          200: "#FFC499",
          300: "#FFA666",
          400: "#FF8833",
          500: "#FF6A00",
          600: "#cc5500",
          700: "#994000",
          800: "#662B00",
          900: "#331500",
        },
        secondary: {
          50: "#E5F4FF",
          100: "#CCEAFF",
          200: "#99D5FF",
          300: "#66BFFF",
          400: "#33AAFF",
          500: "#0095FF",
          600: "#0077cc",
          700: "#005999",
          800: "#003C66",
          900: "#001E33",
        },
      },
      fontFamily: {
        cunia: ["Cunia", "sans-serif"],
      },
    },
  },
  plugins: [],
};
