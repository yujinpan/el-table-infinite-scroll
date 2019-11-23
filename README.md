element-ui 的表格与无限滚动的结合（el-table + infinite-scroll）。

- 查看实例 [https://yujinpan.github.io/el-table-infinite-scroll/](https://yujinpan.github.io/el-table-infinite-scroll/)

# 教程

此指令依赖于 element-ui@2.12.0，使用前请熟悉：

- element-ui@2.12.0 [表格](https://element.eleme.cn/#/zh-CN/component/table)
- element-ui@2.12.0 [无限滚动指令](https://element.eleme.cn/#/zh-CN/component/infiniteScroll)

## 安装

```
npm install --save el-table-infinite-scroll
```

## 全局引入

```
import Vue from 'vue';
import elTableInfiniteScroll from 'el-table-infinite-scroll';

Vue.use(elTableInfiniteScroll);
```

## 局部引入

```vue
<script>
import elTableInfiniteScroll from 'el-table-infinite-scroll';
export default {
  directives: {
    'el-table-infinite-scroll': elTableInfiniteScroll
  }
}
</script>
```

## 组件中使用

```vue
<template>
  <el-table
    border
    height="400px"
    v-el-table-infinite-scroll="load"
    :data="tableData"
  >
    <el-table-column prop="date" label="日期" width="180"> </el-table-column>
    <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
    <el-table-column prop="address" label="地址"> </el-table-column>
  </el-table>
</template>

<script>
import elTableInfiniteScroll from 'el-table-infinite-scroll';

const exampleData = new Array(10).fill({
  date: '2016-05-02',
  name: '王小虎',
  address: '上海市普陀区金沙江路 1518 弄'
});

export default {
  directives: {
    'el-table-infinite-scroll': elTableInfiniteScroll
  },
  data() {
    return {
      tableData: exampleData
    };
  },
  methods: {
    load() {
      this.$message.success('加载下一页');
      this.tableData = this.tableData.concat(exampleData);
    }
  }
};
</script>

<style scoped>
.el-table {
  width: 100%;
}
</style>
```

## 配置选项

参考 element-ui 官网 [https://element.eleme.cn/#/zh-CN/component/infiniteScroll#attributes](https://element.eleme.cn/#/zh-CN/component/infiniteScroll#attributes)
