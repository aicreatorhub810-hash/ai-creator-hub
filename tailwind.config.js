/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#05070c",
        "ink-alt": "#0a0e18",
        blue: {
          DEFAULT: "#2f6ffb",
          deep: "#1739a8",
          glow: "#7fb2ff",
        },
        surface: "#f5f7fb",
        line: "#e7eaf2",
        "line-dark": "rgba(255,255,255,0.09)",
        muted: "#5b6472",
        "muted-dark": "#94a0b8",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      borderRadius: {
        lg: "22px",
        md: "16px",
      },
      boxShadow: {
        soft: "0 20px 50px -20px rgba(11,15,26,0.25)",
      },
    },
  },
  plugins: [],
};
