<template>
  <el-row id="app">
    <el-col :span="8">
      <ul>
        <li>
          1. 请设置 el-table 的高度，可以设置为
          auto/100%(自适应高度)！不然会一直加载！
        </li>
        <li>
          2. 右侧的列表为自适应高度，试试缩放浏览器的高度。
        </li>
      </ul>
    </el-col>
    <el-col :span="8">
      <el-table border v-el-table-infinite-scroll="load" :data="tableData">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table>
    </el-col>
    <el-col :span="8">
      <el-table
        border
        height="100%"
        v-el-table-infinite-scroll="load"
        :data="tableData"
      >
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table>
    </el-col>
  </el-row>
</template>

<script>
import elTableInfiniteScroll from '../src';

const exampleData = new Array(10).fill({
  date: '2016-05-02',
  name: '王小虎',
  address: '王小虎'
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
  },
  mounted() {
    this.$message.info('滑动到底部试试～');
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
html,
body {
  padding: 0;
  margin: 0;
}
html,
body,
#app,
.el-row,
.el-col {
  height: 100%;
}
body {
  color: #666;
}
</style>

<style scoped>
.el-table {
  width: 100%;
}
</style>
