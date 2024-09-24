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
        background: "rgba(var(--background))",
        textcolour: "rgba(var(--textcolour))",
        light: "rgba(var(--light))",
        dark: "rgba(var(--dark))",
        royal: "rgba(var(--royal))",
        runescape: "rgba(var(--runescape))",
      },
    },
  },
  plugins: [],
};
export default config;
