/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      width: {
        100: '100%',
        70: '70%',
        30: '30rem',
        20: '20rem',
        13: '13rem',
      },
      height: {
        18: '18rem',
        24: '24rem',
        40: '80%',
      },
      fontFamily: {
        mono: ['var(--font-roboto-mono)'],
        amita: ['var(--font-amita'],
        monsterrat: ['var(--font-monsterrat)'],
      },
      colors: {
        heroTextColor: '#6F74A7',
        heroBg: '#F6F6F6',
        userFlowBg: '#E1EFFF',
        headerColor: '#151E2C',
        expBg: '#E7E7E7',
        iconBg: '#9D9D9D',
        jobitBg: '#FFE7E3',
        tripBg: '#DAE4FF',
        caseBg: '#FFEDFE',
        caseTextColor: '#312E81',
        casebannerBg: '#F5F6FB',
        casebannerTextColor: '#9191BC',
        workBg: '#151E2C',
        buttonBg: '#0252CD',
        projectRentBg: '#5F9FFE',
        projectJobBg: '#56B0B9',
        projectTrip: '#1F1D2B',
        processBg: '#DEE7FF',
        projectBtnBg: 'rgba(255, 255, 255, 0.2)',
        ts: '#3178C6',
        mui: '#0081CB',
        react: '#53C1DE',
        white: '#FFFFFF',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      fontSize: {
        14: '14px',
        12: '12px',
        67: '50px',
        25: '25px',
        30: '30px',
        10: '10px',
        8: '8px',
      },
      letterSpacing: {
        widest: '.5em',
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
};