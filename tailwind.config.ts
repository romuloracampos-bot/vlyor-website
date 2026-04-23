import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta principal: preto profundo + dourado envelhecido + bege pergaminho
        ink: {
          DEFAULT: "#0f0f0f",
          softer: "#1a1a1a",
          mid: "#2a2420",
        },
        gold: {
          DEFAULT: "#c9a961",
          dark: "#a8893f",
          darker: "#412402",
        },
        parchment: {
          DEFAULT: "#faf7f1",
          border: "#e8dfc7",
          deep: "#633806",
        },
        cream: {
          DEFAULT: "#f5f1e8",
          subtle: "#f9f6ef",
        },
        mute: {
          DEFAULT: "#bdbdbd",
          deeper: "#8a8a8a",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
        prose: "720px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
