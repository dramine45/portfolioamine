/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          dark: '#0a0a0a',
          darker: '#050505'
        },
        primary: {
          50: '#ffebee',
          100: '#ffcdd2',
          200: '#ef9a9a',
          300: '#e57373',
          400: '#ef5350',
          500: '#f44336',
          600: '#e53935',
          700: '#d32f2f',
          800: '#c62828',
          900: '#b71c1c',
        },
        accent: {
          50: '#e8f5e9',
          100: '#c8e6c9',
          200: '#a5d6a7',
          300: '#81c784',
          400: '#66bb6a',
          500: '#4caf50',
          600: '#43a047',
          700: '#388e3c',
          800: '#2e7d32',
          900: '#1b5e20',
          neon: '#00ff66'
        },
        terminal: {
          black: '#0a0a0a',
          red: '#ff0033',
          green: '#00ff66',
          yellow: '#ffcc00',
          blue: '#33ccff',
          magenta: '#ff33cc',
          cyan: '#33ffff',
          white: '#f0f0f0',
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'scanline': 'scanline 8s linear infinite',
        'terminal-cursor': 'terminal-cursor 1s infinite',
        'glitch': 'glitch 3s infinite',
        'typing': 'typing 3.5s steps(40, end)',
        'matrix': 'matrix 20s linear infinite',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' }
        },
        'terminal-cursor': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 }
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-5px, 5px)' },
          '40%': { transform: 'translate(-5px, -5px)' },
          '60%': { transform: 'translate(5px, 5px)' },
          '80%': { transform: 'translate(5px, -5px)' }
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        matrix: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' }
        }
      },
    },
  },
  plugins: [],
};