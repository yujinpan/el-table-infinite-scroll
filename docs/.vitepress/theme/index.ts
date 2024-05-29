import DefaultTheme from 'vitepress/theme';
import { enhanceApp } from 'vitepress-plugin-component-demo';

import type { EnhanceAppContext } from 'vitepress';

import { install as installElementPlus } from './element-plus';
import ElTableInfiniteScroll from '@/index';

export default {
  ...DefaultTheme,
  enhanceApp(context: EnhanceAppContext) {
    const { app } = context;

    enhanceApp(context);

    app.use(ElTableInfiniteScroll);

    installElementPlus(app);
  },
};
