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
          'bg-accent': 'var(--color-bg-accent)',

          /* Elements */
          'el-bg-light': 'var(--color-el-bg-light)',
          'el-bg-dark': 'var(--color-el-bg-dark)',
          'el-button': 'var(--color-el-button)',
          /* Illustrations */
          'il-stroke': 'var(--color-il-stroke)',
          '': 'var(--color-il-highlight)',
          '': 'var(--color-il-main)',
          '': 'var(--color-il-secondary)',
          '': 'var(--color-il-tertiary)',
          /* Card */
          'card-bg-light': 'var(--color-card-bg-light)',
          'card-bg-dark': 'var(--color-card-bg-dark)',
          'card-tag-bg': 'var(--color-card-tag-bg)',
          /* Icons */
          '': 'var(--color-icon-stroke)',
          '': 'var(--color-icon-main)',
          '': 'var(--color-icon-secondary)',
          '': 'var(--color-icon-tertiary)',

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

          /* Elements */
          t1: 'var(--color-el-headline)',
          t2: 'var(--color-el-paragraph)',
          'el-button-text': 'var(--color-el-button-text)',
          /* Card */
          '': 'var(--color-card-text)',
          'card-tag-text': 'var(--color-card-tag-text)',
          /* Icons */
          'icon-highlight': 'var(--color-icon-highlight)',
          'icon-secondary': 'var(--color-icon-secondary)',
        },
      },
      borderColor: {
        skin: {
          'il-stroke-light': 'var(--color-il-stroke-light)',
          'il-stroke-dark': 'var(--color-il-stroke-dark)',
        },
      },
      fontFamily: {
        'josefin': ['Josefin Sans', 'sans-serif'],
        'arya': ['Arya', 'sans-serif'],
        'voces': ['Voces', 'cursive']
      },
      dropShadow: {
        'neu-light': '10px 10px 0 var(--color-shadow-light)',
        'neu-light-sm': '5px 5px 0 var(--color-shadow-light)',
        'neu-dark': '10px 10px 0 var(--color-shadow-dark)',
        'neu-dark-sm': '5px 5px 0 var(--color-shadow-dark)',
        // 'neu-light': '10px 10px 0 rgba(0, 0, 0, 1)',
        // 'neu-light-sm': '5px 5px 0 rgba(0, 0, 0, 1)',
        // 'neu-dark': '10px 10px 0 var(--color-text-accent)',
        // 'neu-dark-sm': '5px 5px 0 var(--color-text-accent)',
        
      },
    },
  },
  plugins: [],
}
