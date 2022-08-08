import type { App, ObjectDirective } from 'vue';
import ElTableInfiniteScroll from './el-table-infinite-scroll';

(
  ElTableInfiniteScroll as ObjectDirective & { install: (vue: App) => void }
).install = (vue: App) => {
  vue.directive('el-table-infinite-scroll', ElTableInfiniteScroll);
};

export default ElTableInfiniteScroll;
