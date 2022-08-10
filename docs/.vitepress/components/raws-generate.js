const path = require('path');
const fs = require('fs');
const glob = require('glob');
const prettier = require('prettier');
const { createMarkdownRenderer } = require('vitepress');

async function generateJSON() {
  const markdowns = await getComponentsMarkdowns();
  const json = prettier.format(JSON.stringify(markdowns), { parser: 'json' });
  fs.writeFileSync(path.resolve(__dirname, './raws.json'), json);
}

async function getComponentsMarkdowns() {
  const modules = glob.sync(path.resolve(__dirname, '../components/*.vue'));
  const raws = {};
  await Promise.all(
    modules.map(async (id) => {
      // await will mess up the ordering, initialize first
      raws[getFileName(id)] = '';
      raws[getFileName(id)] = await codeToHighlight(
        fs.readFileSync(id).toString()
      );
    })
  );
  return raws;
}

/**
 * fork from node_modules/vitepress/dist/node-cjs/serve-f2029a83.cjs
 */
async function codeToHighlight(str) {
  const markerIt = await createMarkdownRenderer(path.resolve(__dirname, '../'));
  return markerIt.render('```vue\n' + str + '```');
}

function getFileName(id) {
  return path.basename(id).replace(path.extname(id), '');
}

generateJSON();
