import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'], 
      },
      animation:{
        'spin-slow': 'spin 3s linear infinite',
        'spin-slow-reverse': 'reverse-spin 3s linear infinite',
      },
      keyframes: {
        'reverse-spin': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(-360deg)' } 
        }
      },
      backgroundImage: {
        "hero-bg-lg": "linear-gradient(70deg, #eab308 50%, #000000 50%)",
        "hero-bg-md": "linear-gradient(45deg, #eab308 50%, #000000 50%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
