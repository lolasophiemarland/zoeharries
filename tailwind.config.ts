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
        background: "#F7F5F1",
        foreground: "#2C2C2A",
        graphite: "#4A4A46",
        muted: "#6B6B66",
        subtle: "#8A8A84",
        line: "#E4E2DC",
        card: "#FFFcf8",
        cream: "#F7F5F1",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        heading: "0.01em",
        label: "0.14em",
      },
    },
  },
  plugins: [],
};

export default config;
