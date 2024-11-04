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
        'dark': '#1F242D',
        'dark-light': '#323946',
        'primary': '#67BBF3',
      },
      fontFamily: {
        'sans': ['Poppins'],
      },
      flexGrow: {
        '1': '1',
        '2': '2',
      },
    },
  },
  plugins: [],
};
export default config;
