import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: '#1A3C34',
        'forest-light': '#2A4F48',
        'forest-dark': '#0F2A24',
        gold: '#C9A84C',
        'gold-light': '#E8D4A8',
        'gold-dark': '#9D8037',
        cream: '#F5F0E8',
        'cream-light': '#FDFBF7',
        charcoal: '#2B2B2B',
        mist: '#D4CFC4',
        bark: '#4A4A47',
      },
      fontFamily: {
        'serif-heading': ['var(--font-cormorant)', 'serif'],
        'serif-sub': ['var(--font-playfair)', 'serif'],
        'sans': ['var(--font-jost)', 'sans-serif'],
        'accent': ['var(--font-cinzel)', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'scroll-reveal': 'scrollReveal 0.6s ease-out',
        'word-slide': 'wordSlide 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(60px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowPulse: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(201, 168, 76, 0.3)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(201, 168, 76, 0.6)',
          },
        },
        scrollReveal: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        wordSlide: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  plugins: [],
}

export default config
