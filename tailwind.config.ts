import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        primary: "#a14f7e",
        secondary: "#714b61",
        accent: "#876363",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
      boxShadow: {
        custom: "4px 4px 4px #714b61",
      },
      keyframes: {
        bounceX: {
          "0%, 100%": { transform: "translateX(-25%)" },
          "50%": { transform: "translateX(25%)" },
        },
      },
      animation: {
        bounceX: "bounceX 1s ease-in-out infinite",
      },
    },
  },
};
export default config;
