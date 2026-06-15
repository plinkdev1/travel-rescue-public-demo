/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Mirrors src/branding.config.ts — change here + there to rebrand.
        brand: "#4F46E5",
        branddark: "#3D35C9",
        brandsoft: "#EEF0FF",
        ink: "#16161A",
        subtle: "#5C5C68",
        line: "#E7E7EE",
        canvas: "#F6F7FB",
        accent: "#7A5AF8",
      },
      borderRadius: { tile: "16px", pill: "999px" },
      fontFamily: { display: ['"Plus Jakarta Sans"', "ui-sans-serif", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
