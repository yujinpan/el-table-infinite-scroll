/**
 * 代理配置
 * @description
 * 具体配置项参考：https://cli.vuejs.org/zh/config/#devserver-proxy
 */

module.exports = {
  // 普通的接口代理
  '/api': {
    target: 'https://test.com'
  }
};
