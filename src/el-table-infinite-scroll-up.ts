import { useScrollElem } from '@/el-table-infinite-scroll';
import InfiniteScrollUp from '@/infinite-scroll-up';

const ElTableInfiniteScrollUp: typeof InfiniteScrollUp = {
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
};

export default ElTableInfiniteScrollUp;
