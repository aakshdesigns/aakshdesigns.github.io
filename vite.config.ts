import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
 base: '/',

  plugins: [react()],

  resolve: {
    alias: [
      {
        find: /^@\/components\/(.*)$/,
        replacement: fileURLToPath(new URL('./$1', import.meta.url)),
      },
      {
        find: /^@\/hooks\/(.*)$/,
        replacement: fileURLToPath(new URL('./$1', import.meta.url)),
      },
      {
        find: '@/data',
        replacement: fileURLToPath(new URL('./data.ts', import.meta.url)),
      },
      {
        find: '@',
        replacement: fileURLToPath(new URL('.', import.meta.url)),
      },
    ],
  },

  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});