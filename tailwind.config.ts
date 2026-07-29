// tailwind.config.ts
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
        // Tu paleta personalizada
        brand: {
          dark: "#384358",    // El azul pizarra principal
          green: "#4b7f53",   // El verde naturaleza/campo
          deep: "#336d60",    // El verde profundo para acentos
          light: "#dbdde3",   // El gris claro para fondos
          muted: "#838c9d",   // El gris para textos secundarios
          slate: "#959db4",   // Tonos intermedios
          silver: "#9bacb3",
          indigo: "#5a5c7b",
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
  // ... existing code ...
};
export default config;