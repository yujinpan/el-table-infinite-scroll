import path from 'path';
import { defineConfig } from 'vitepress';

export default defineConfig({
  appearance: true,
  base: '/el-table-infinite-scroll/',
  title: 'el-table-infinite-scroll',
  description: 'infinite scroll for el-table.',

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

  async transformHtml(code) {
    return code.replace(
      '</body>',
      `
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-K00RYP0VFX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-K00RYP0VFX');
</script>
</body>`
    );
  },
});
