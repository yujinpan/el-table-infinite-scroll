import DefaultTheme from 'vitepress/theme';
import { install as installComponents } from '../components';
import ElTableInfiniteScroll from '../../../lib';

import { ElTable, ElTableColumn, ElSwitch } from 'element-plus';

// auto base/dark style
import 'element-plus/theme-chalk/dark/css-vars.css';
import 'element-plus/es/components/table/style/css';
import 'element-plus/es/components/table-column/style/css';
import 'element-plus/es/components/switch/style/css';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(ElTable);
    app.use(ElTableColumn);
    app.use(ElSwitch);

    app.use(ElTableInfiniteScroll);

    installComponents(app);
  },
};
