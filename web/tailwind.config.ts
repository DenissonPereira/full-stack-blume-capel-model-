import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      primary: "#1E6CB7",
      amarelo: "#FFD700",
      laranja: "#FFA500",
      verde: "#008000",
      roxo: "#800080",
      azul_claro: "#7EB9F1",
      azul_escuro: "#144B7F",
      azul_azinzentado: "#5E7D8B",
      branco: "#FFFFFF",
      cinza: "#808080",
      preto: "#000000"
    },
  },
  plugins: [],
};
export default config;
