// directive
import elTableInfiniteScroll from './directives/table-infinite-scroll';

// Vue.use()
elTableInfiniteScroll.install = (Vue) => {
  Vue.directive('el-table-infinite-scroll', elTableInfiniteScroll);
};

// Vue.component()
export default elTableInfiniteScroll;
