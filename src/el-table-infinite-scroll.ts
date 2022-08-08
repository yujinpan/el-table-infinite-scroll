import type { ObjectDirective } from 'vue';
import { ElInfiniteScroll } from 'element-plus';
import { syncAttrs } from './utils';

const msgTitle = '[el-table-infinite-scroll]: ';
const elTableScrollWrapperClass = '.el-scrollbar__wrap';

const ElTableInfiniteScroll: ObjectDirective = {
  mounted(el, binding, VNode, oldVNode) {
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
        // eslint-disable-next-line
        console.warn(
          `${msgTitle} el-table height required, otherwise will set scrollbar default height: 400px`
        );
      }

      syncOptions(el, scrollElem);

      // use `ElInfiniteScroll`
      (
        ElInfiniteScroll.mounted as Exclude<
          ObjectDirective['mounted'],
          undefined
        >
      )(scrollElem, binding, VNode, oldVNode);
    }, 0);
  },
  updated(el) {
    syncOptions(el, el.querySelector(elTableScrollWrapperClass));
  },
  unmounted(el, ...args) {
    const scrollElem: HTMLElement = el.querySelector(elTableScrollWrapperClass);
    (
      ElInfiniteScroll.unmounted as Exclude<
        ObjectDirective['unmounted'],
        undefined
      >
    )(scrollElem, ...args);
  },
};

export default ElTableInfiniteScroll;

function syncOptions(sourceElem: HTMLElement, targetElem: HTMLElement) {
  syncAttrs(sourceElem, targetElem, [
    'infinite-scroll-disabled',
    'infinite-scroll-delay',
    'infinite-scroll-immediate',
    'infinite-scroll-distance',
  ]);

  // fix: windows/chrome `scrollTop + clientHeight` is difference with `scrollHeight`
  const name = 'infinite-scroll-distance';
  const value = +(sourceElem.getAttribute(name) || 0);
  targetElem.setAttribute(name, (value < 1 ? 1 : value) + '');
}
