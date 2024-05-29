import vue2 from '@vitejs/plugin-vue2';
import vue2Jsx from '@vitejs/plugin-vue2-jsx';
import { resolve } from 'path';
import { resolveWithAlias } from 'path-ops';
import { defineConfig } from 'vitest/config';

import pkg from './package.json';

const alias = {
  '@': resolve('src'),
};

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue2(),
    vue2Jsx({
      // fork from @vue/babel-preset-app
      babelPlugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        '@babel/plugin-proposal-class-properties',
      ],
    }),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://wh.greatmap.com.cn:16440/',
      },
    },
  },
  resolve: {
    alias,
    extensions: ['.vue', '.js', '.ts', '.jsx', '.tsx', '.json'],
  },
  css: {
    preprocessorOptions: {
      scss: {
        // ignore external sass warnings for "10px / 2px"
        quietDeps: true,
        // resolve start path for "~", like: "~external/style/var.scss"
        importer: (url: string) => {
          return {
            file: resolveWithAlias(
              url.startsWith('~') ? url.slice(1) : url,
              alias,
            ),
          };
        },
      },
    },
  },
  define: {
    // define package build info, print them in console
    __BUILD__: JSON.stringify({
      name: pkg.name,
      version: pkg.version,
      dateTime: new Date().toLocaleString(),
    }),
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
