import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}','./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
        label: ['Syne Mono', 'monospace'],
      },
      colors: {
        bg: '#080B0F',
        nova: '#6366F1',
        kael: '#F59E0B',
        caller: '#10B981',
        onair: '#EF4444',
        teal: '#2DD4BF',
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'on-air-pulse': 'on-air-pulse 1s ease-in-out infinite',
        'float-in': 'float-in 0.4s cubic-bezier(0.16,1,0.3,1) forwards',
        'scale-in': 'scale-in 0.3s cubic-bezier(0.16,1,0.3,1) forwards',
        ripple: 'ripple 1.5s ease-out infinite',
        'fade-in': 'fade-in 0.3s ease forwards',
        'slide-up': 'slide-up 0.4s cubic-bezier(0.16,1,0.3,1) forwards',
      },
      keyframes: {
        'glow-pulse': {'0%,100%':{boxShadow:'0 0 20px rgba(99,102,241,0.3)'},'50%':{boxShadow:'0 0 45px rgba(99,102,241,0.75)'}},
        'on-air-pulse': {'0%,100%':{boxShadow:'0 0 20px rgba(239,68,68,0.5)'},'50%':{boxShadow:'0 0 50px rgba(239,68,68,0.9)'}},
        'float-in': {from:{opacity:'0',transform:'translateY(10px)'},to:{opacity:'1',transform:'translateY(0)'}},
        'scale-in': {from:{opacity:'0',transform:'scale(0.9)'},to:{opacity:'1',transform:'scale(1)'}},
        ripple: {'0%':{transform:'scale(1)',opacity:'0.6'},'100%':{transform:'scale(2.8)',opacity:'0'}},
        'fade-in': {from:{opacity:'0'},to:{opacity:'1'}},
        'slide-up': {from:{opacity:'0',transform:'translateY(20px)'},to:{opacity:'1',transform:'translateY(0)'}},
      },
    },
  },
  plugins: [],
};
export default config;