// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
    server: {
      fs: {
        // Allow serving files from node_modules/slick-carousel/slick/fonts/
        allow: [""],
      },
    },
  },
});
