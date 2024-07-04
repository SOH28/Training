import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "primary-theme": 'hsl(230 68% 16%)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "home-button": 'linear-gradient(97.39deg, #1C3679 -2.54%, #2992FE 111.93%)',
        "home-pills-primary": 'linear-gradient(175.17deg, #206AC6 3.89%, rgba(32, 106, 198, 0) 122.38%)',
      },
    },
  },
  plugins: [],
};
export default config;
