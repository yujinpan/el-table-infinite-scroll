---
title: vue2
---

# el-table-infinite-scroll(vue2)

<!--@include: ./description.md-->

<!--@include: ./support.md-->

## Install

```sh
npm install --save el-table-infinite-scroll@2
```

## Usage

### Global register

```js
import Vue from "vue";

import ElTableInfiniteScroll from "el-table-infinite-scroll";

Vue.directive("el-table-infinite-scroll", ElTableInfiniteScroll);
```

### Component register

```vue
<script>
import ElTableInfiniteScroll from "el-table-infinite-scroll";

export default {
  directives: {
    "el-table-infinite-scroll": ElTableInfiniteScroll,
  },
};
</script>
```

## Example

```vue
<template>
  <el-table
    v-el-table-infinite-scroll="load"
    :data="data"
    :infinite-scroll-disabled="disabled"
    height="200px"
  >
    <el-table-column type="index" />
    <el-table-column prop="date" label="date" />
    <el-table-column prop="name" label="name" />
    <el-table-column prop="age" label="age" />
  </el-table>
</template>

<script>
const dataTemplate = new Array(10).fill({
  date: "2009-01-01",
  name: "Tom",
  age: "30",
});

export default {
  data() {
    return {
      data: [],
      page: 0,
      total: 5,
    };
  },
  methods: {
    load() {
      if (this.disabled) return;

      this.page++;
      if (this.page <= this.total) {
        this.data = this.data.concat(dataTemplate);
      }

      if (this.page === this.total) {
        this.disabled = true;
      }
    },
  },
};
</script>
```

## Options

Supported [element-ui/infinite-scroll](https://element.eleme.cn/#/zh-CN/component/infiniteScroll#attributes) all options.
