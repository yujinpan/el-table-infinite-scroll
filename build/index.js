const defaultRollupConfig = require('./rollup.config.js');
const rollup = require('rollup');

const banner =
  '/*!\n' +
  ` * el-table-infinite-scroll v${require('../package.json').version}\n` +
  ` * (c) 2019-${new Date().getFullYear()} yujinpan\n` +
  ' * Released under the MIT License.\n' +
  ' */\n';

const defaultOutput = {
  banner,
  dir: 'lib/',
  format: 'es',
  sourcemap: true
};

// 多入口打包，每个文件对应一个包
const multiOption = [
  {
    input: 'src/index.js',
    output: defaultOutput
  }
];

// 开始打包
build().then(() => {
  console.log('打包完成！');
});

function build() {
  return Promise.all(
    multiOption.map((option) => {
      const { input, output } = option;
      console.log(`input ->`, input);
      return rollup.rollup({ ...defaultRollupConfig, input }).then((bundle) => {
        return bundle.write(output);
      });
    })
  );
}
