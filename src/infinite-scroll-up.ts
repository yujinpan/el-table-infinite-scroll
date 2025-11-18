import type { App, ObjectDirective, Plugin } from 'vue';

export type InfiniteScrollUpOptions = {
  load: () => void | Promise<void>;
  disabled?: boolean;
  distance?: number;
  delay?: number;
  immediate?: boolean;
};

const InfiniteScrollUp: ObjectDirective<
  HTMLElement & {
    _InfiniteScrollStore: {
      handleScroll: () => void;
      options: InfiniteScrollUpOptions;
    };
  },
  InfiniteScrollUpOptions
> &
  Plugin = {
  mounted(el, binding) {
    let loading = false;

    const store = (el._InfiniteScrollStore = {
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
    Object.assign(el._InfiniteScrollStore.options, binding.value);
  },
  unmounted(el) {
    const { handleScroll } = el._InfiniteScrollStore || {};

    if (handleScroll) {
      el.removeEventListener('scroll', handleScroll);
    }
  },
  install: (vue: App) => {
    vue.directive('infinite-scroll-up', InfiniteScrollUp);
  },
};

export default InfiniteScrollUp;

export function throttle(func: () => void, wait: number) {
  let waiting = false; // 标记是否处于等待间隔中

  return function () {
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this;
    // eslint-disable-next-line prefer-rest-params
    const args = arguments;

    if (!waiting) {
      waiting = true;

      setTimeout(() => {
        // @ts-ignore
        func.apply(context, args);

        waiting = false;
      }, wait);
    }
  };
}
