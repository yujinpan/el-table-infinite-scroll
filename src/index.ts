import type { App, ObjectDirective, Plugin } from 'vue';
import ElTableInfiniteScroll from './el-table-infinite-scroll';

const ElTableInfiniteScrollPluggable: ObjectDirective & Plugin = {
  ...ElTableInfiniteScroll,
  install: (vue: App) => {
    vue.directive('el-table-infinite-scroll', ElTableInfiniteScroll);
  },
};

export default ElTableInfiniteScrollPluggable;
