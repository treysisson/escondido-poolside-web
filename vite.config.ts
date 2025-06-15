import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: './', // Important: use relative paths
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
