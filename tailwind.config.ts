import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF4400',
          orangeHover: '#ED4103',
          crimson: '#D70342',
          navy: '#343F5A',
          darkBg: '#0C0E14',
          cardDark: '#212121',
          iceBg: '#F9FBFD',
          textMuted: '#777777',
          textDark: '#222222',
          linkBlue: '#4F80FF',
          accentPurple: '#6564FF',
          borderLight: '#E8E8E8',
        },
      },
      fontFamily: {
        kanit: ['var(--font-kanit)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
        raleway: ['var(--font-raleway)', 'sans-serif'],
        redhat: ['var(--font-redhat)', 'sans-serif'],
        roboto: ['var(--font-roboto)', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'flow-down': 'flow-down 1.6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'flow-down': {
          '0%': { top: '-15%', opacity: '0' },
          '30%': { opacity: '1' },
          '100%': { top: '100%', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
