
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    proxy: {
      // Replace "/api" with the base path for your API requests
      '/api': {
        target: 'https://e-commerce-jskt.vercel.app/', // Replace with your backend server's URL
        changeOrigin: true, // Needed for virtual hosted sites
        rewrite: (path) => path.replace(/^\/api/, ''), // Optional: Remove "/api" prefix if your backend doesn't use it
      },
    },
  },
});
