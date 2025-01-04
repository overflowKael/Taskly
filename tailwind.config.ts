import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
    },
  },darkMode: "class",
  plugins: [nextui(

    {
      themes: {
        light: {
          layout: {},
          colors: {

          }
        },
        dark: {
          layout: {},
          colors: {
          background: "#1A1A1A", // Fondo oscuro
          foreground: "#E5E5E5",
          content1: '#282C30', // Texto o elementos claros
          primary: "#FFFFFF",    // Blanco para destacar
          secondary: "#cbd5e1",
  
            // Gris claro para texto secundario
          warning: "#FF4D4F",      // Rojo para errores
          success: "#52C41A",    // Verde para éxito   
          }
        } // custom themes
      }
    }

  )],
} satisfies Config;
