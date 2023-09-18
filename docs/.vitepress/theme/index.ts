import type { EnhanceAppContext } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import ElTableInfiniteScroll from '@/index';

import { install as installElementPlus } from './element-plus';
import { install as installComponents } from '../components';

export default {
  ...DefaultTheme,
  enhanceApp({ app }: EnhanceAppContext) {
    app.use(ElTableInfiniteScroll);

    installElementPlus(app);
    installComponents(app);
  },
};
