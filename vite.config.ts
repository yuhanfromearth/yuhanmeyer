import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "tailwindcss";

export default defineConfig({
  plugins: [react()],
  base: "/",
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
