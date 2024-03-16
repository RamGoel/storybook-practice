import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/stories/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      primary: "#6200EE",
      secondary: "#D0D5DD",
      success: "#2DB84C",
      warning: "#FBC000",
      error: "#E25A71",
      border: "#47BBEE",
      opaque: "#EDFAFF",
    },
    fontSize: {
      xs: "12px", //subtitle
      sm: "14px", //caption
      base: "16px", //paragraph (default)
      lg: "18px", //subheading2
      xl: "20px", //subheading1
      "2xl": "24px", //heading4
      "3xl": "32px", //heading3
      "4xl": "48px", //heading2
      "5xl": "64px", //heading1
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        custom: ["WorkSansFont", "sans"],
      },
    },
  },
  plugins: [],
};
export default config;

