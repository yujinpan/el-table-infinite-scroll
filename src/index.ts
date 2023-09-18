import type { App, ObjectDirective, Plugin } from 'vue';
import _ElTableInfiniteScroll from './el-table-infinite-scroll';

const ElTableInfiniteScroll: ObjectDirective & Plugin = Object.assign(
  _ElTableInfiniteScroll,
  {
    install: (vue: App) => {
      vue.directive('el-table-infinite-scroll', ElTableInfiniteScroll);
    },
  }
);

export default ElTableInfiniteScroll;
