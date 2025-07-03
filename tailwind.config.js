/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    {
      pattern: /font-(montserrat)/,
    },
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6B9AC4', // Soft blue/azure
          light: '#8FB8D9',   // Lighter azure
          dark: '#4A7CAB',    // Darker azure
        },
        secondary: {
          DEFAULT: '#EAE3D1', // Soft limestone/travertine
          light: '#F5F1E6',   // Lighter limestone
          dark: '#D8CEB8',    // Darker limestone
        },
        accent: {
          DEFAULT: '#F59E0B', // Amber/gold accent color
          light: '#FBBF24',   // Lighter amber
          dark: '#D97706',    // Darker amber
        },
        neutral: {
          DEFAULT: '#94A3B8', // Neutral slate color
          light: '#CBD5E1',   // Lighter slate
          dark: '#64748B',    // Darker slate
        },
        'mineral-amber': {
          DEFAULT: '#F59E0B', // Same as accent
          dark: '#D97706',
        },
        'mineral-copper': {
          DEFAULT: '#D97706', // Darker amber/copper
          dark: '#B45309',
        },
        'mineral-jade': {
          DEFAULT: '#10B981', // Jade/emerald green
          dark: '#059669',
        },
        'mineral-slate': {
          DEFAULT: '#64748B', // Same as neutral-dark
          dark: '#475569',
        },
        'base-darkgray': '#333333',
        'base-lightgray': '#F5F5F5',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-montserrat)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}; 