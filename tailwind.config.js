module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      "primary": {
        DEFAULT: "var(--primary)",
        dark: "var(--dark-primary)"
      },
      "secondary": "var(--secondary)",
      "background": {
        lighter: "var(--lighter-background)",
        light: "var(--light-background)",
        DEFAULT: "var(--def-background)",
        dark: "var(--dark-background)"
      },
      "white": "#FFFFFF",
    },
    fontFamily: {
      'body': ['"Source Sans Pro"'],
      'title': ['"Trocchi"']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
