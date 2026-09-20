/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        agri: {
          green: {
            50: '#f0fdf4',
            100: '#dcfce7',
            200: '#bbf7d0',
            300: '#86efac',
            400: '#4ade80',
            500: '#22c55e',
            600: '#16a34a',
            700: '#15803d',
            800: '#166534',
            900: '#14532d',
            950: '#052e16',
            emerald: '#2d6a4f',
            deep: '#1b4332',
            forest: '#133526',
            leaf: '#40916c',
            mint: '#52b788',
            soft: '#74c69d'
          },
          amber: {
            50: '#fffbeb',
            100: '#fef3c7',
            200: '#fde68a',
            300: '#fcd34d',
            400: '#fbbf24',
            500: '#f59e0b',
            600: '#d97706',
            700: '#b45309',
            800: '#92400e',
            900: '#78350f',
            950: '#451a03',
            gold: '#eab308',
            harvest: '#d97706',
            warm: '#f59e0b'
          },
          blue: {
            50: '#eff6ff',
            100: '#dbeafe',
            200: '#bfdbfe',
            300: '#93c5fd',
            400: '#60a5fa',
            500: '#3b82f6',
            600: '#2563eb',
            700: '#1d4ed8',
            800: '#1e40af',
            900: '#1e3a8a',
            950: '#0f172a',
            navy: '#0f172a',
            deep: '#172554',
            indigo: '#1e1b4b'
          },
          cream: {
            50: '#ffffff',
            100: '#fdfbf7',
            200: '#faf6ee',
            300: '#f5efe1',
            400: '#ede3cd',
            500: '#e2d3b4',
            600: '#cbb692',
            700: '#b09971',
            800: '#8e7956',
            900: '#756347',
            warm: '#fefae0',
            paper: '#f8f5ee',
            card: '#fcfbf8'
          },
          brown: {
            50: '#fcf8f5',
            100: '#f7eee7',
            200: '#edd9cc',
            300: '#dec0ab',
            400: '#c89d7f',
            500: '#b37d57',
            600: '#9b6441',
            700: '#7e4f35',
            800: '#67412e',
            900: '#553729',
            950: '#321e16',
            soil: '#6f4e37',
            bark: '#8d5b4c',
            clay: '#a47148',
            sand: '#d4a373'
          }
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'soft-agri': '0 4px 20px -2px rgba(27, 67, 50, 0.08), 0 2px 6px -1px rgba(27, 67, 50, 0.04)',
        'card-agri': '0 10px 25px -3px rgba(45, 106, 79, 0.08), 0 4px 12px -2px rgba(111, 78, 55, 0.05)',
        'glow-green': '0 0 25px -5px rgba(34, 197, 94, 0.35)',
        'glow-amber': '0 0 25px -5px rgba(245, 158, 11, 0.35)',
        'glow-blue': '0 0 25px -5px rgba(37, 99, 235, 0.3)',
      },
      animation: {
        'scan-line': 'scan 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        scan: {
          '0%, 100%': { transform: 'translateY(0%)', opacity: '0.8' },
          '50%': { transform: 'translateY(100%)', opacity: '0.3' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
