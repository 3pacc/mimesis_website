/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Inter Tight', 'Inter', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      colors: {
        'mimesis-black': '#0a0a0a',
        'mimesis-white': '#fafafa',
        'mimesis-gray': '#888888',
        // Enhanced color palette
        'violet': {
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
        },
        'purple': {
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
        },
        'pink': {
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
        },
        'rose': {
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
        },
        'cyan': {
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        },
        'amber': {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
        'emerald': {
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'breathe': 'breathe 8s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 30s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%': { transform: 'scale(1.2)', opacity: '0.4' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      letterSpacing: {
        'widest': '.25em',
        'wider': '.15em',
      },
    },
  },
  plugins: [],
}
