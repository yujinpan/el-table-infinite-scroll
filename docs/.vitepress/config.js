const path = require('path');

module.exports = {
  appearance: true,
  base: '/el-table-infinite-scroll/dist/',
  title: 'el-table-infinite-scroll',
  description: 'el-table-infinite-scroll description',
  dest: path.resolve(__dirname, '../../dist'),

  head: [['link', {}]],

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
};
