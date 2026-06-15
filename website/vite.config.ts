import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Static SPA — no backend, no env. Deploy `dist/` anywhere.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
