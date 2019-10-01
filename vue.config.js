/**
 * vue config
 * @description
 * vue构建配置文件，[文档地址](https://cli.vuejs.org/zh/config/#vue-config-js)
 * 1. 使用 devServer 的代理模式指向正式接口的域名。
 * 2. 注册 webpack alias 路径。
 */
const argv = process.argv.splice(2);

// 打包体积分析插件
const BundleAnalyzerPlugin = argv.includes('--analyzer')
  ? [new (require('webpack-bundle-analyzer')).BundleAnalyzerPlugin()]
  : [];

module.exports = {
  indexPath: '../../_layouts/default.html',
  outputDir: 'docs/assets',

  publicPath: process.env.VUE_APP_BASE_URL,
  productionSourceMap: false,

  // 开发服务器配置
  devServer: {
    // 代理配置
    proxy: require('./proxy.config')
  },

  // webpack config
  configureWebpack: {
    entry: './examples/main.js',
    plugins: [...BundleAnalyzerPlugin]
  }
};
