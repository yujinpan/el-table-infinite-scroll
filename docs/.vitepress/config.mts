import path from "path";
import { defineConfig } from "vitepress";
import vitePluginDemo from "vitepress-plugin-component-demo/vite-plugin";

export default defineConfig({
  appearance: true,
  base: "/el-table-infinite-scroll/",
  title: "el-table-infinite-scroll",
  description: "infinite scroll for el-table.",
  lastUpdated: true,

  themeConfig: {
    logo: "/logo.svg",
    nav: [{ text: "Guide", link: "/" }],
    search: {
      provider: "local",
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/yujinpan/el-table-infinite-scroll",
      },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-2022 yujinpan",
    },
  },

  vite: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "../../src"),
      },
    },
    plugins: [vitePluginDemo()],
  },

  async transformHtml(code) {
    return code.replace(
      "</body>",
      `
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-S66MPLRFJZ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-S66MPLRFJZ');
</script>
</body>`
    );
  },
});
