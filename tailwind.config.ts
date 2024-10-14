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
        'dark': '#02000A',
        'primary-dark': '#2E165B',
        'primary': '#7E4EAC',
        'primary-light': '#AF77D5'
      },
    },
  },
  plugins: [],
};
export default config;
