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
import elTableInfiniteScroll from '../lib';

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
  },
  mounted() {
    this.$message.info('滑动到底部试试～');
  }
};
</script>

<style scoped>
.el-table {
  width: 100%;
}
</style>
