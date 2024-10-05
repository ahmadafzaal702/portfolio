import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#bd5d38",
      secondary: "#343a40",
      heading: "#343a40",
      paragraph: "#5e5e5e",
      green: "#68f590",
      "menu-color": "rgba(255, 255, 255, .5);",
      grey: "#F3F3F3",
      "grey-light": "#FAFAFA",
      "green-light": "#d2eff1",

      black: "#000000",
      white: "#ffffff",

    },
    fontFamily: {
      heading: ["Montserrat", "sans-serif"],
      paragraph: ["Cabin", "sans-serif"],
      link: ["Cabin", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
export default config;