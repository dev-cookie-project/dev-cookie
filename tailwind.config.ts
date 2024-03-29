import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        "128": "100%",
        "129": "25rem",
        "80": "80%",
        "70": "70%",
        "130": "90%",
      },
      height: {
        "100": "38rem",
        "200": "45rem",
        "300": "100%",
        "400": "90%",
        "500": "80%",
        "600": "70%",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
