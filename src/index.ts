import ElTableInfiniteScroll from './el-table-infinite-scroll';

// @ts-ignore
ElTableInfiniteScroll.install = (Vue) => {
  Vue.directive('el-table-infinite-scroll', ElTableInfiniteScroll);
};

export default ElTableInfiniteScroll;
