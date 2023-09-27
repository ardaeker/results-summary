import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-navy": "#303B59",
        "light-blue": "#CAC9FF",
        "very-light-blue": "#ECF2FF",
        reaction: "#F55",
        memory: "#FFB21E",
        verbal: "#00BB8F",
        visual: "#1125D6",
      },
      maxWidth: {
        "3xl": "46rem",
      },
      maxHeight: {
        "128": "32rem",
      },
      height: {
        "48": "12.5rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "12xl": "8rem",
      },
      fontSize: {
        "3xl": "2rem",
      },
      gap: {
        "2": "5.06rem",
      },
      padding: {
        "9": "2.38rem",
        "11": "2.87rem",
        "12": "3.38rem",
        "13": "3.44rem",
      },
      margin: {
        "10": "2.56rem",
        "8": "2.19rem",
      },
    },
  },
  plugins: [],
};
export default config;
