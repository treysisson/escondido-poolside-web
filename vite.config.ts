import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: './', // Use relative paths for GitHub Pages
  build: {
    outDir: 'docs', // Build to docs folder so GitHub Pages can serve it
    assetsDir: 'assets',
    emptyOutDir: true,
  },
})
