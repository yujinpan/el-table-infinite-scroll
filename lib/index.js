/*!
 * el-table-infinite-scroll v1.0.8
 * (c) 2019-2019 yujinpan
 * Released under the MIT License.
 */

import 'core-js/modules/web.dom.iterable';
import elInfiniteScroll from 'element-ui/lib/infinite-scroll';

var elScope = 'ElInfiniteScroll';
var msgTitle = "[el-table-infinite-scroll]: ";
var elTableScrollWrapperClass = '.el-table__body-wrapper';
var elTableInfiniteScroll = {
  inserted: function inserted(el, binding, vnode, oldVnode) {
    var scrollElem = el.querySelector(elTableScrollWrapperClass);

    if (!scrollElem) {
      throw "".concat(msgTitle, "\u627E\u4E0D\u5230 ").concat(elTableScrollWrapperClass, " \u5BB9\u5668");
    }

    scrollElem.style.overflowY = 'auto';
    setTimeout(function () {
      if (!el.style.height) {
        scrollElem.style.height = '400px';
        console.warn("".concat(msgTitle, "\u8BF7\u5C3D\u91CF\u8BBE\u7F6E el-table \u7684\u9AD8\u5EA6\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E3A auto/100%\uFF08\u81EA\u9002\u5E94\u9AD8\u5EA6\uFF09\uFF0C\u672A\u8BBE\u7F6E\u4F1A\u53D6 400px \u7684\u9ED8\u8BA4\u503C\uFF08\u4E0D\u7136\u4F1A\u5BFC\u81F4\u4E00\u76F4\u52A0\u8F7D\uFF09"));
      }

      asyncElOptions(vnode, el, scrollElem);
      elInfiniteScroll.inserted(scrollElem, binding, vnode, oldVnode);
      el[elScope] = scrollElem[elScope];
    }, 0);
  },
  componentUpdated: function componentUpdated(el, binding, vnode) {
    asyncElOptions(vnode, el, el.querySelector(elTableScrollWrapperClass));
  },
  unbind: elInfiniteScroll.unbind
};

function asyncElOptions(sourceVNode, sourceElem, targetElem) {
  var context = sourceVNode.context;
  var value;
  ['disabled', 'delay', 'immediate'].forEach(function (name) {
    name = 'infinite-scroll-' + name;
    value = sourceElem.getAttribute(name);

    if (value !== null) {
      targetElem.setAttribute(name, context[value] || value);
    }
  });
  var name = 'infinite-scroll-distance';
  value = sourceElem.getAttribute(name);
  value = context[value] || value;
  targetElem.setAttribute(name, value < 1 ? 1 : value);
}

elTableInfiniteScroll.install = function (Vue) {
  Vue.directive('el-table-infinite-scroll', elTableInfiniteScroll);
};

export default elTableInfiniteScroll;
//# sourceMappingURL=index.js.map
