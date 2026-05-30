import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#151922",
        paper: "#fbfaf7",
        electric: "#0a7cff",
        citrus: "#f5b642",
        coral: "#ff5d4f",
        mint: "#6ee7b7"
      },
      boxShadow: {
        lift: "0 24px 70px rgba(21, 25, 34, 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
