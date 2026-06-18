/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Mirrors src/branding.config.ts — change there to rebrand.
        brand: "#4F46E5",
        brandsoft: "#EEF0FF",
        ink: "#16161A",
        subtle: "#6B6B76",
        line: "#E7E7EE",
        canvas: "#F6F7FB",
        ok: "#1E8A5F",
        warn: "#B45309",
      },
      borderRadius: { tile: "14px", pill: "999px" },
    },
  },
  plugins: [],
};
