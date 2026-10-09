/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        helios: {
          bg: '#0a0a0f',
          surface: '#13131a',
          surface2: '#1c1c28',
          surface3: '#232336',
          border: '#2a2a3d',
          border2: '#3a3a55',
          accent: '#7c5cfc',
          accent2: '#a78bfa',
          accent3: '#c4b5fd',
          gold: '#f5c842',
          pink: '#fc5c9c',
          teal: '#22d3c8',
          coral: '#ff6b6b',
          green: '#4ade80',
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up': 'slideUp 0.4s ease both',
        'fade-in': 'fadeIn 0.3s ease both',
        'xp-pop': 'xpPop 1.2s ease forwards',
        'chest-shake': 'chestShake 0.5s ease',
        'boss-pulse': 'bossPulse 2s ease infinite',
      },
      keyframes: {
        slideUp: { from: { opacity: 0, transform: 'translateY(20px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } },
        xpPop: { '0%': { opacity: 1, transform: 'scale(0.8) translateY(0)' }, '100%': { opacity: 0, transform: 'scale(1.3) translateY(-40px)' } },
        chestShake: { '0%,100%': { transform: 'rotate(0deg)' }, '25%': { transform: 'rotate(-5deg)' }, '75%': { transform: 'rotate(5deg)' } },
        bossPulse: { '0%,100%': { boxShadow: '0 0 0 0 rgba(239,68,68,0.3)' }, '50%': { boxShadow: '0 0 0 12px rgba(239,68,68,0)' } },
      },
    },
  },
  plugins: [],
}
