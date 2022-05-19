module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        skin: {
          fill: 'var(--color-fill)',
          'button-accent': 'var(--color-button-accent)',
          'button-accent-hover': 'var(--color-button-accent-hover)',
          'button-muted': 'var(--color-button-muted)',
          'bg-light': 'var(--color-bg-light)',
          'bg-dark': 'var(--color-bg-dark)',
          'bg-primary': 'var(--color-bg-primary)',
        },
      },
      gradientColorStops: {
        skin: {
          hue: 'var(--color-fill)',
        },
      },
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          muted: 'var(--color-text-muted)',
          inverted: 'var(--color-text-inverted)',
          accent: 'var(--color-text-accent)',
          light: 'var(--color-text-light)',
          dark: 'var(--color-text-dark)',
        },
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
