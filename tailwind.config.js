module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
      },
      textColor: {
        accent: 'var(--color-text-accent)',
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
      },
      fontFamily: { 
        'josefin': ['Josefin Sans', 'sans-serif'],
        'arya': ['Arya', 'sans-serif'],
        'voces': ['Voces', 'cursive']
      },
    },
  },
  plugins: [],
}
