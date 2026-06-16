import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['var(--font-nunito)', 'Nunito', 'sans-serif'],
      },
      colors: {
        orange: {
          500: '#FF6B00',
          600: '#e66000',
          700: '#cc5500',
          50: '#fff7f0',
          100: '#ffede0',
          200: '#ffd9b8',
          300: '#ffbf85',
          400: '#ff9a42',
        },
      },
    },
  },
  plugins: [],
};
export default config;
