/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        mint: {
          50: '#effff9',
          100: '#c8ffed',
          300: '#66f2cf',
          400: '#36dfb6',
          500: '#15c99f',
          900: '#043228',
        },
        ink: '#050606',
        coal: '#111414',
        fog: '#f4f7f6',
      },
      fontFamily: {
        pretendard: ['Pretendard', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        mint: '0 24px 80px rgba(21, 201, 159, 0.18)',
      },
    },
  },
  plugins: [],
};
