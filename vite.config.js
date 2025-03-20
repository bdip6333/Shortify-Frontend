import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "./", // Ensures correct path resolution
  build: {
    outDir: "dist", // Default output folder
  },
  server: {
    historyApiFallback: true, // Fixes routing issues during development
  },
})
