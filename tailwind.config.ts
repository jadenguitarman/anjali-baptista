import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#d67b6d',
          secondary: '#f7ede2',
          dark: '#2e1f27'
        }
      },
      boxShadow: {
        soft: '0 10px 40px rgba(0,0,0,0.08)'
      }
    }
  },
  plugins: []
};

export default config;
