import type { VueConstructor, PluginObject } from 'vue';

import InfiniteScrollUp from '@/infinite-scroll-up';

const ElTableInfiniteScrollUp: typeof InfiniteScrollUp &
  PluginObject<typeof InfiniteScrollUp> = {
  inserted(el, ...args) {
    const { scrollElem } = useScrollElem(el);

    // @ts-ignore
    InfiniteScrollUp.inserted(scrollElem, ...args);
  },
  update(el, ...args) {
    const { scrollElem } = useScrollElem(el);

    // @ts-ignore
    InfiniteScrollUp.update(scrollElem, ...args);
  },
  unbind(el) {
    const { scrollElem } = useScrollElem(el);

    // @ts-ignore
    InfiniteScrollUp.unbind(scrollElem);
  },
  install: (vue: VueConstructor) => {
    vue.directive('el-table-infinite-scroll-up', ElTableInfiniteScrollUp);
  },
};

export default ElTableInfiniteScrollUp;

function useScrollElem(el: HTMLElement) {
  return { scrollElem: el.querySelector('.el-table__body-wrapper') };
}
