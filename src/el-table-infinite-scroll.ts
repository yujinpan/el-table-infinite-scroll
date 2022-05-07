import InfiniteScroll from 'element-ui/lib/infinite-scroll';
import { DirectiveOptions } from 'vue';
import { syncAttrs } from './utils';

const elScope = 'ElInfiniteScroll';
const msgTitle = '[el-table-infinite-scroll]: ';
const elTableScrollWrapperClass = '.el-table__body-wrapper';

const ElTableInfiniteScroll: DirectiveOptions = {
  inserted(el, binding, VNode, oldVNode) {
    const scrollElem: HTMLElement = el.querySelector(elTableScrollWrapperClass);

    if (!scrollElem) {
      throw new Error(
        `${msgTitle}${elTableScrollWrapperClass} element not found.`
      );
    }

    scrollElem.style.overflowY = 'auto';

    // after render
    setTimeout(() => {
      if (!el.style.height) {
        scrollElem.style.height = '400px';
        console.warn(
          `${msgTitle} el-table height required, otherwise will set default value: 400px`
        );
      }

      syncOptions(el, scrollElem);

      // use `InfiniteScroll`
      InfiniteScroll.inserted(scrollElem, binding, VNode, oldVNode);

      // used by unbind, destroy listener events
      el[elScope] = scrollElem[elScope];
    }, 0);
  },
  componentUpdated(el) {
    syncOptions(el, el.querySelector(elTableScrollWrapperClass));
  },
  unbind: InfiniteScroll.unbind
};

export default ElTableInfiniteScroll;

function syncOptions(sourceElem: HTMLElement, targetElem: HTMLElement) {
  syncAttrs(sourceElem, targetElem, [
    'infinite-scroll-disabled',
    'infinite-scroll-delay',
    'infinite-scroll-immediate',
    'infinite-scroll-distance'
  ]);

  // fix: windows/chrome `scrollTop + clientHeight` is difference with `scrollHeight`
  const name = 'infinite-scroll-distance';
  const value = +sourceElem.getAttribute(name) || 0;
  targetElem.setAttribute(name, (value < 1 ? 1 : value) + '');
}
