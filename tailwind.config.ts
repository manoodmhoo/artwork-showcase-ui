import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
       
      },
      colors: {
        "primary": "#1D7293",
        "secondary": "#073141",
        "tertiary": "#F6FDFF",
        "aliceblue": "#E0EFF4",
        "white": "#FFFFFF",
      },
      fontFamily: {
        "body": ["IBM Plex Sans Thai", "sans-serif"],
      }
    },
  },
  plugins: [],
};
export default config;
