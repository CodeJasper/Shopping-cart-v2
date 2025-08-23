import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@app/*': path.resolve(__dirname, './src/app/*'),
      '@app': path.resolve(__dirname, './src/app/index'),
      '@features/*': path.resolve(__dirname, './src/features/*'),
      '@features': path.resolve(__dirname, './src/features/index'),
      '@components/*': path.resolve(__dirname, './src/components/*'),
      '@components': path.resolve(__dirname, './src/components/index'),
    },
  },
})
