import type { App } from 'vue';
import ElTableInfiniteScroll from './el-table-infinite-scroll';

ElTableInfiniteScroll.install = (vue: App) => {
  vue.directive('el-table-infinite-scroll', ElTableInfiniteScroll);
};

export default ElTableInfiniteScroll;
