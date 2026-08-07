/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      colors: {
        bg: '#080808',
        surface: '#111111',
        surface2: '#161616',
        border: '#222222',
        fg: '#F5F5F5',
        muted: '#888888',
        dim: '#444444',
      },
      backdropBlur: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '40px',
        '2xl': '56px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'mask-reveal': {
          '0%': { transform: 'translateY(110%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.333%)' },
        },
        'loader-line': {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'modal-in': {
          '0%': { opacity: '0', transform: 'scale(0.97) translateY(12px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        'scroll-line': {
          '0%': { transform: 'scaleY(0)', transformOrigin: 'top' },
          '50%': { transform: 'scaleY(1)', transformOrigin: 'top' },
          '51%': { transformOrigin: 'bottom' },
          '100%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fade-in 0.6s ease forwards',
        'mask-reveal': 'mask-reveal 1s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        marquee: 'marquee 40s linear infinite',
        'loader-line': 'loader-line 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'slide-up': 'slide-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'modal-in': 'modal-in 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'scroll-line': 'scroll-line 2s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
