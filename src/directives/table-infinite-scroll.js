/**
 * 对 element-ui 的无限滚动在 el-table 上使用的封装
 */
import elInfiniteScroll from 'element-ui/lib/infinite-scroll';

const msgTitle = `[${require('../../package').name}]: `;

const elInserted = elInfiniteScroll.inserted;
const elUnbind = elInfiniteScroll.unbind;
const elScope = 'ElInfiniteScroll';

export default {
  inserted(el, binding, ...params) {
    // 获取 table 中的滚动层
    const scrollElem = el.querySelector('.el-table__body-wrapper');

    // 如果没找到元素，返回错误
    if (!scrollElem) {
      throw `${msgTitle}找不到 .el-table__body-wrapper 容器`;
    }

    // 设置自动滚动
    scrollElem.style.overflowY = 'auto';

    // dom 渲染后
    setTimeout(() => {
      if (!scrollElem.style.height) {
        scrollElem.style.height = '400px';
        console.warn(
          `${msgTitle}请尽量设置 el-table 的高度，可以设置为 auto/100%（自适应高度），未设置会取 400px 的默认值（不然会导致一直加载）。`
        );
      }

      // fix: windows/chrome 的 scrollTop + clientHeight 与 scrollHeight 不一致的 BUG
      scrollElem.setAttribute('infinite-scroll-distance', '1');

      // 绑定 infinite-scroll
      elInserted(scrollElem, binding, ...params);

      // 将子集的引用放入 el 上，用于 unbind 中销毁事件
      el[elScope] = scrollElem[elScope];
    }, 0);
  },
  unbind: elUnbind
};
