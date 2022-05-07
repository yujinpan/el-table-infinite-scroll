const argv = process.argv.splice(2);

// 打包体积分析插件
const BundleAnalyzerPlugin = argv.includes('--analyzer')
  ? [new (require('webpack-bundle-analyzer')).BundleAnalyzerPlugin()]
  : [];

module.exports = {
  indexPath: '../_layouts/default.html',

  publicPath: '/el-table-infinite-scroll/dist/',

  // webpack config
  configureWebpack: {
    entry: './examples/main.js',
    plugins: [...BundleAnalyzerPlugin]
  }
};
