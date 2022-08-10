import DefaultTheme from 'vitepress/theme';
import ElTableInfiniteScroll from '@/index';

import { install as installElementPlus } from './element-plus';
import { install as installComponents } from '../components';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(ElTableInfiniteScroll);

    installElementPlus(app);
    installComponents(app);
  },
};
