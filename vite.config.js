import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Use relative paths for assets (allows opening index.html directly)
  build: {
    outDir: 'dist', // Explicit output directory
    assetsDir: 'assets', // Where to put assets
    emptyOutDir: true, // Clean dist folder before building
    rollupOptions: {
      output: {
        // Ensure stable asset names
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]'
      }
    }
  }
})
