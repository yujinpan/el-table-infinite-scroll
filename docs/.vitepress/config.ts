import path from 'path';
import { defineConfig } from 'vitepress';

export default defineConfig({
  appearance: true,
  base: '/el-table-infinite-scroll/docs/.vitepress/dist/',
  title: 'el-table-infinite-scroll',
  description: 'el-table-infinite-scroll description',

  themeConfig: {
    logo: '/logo.svg',
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/yujinpan/el-table-infinite-scroll',
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-2022 yujinpan',
    },
    lastUpdatedText: 'Updated Date',
  },

  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../../src'),
      },
    },
  },
});
