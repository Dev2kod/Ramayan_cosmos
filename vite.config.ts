import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: { port: 5178, open: false },
  build: {
    target: 'es2020',
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      output: {
        // Split so the browser parses in parallel and caches the heavy,
        // rarely-changing parts separately from the content.
        manualChunks: {
          three: ['three'],
          r3f: ['@react-three/fiber', '@react-three/drei', '@react-three/postprocessing', 'postprocessing'],
          react: ['react', 'react-dom', 'framer-motion', 'zustand'],
          epic: [
            './src/data/characters/ayodhya-mithila',
            './src/data/characters/kishkindha',
            './src/data/characters/lanka',
            './src/data/characters/sages-devas',
            './src/data/events/early',
            './src/data/events/middle',
            './src/data/events/late',
          ],
        },
      },
    },
  },
});
