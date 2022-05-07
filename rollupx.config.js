module.exports = {
  banner:
    '/*!\n' +
    ` * el-table-infinite-scroll v${require('./package.json').version}\n` +
    ` * (c) 2019-${new Date().getFullYear()} yujinpan\n` +
    ' */\n',
  inputFiles: ['**/*'],
  outputDir: 'lib',
  typesOutputDir: 'lib',
  singleFile: false
};
