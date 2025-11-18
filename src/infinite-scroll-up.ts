import { throttle } from 'lodash-unified';

import type { ObjectDirective } from 'vue';

export type InfiniteScrollUpOptions = {
  load: () => void | Promise<void>;
  disabled?: boolean;
  distance?: number;
  delay?: number;
  immediate?: boolean;
};

const InfiniteScrollUp: ObjectDirective<
  HTMLElement & {
    _ElTableInfiniteScrollUp: {
      handleScroll: () => void;
      options: InfiniteScrollUpOptions;
    };
  },
  InfiniteScrollUpOptions
> = {
  mounted(el, binding) {
    let loading = false;

    const store = (el._ElTableInfiniteScrollUp = {
      handleScroll: throttle(async () => {
        if (
          !loading &&
          !store.options.disabled &&
          el.scrollTop < (store.options.distance || 10)
        ) {
          loading = true;
          const oldScrollHeight = el.scrollHeight;
          Promise.resolve(store.options.load()).finally(() => {
            setTimeout(() => {
              el.scrollTop = el.scrollTop + el.scrollHeight - oldScrollHeight;
              loading = false;
            });
          });
        }
      }, binding.value.delay || 50),
      options: binding.value,
    });

    el.addEventListener('scroll', store.handleScroll);

    if (binding.value.immediate !== false) {
      store.handleScroll();
    }
  },
  updated(el, binding) {
    Object.assign(el._ElTableInfiniteScrollUp.options, binding.value);
  },
  unmounted(el) {
    const { handleScroll } = el._ElTableInfiniteScrollUp || {};

    if (handleScroll) {
      el.removeEventListener('scroll', handleScroll);
    }
  },
};

export default InfiniteScrollUp;
