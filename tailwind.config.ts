import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  "darkMode":"class",
  theme: {
    extend: {
      colors:{
        //THEME LIGHT
        "light-principal": "#F0EDF5",
        "light-card": "#FFFFFF",
        "light-text": "#010101",
        "light-red":"#F00C1D",
        "light-text-secundary": "#899095",
        "light-primary": "#0070F0",
          
        //THEME DARK

        "dark-principal": "#010001",
        "dark-card": "#0A090A",
        "dark-text": "#FCF9F9",
        "dark-text-secundary": "#666",
        "dark-primary": "#0070F0",
   
   },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
