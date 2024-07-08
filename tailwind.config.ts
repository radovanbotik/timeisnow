import type { Config } from "tailwindcss";

const config: Config = {
  // important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/assets/svg/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: "#c5ff26",
        accent: "#d2d2d2",
        background: "#e9e9e9",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        "10xl": "10rem",
        "11xl": "12rem",
        "12xl": "14rem",
        "13xl": "16rem",
        "14xl": "18rem",
        "15xl": "20rem",
      },
      fontFamily: {
        youth: ["var(--font-youth)"],
        druk: ["var(--font-druk)"],
        drukText: ["var(--font-druk-text)"],
        drukWide: ["var(--font-druk-wide)"],
        drukTextWide: ["var(--font-druk-text-wide)"],
        drukCondensed: ["var(--font-druk-condensed)"],
        drukXCondensed: ["var(--font-druk-Xcondensed)"],
        drukXXCondensed: ["var(--font-druk-XXcondensed)"],
      },
      maxWidth: {
        "8xl": "1366px",
        "9xl": "1440px",
        "10xl": "1600px",
      },
    },
  },
  plugins: [
    "prettier-plugin-tailwindcss",
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
  ],
};
export default config;

//  {druk,drukText,drukWide,drukTextWide,drukCondensed,drukXCondensed,drukXXCondensed}
