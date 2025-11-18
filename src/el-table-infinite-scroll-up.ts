import type { App, Plugin } from 'vue';

import { useScrollElem } from '@/el-table-infinite-scroll';
import InfiniteScrollUp from '@/infinite-scroll-up';

const ElTableInfiniteScrollUp: typeof InfiniteScrollUp & Plugin = {
  mounted(el, ...args) {
    const { scrollElem } = useScrollElem(el);

    // @ts-ignore
    InfiniteScrollUp.mounted(scrollElem, ...args);
  },
  updated(el, ...args) {
    const { scrollElem } = useScrollElem(el);

    // @ts-ignore
    InfiniteScrollUp.updated(scrollElem, ...args);
  },
  unmounted(el) {
    const { scrollElem } = useScrollElem(el);

    // @ts-ignore
    InfiniteScrollUp.unmounted(scrollElem);
  },
  install: (vue: App) => {
    vue.directive('el-table-infinite-scroll-up', ElTableInfiniteScrollUp);
  },
};

export default ElTableInfiniteScrollUp;
