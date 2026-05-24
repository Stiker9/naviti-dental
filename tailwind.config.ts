import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./lib/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1B6CA8",
        "primary-dark": "#145A8F",
        accent: "#F5A623",
        bg: "#F8FAFB",
        surface: "#FFFFFF",
        text: "#1A2332",
        "text-muted": "#6B7C93",
        success: "#27AE60",
        border: "#E2E8F0",
      },
      boxShadow: {
        card: "0 2px 12px rgba(0,0,0,0.08)",
      },
      borderRadius: {
        DEFAULT: "0.75rem",
      },
      fontFamily: {
        sans: ["var(--font-pt-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
