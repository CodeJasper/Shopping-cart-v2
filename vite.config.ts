import { defineConfig } from "vitest/config";
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts"
  },
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
