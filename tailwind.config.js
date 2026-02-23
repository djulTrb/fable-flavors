/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: "var(--font-display)",
        subheading: "var(--font-subheading)",
        body: "var(--font-body)",
        script: "var(--font-script)",
      },
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        textPrimary: "var(--color-text-primary)",
        accent: "var(--color-accent)",
        subtle: "var(--color-subtle)",
      },
      borderRadius: {
        "5xl": "4rem",
        "4xl": "3rem",
      }
    },
  },
  plugins: [],
};
