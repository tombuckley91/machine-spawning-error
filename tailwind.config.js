module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // https://tailwindcss.com/docs/theme#configuration-reference
      colors: {
        skin: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          accent: "var(--color-text-accent)",
          "bg-primary": "var(--color-background-primary)",
          "bg-secondary": "var(--color-background-secondary)",
          "bg-tertiary": "var(--color-background-tertiary)",
          "bg-accent": "var(--color-background-accent)",
          "bg-accent-secondary": "var(--color-background-accent-secondary)",
        },
      },
      fontFamily: {
        content: "var(--font-text-content)",
        heading: "var(--font-text-heading)",
      },
      animation: {
        fade: "fadeOut 4s ease-in-out",
      },
      keyframes: (theme) => ({
        fadeOut: {
          "0%": { color: "white" },
          "100%": { color: "transparent" },
        },
      }),
    },
  },
  plugins: [],
}
