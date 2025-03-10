import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
export default defineConfig(() => {
  return {
    plugins: [react()],
    server: {
      port: parseInt(process.env.VITE_PORT || '3000'), // Use VITE_PORT from .env
      open: true, // Automatically open the browser
      proxy: {
        '/api': {
          target: process.env.VITE_API_URL, // Use the environment variable for the API URL
          changeOrigin: true,
          secure: false,      
          ws: true,
        },
      },
    },
    build: {
      outDir: 'dist',
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash].[ext]',
          chunkFileNames: 'js/[name].[hash].js',
          entryFileNames: 'js/[name].[hash].js',
        },
      },
    },
  };
});