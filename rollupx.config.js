module.exports = {
  banner:
    '/*!\n' +
    ` * el-table-infinite-scroll v${require('./package.json').version}\n` +
    ` * (c) 2019-${new Date().getFullYear()} yujinpan\n` +
    ' */\n',
  inputFiles: ['**/*'],
  outputDir: 'lib',
  singleFile: false,

  formats: [
    {
      format: 'es',
      inputFiles: ['**/*'],
      outputDir: 'lib/es',
      outputFile: '[name][ext]',
    },
    {
      format: 'cjs',
      inputFiles: ['**/*'],
      outputDir: 'lib/cjs',
      outputFile: '[name][ext]',
    },
  ],

  typesOutputDir: 'types',
};
