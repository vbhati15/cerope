/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'gradient-top': '#FD90D1',
        'gradient-bottom': '#78ACF9',
        'primary': '#000000',
        'subtitle': '#4B5563',
        'muted': '#6B7280',
        'input-border': '#808080',
        'error': '#EF4444',
        'cardbg': '#FFFFFF'
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif']
      },
      borderRadius: {
        sm: '9.6px',
        md: '12px',
        lg: '20px'
      }
    }
  },
  plugins: []
};
