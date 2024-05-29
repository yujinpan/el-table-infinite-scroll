<template>
  <el-row id="app" gutter="20">
    <el-col :span="8">
      <ul>
        <li
          v-for="item in messageList"
          :key="item"
          v-html="item"
          style="margin-top: 8px"
        ></li>
      </ul>
      <el-divider></el-divider>
      <div style="padding: 0 20px">
        <h4>部分选项:</h4>
        <label
          >禁用滚动：
          <el-switch v-model="disabled"></el-switch>
        </label>
      </div>
    </el-col>
    <el-col :span="8">
      <el-table
        border
        v-el-table-infinite-scroll="load"
        infinite-scroll-disabled="disabled"
        height="auto"
        :data="tableData"
      >
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
import pkg from '../package.json';
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
      messageList: [
        `<h3>el-table-infinite-scroll</h3>`,
        `<h4>version: ${pkg.version}</h4>`,
        `<h4>注意事项：</h4>`,
        '请尽量设置 el-table 的高度，可以设置为 auto/100%（自适应高度），未设置会取 400px 的默认值（不然会导致一直加载）。',
        '右侧的列表为自适应高度，试试缩放浏览器的高度。',
        '配置参数请参考官网：<br /><a target="_blank" href="https://element.eleme.cn/#/zh-CN/component/infiniteScroll#attributes">https://element.eleme.cn/#/zh-CN/component/infiniteScroll#attributes</a>',
      ],
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
  mounted() {
    this.$message.info('滑动到底部试试～');
  },
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
