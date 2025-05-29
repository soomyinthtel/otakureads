import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background-color)",
        foreground: "var(--foreground-color)",
        primary: "var(--primary-color)",
        bgSecondary: "var(--bg-secondary-color)",
      },
      aspectRatio: {
        custom: "640 / 320", // 2:1 ratio
      },
    },
  },
  plugins: [],
};
export default config;
