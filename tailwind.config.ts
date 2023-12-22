import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Container size
    screens: {
      sm: "576px",
      md: "768px",
      lg: "1110px",
    },
    // Container resize
    container: {
      center: true,
      padding: ".75rem",
    },
    extend: {
      colors: {
        darkGray: "#bbb",
        lightGray: "#e6e6e6",
      },
    },
  },
  plugins: [],
};
export default config;
