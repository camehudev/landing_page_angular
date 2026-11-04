/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f172a", // Ajuste conforme seu design system escuro/claro
        foreground: "#f8fafc",
        primary: {
          DEFAULT: "#0ea5e9",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#1e293b",
          foreground: "#94a3b8",
        },
        card: {
          DEFAULT: "#1e293b",
          foreground: "#f8fafc",
        },
        destructive: {
          DEFAULT: "#ef4444",
        },
        success: "#22c55e",
        ink: {
          DEFAULT: "#090d16",
          muted: "#131b2e",
          foreground: "#ffffff",
        },
        border: "#334155",
        input: "#334155",
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(14, 165, 233, 0.4)",
        panel: "0 20px 25px -5px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
}
