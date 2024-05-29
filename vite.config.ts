import vue2 from '@vitejs/plugin-vue2';
import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

const alias = {
  '@': resolve('src'),
};

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue2()],
  resolve: {
    alias,
    extensions: ['.vue', '.js', '.ts', '.jsx', '.tsx', '.json'],
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
