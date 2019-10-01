/**
 * 对 element-ui 的无限滚动在 el-table 上使用的封装
 */
import elInfiniteScroll from 'element-ui/lib/infinite-scroll';

const elInserted = elInfiniteScroll.inserted;
const elUnbind = elInfiniteScroll.unbind;
const elScope = 'ElInfiniteScroll';

export default {
  inserted(el, binding, ...params) {
    // 获取 table 中的滚动层
    const scrollElem = el.querySelector('.el-table__body-wrapper');

    // 如果没找到元素，返回错误
    if (!scrollElem) {
      throw 'table-infinite-scroll: 找不到 .el-table__body-wrapper 容器';
    }

    // 设置自动滚动
    scrollElem.style.overflowY = 'auto';

    // 加入滚动路基
    setTimeout(() => {
      elInserted(scrollElem, binding, ...params);

      // 将子集的引用放入 el 上，用于 unbind 中销毁事件
      el[elScope] = scrollElem[elScope];
    });
  },
  unbind: elUnbind
};
