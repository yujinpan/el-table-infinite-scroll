/*!
 * el-table-infinite-scroll v1.0.5
 * (c) 2019-2019 yujinpan
 * Released under the MIT License.
 */

import elInfiniteScroll from 'element-ui/lib/infinite-scroll';

var elInserted = elInfiniteScroll.inserted;
var elUnbind = elInfiniteScroll.unbind;
var elScope = 'ElInfiniteScroll';
var elTableInfiniteScroll = {
  inserted: function inserted(el, binding) {
    for (var _len = arguments.length, params = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      params[_key - 2] = arguments[_key];
    }

    var scrollElem = el.querySelector('.el-table__body-wrapper');

    if (!scrollElem) {
      throw 'table-infinite-scroll: 找不到 .el-table__body-wrapper 容器';
    }

    scrollElem.style.overflowY = 'auto';
    setTimeout(function () {
      if (!scrollElem.style.height) {
        scrollElem.style.height = '400px';
        console.warn('[el-table-infinite-scroll]:', '请设置 el-table 的高度，可以设置为 auto/100%！不然会一直加载！');
      }

      scrollElem.setAttribute('infinite-scroll-distance', '1');
      elInserted.apply(void 0, [scrollElem, binding].concat(params));
      el[elScope] = scrollElem[elScope];
    }, 0);
  },
  unbind: elUnbind
};

elTableInfiniteScroll.install = function (Vue) {
  Vue.directive('el-table-infinite-scroll', elTableInfiniteScroll);
};

export default elTableInfiniteScroll;
//# sourceMappingURL=index.js.map
