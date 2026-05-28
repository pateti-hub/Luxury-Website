/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}', './lib/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#0F0E0C',
        alabaster: '#F7F4F0',
        travertine: '#8C7A6B',
        racing: '#151D1A',
        parchment: '#FDFBF7',
        champagne: '#C5A059',
        charcoal: '#0A0A0A',
        plaster: '#EAEAEA',
        concrete: '#707072',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        luxury: '0 20px 80px rgba(0, 0, 0, 0.35)',
        glow: '0 0 0 1px rgba(197, 160, 89, 0.2), 0 18px 60px rgba(197, 160, 89, 0.14)',
      },
      backgroundImage: {
        'luxury-radial': 'radial-gradient(circle at top, rgba(197,160,89,0.18), transparent 40%), radial-gradient(circle at bottom right, rgba(21,29,26,0.65), transparent 30%)',
      },
      letterSpacing: {
        editorial: '0.18em',
      },
    },
  },
  plugins: [],
}