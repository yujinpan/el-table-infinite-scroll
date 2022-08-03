<template>
  <el-row>
    <el-col :span="12">
      <el-table
        border
        v-el-table-infinite-scroll="load"
        infinite-scroll-disabled="disabled"
        :data="tableData"
      >
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table>
    </el-col>
    <el-col :span="12">
      <el-table
        border
        height="100%"
        v-el-table-infinite-scroll="load"
        infinite-scroll-disabled="disabled"
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
import elTableInfiniteScroll from '@/index.ts';

const exampleData = new Array(10).fill({
  date: '2016-05-02',
  name: '王小虎',
  address: '王小虎',
});

export default {
  directives: {
    'el-table-infinite-scroll': elTableInfiniteScroll,
  },
  data() {
    return {
      page: 1,
      disabled: false,
      tableData: exampleData,
    };
  },
  methods: {
    load() {
      if (this.page > 3) {
        this.disabled = true;
        this.$message.info('全部加载完毕（infinite-scroll-disabled="true"）');
      } else {
        this.$message.success('加载下一页');
      }
      this.tableData = this.tableData.concat(exampleData);
      this.page++;
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

#app,
.el-row,
.el-col {
  height: 100%;
}
</style>
