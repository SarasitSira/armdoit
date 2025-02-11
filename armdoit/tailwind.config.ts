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
        background: "var(--background)",
        foreground: "var(--foreground)",
        textcl: "#303030",
        dark: "#404040",
        base: "#969696",
        light: "#DDDDDD"
      },
      fontFamily: {
        quark: ["Quark Light"],
      },
      borderRadius: {
        portrait: "50% 10% 50% 10%"
      }
    },
  },
  plugins: [],
};
export default config;
