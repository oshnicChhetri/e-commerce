import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // The build output directory
  },
  server: {
    proxy: {
      // Proxy requests starting with "/api" to your backend
      "/api": {
        target: "https://e-commerce-jskt.vercel.app/", // Replace with your backend server's URL
        changeOrigin: true, // Needed for virtual hosted sites
        rewrite: (path) => path.replace(/^\/api/, ""), // Optional: Remove "/api" prefix if your backend doesn't use it
      },
    },
  },
});
