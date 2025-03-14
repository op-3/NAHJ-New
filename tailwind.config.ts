// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "nahj-copper": "#C17F59",
        nahj: {
          copper: "#C17F59",
          white: "#FFFFFF",
          light: "#F8F8F8",
          dark: "#2D2D2D",
        },
        borderWidth: {
          "3": "3px",
        },
      },
      animation: {
        "float-slow": "float 7s ease-in-out infinite",
        "float-medium": "float 5s ease-in-out infinite",
        "float-fast": "float 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0)" },
          "50%": { transform: "translateY(20px) rotate(5deg)" },
        },
      },
    },
    darkMode: "class",
  },
  plugins: [],
} satisfies Config;
