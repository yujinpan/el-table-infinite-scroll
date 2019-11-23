/**
 * 对 element-ui 的无限滚动在 el-table 上使用的封装
 */
import elInfiniteScroll from 'element-ui/lib/infinite-scroll';

const elScope = 'ElInfiniteScroll'; // scope name
const msgTitle = `[el-table-infinite-scroll]: `; // message title
const elTableScrollWrapperClass = '.el-table__body-wrapper';

export default {
  inserted(el, binding, vnode, oldVnode) {
    // 获取 table 中的滚动层
    const scrollElem = el.querySelector(elTableScrollWrapperClass);

    // 如果没找到元素，返回错误
    if (!scrollElem) {
      throw `${msgTitle}找不到 ${elTableScrollWrapperClass} 容器`;
    }

    // 设置自动滚动
    scrollElem.style.overflowY = 'auto';

    // dom 渲染后
    setTimeout(() => {
      if (!el.style.height) {
        scrollElem.style.height = '400px';
        console.warn(
          `${msgTitle}请尽量设置 el-table 的高度，可以设置为 auto/100%（自适应高度），未设置会取 400px 的默认值（不然会导致一直加载）`
        );
      }

      asyncElOptions(vnode, el, scrollElem);

      // 绑定 infinite-scroll
      elInfiniteScroll.inserted(scrollElem, binding, vnode, oldVnode);

      // 将子集的引用放入 el 上，用于 unbind 中销毁事件
      el[elScope] = scrollElem[elScope];
    }, 0);
  },
  componentUpdated(el, binding, vnode) {
    asyncElOptions(vnode, el, el.querySelector(elTableScrollWrapperClass));
  },
  unbind: elInfiniteScroll.unbind
};

/**
 * 同步 el-infinite-scroll 的配置项
 * @param sourceVNode
 * @param sourceElem
 * @param targetElem
 */
function asyncElOptions(sourceVNode, sourceElem, targetElem) {
  const context = sourceVNode.context;
  let value;
  ['disabled', 'delay', 'immediate'].forEach((name) => {
    name = 'infinite-scroll-' + name;
    value = sourceElem.getAttribute(name);
    if (value !== null) {
      targetElem.setAttribute(name, context[value] || value);
    }
  });

  // fix: windows/chrome 的 scrollTop + clientHeight 与 scrollHeight 不一致的 BUG
  const name = 'infinite-scroll-distance';
  value = sourceElem.getAttribute(name);
  value = context[value] || value;
  targetElem.setAttribute(name, value < 1 ? 1 : value);
}
