# el-table-infinite-scroll

Infinite scroll for el-table.

> This directive only does event forwarding,
> which is equivalent to replacing the target DOM
> of `ElInfiniteScroll` with the scroll layer of `ElTable`.

## Documentation

[https://yujinpan.github.io/el-table-infinite-scroll](https://yujinpan.github.io/el-table-infinite-scroll)

## vue3 + element-plus

### Install

** Version >= 3 **

```sh
npm install --save el-table-infinite-scroll@3
```

### Usage

#### Global register

```js
import { createApp } from "vue";
import App from "./src/App.vue";

import ElTableInfiniteScroll from "el-table-infinite-scroll";

const app = createApp(App);

app.use(ElTableInfiniteScroll);
app.mount("#app");
```

#### Component register

```vue
<template>
  <el-table v-el-table-infinite-scroll="load"></el-table>
</template>

<script setup>
import { default as vElTableInfiniteScroll } from "el-table-infinite-scroll";
</script>
```

### Example

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

<script setup>
import { ref } from "vue";

const dataTemplate = new Array(10).fill({
  date: "2009-01-01",
  name: "Tom",
  age: "30",
});

const data = ref([]);
const disabled = ref(false);
const page = ref(0);
const total = ref(5);

const load = () => {
  if (disabled.value) return;

  page.value++;
  if (page.value <= total.value) {
    data.value = data.value.concat(dataTemplate);
  }

  if (page.value === total.value) {
    disabled.value = true;
  }
};
</script>
```

### Options

Supported [element-plus/infinite-scroll](https://element-plus.org/zh-CN/component/infinite-scroll.html#指令) all options.

## vue2 + element-ui

### Install

** Version ^ 2 **

```sh
npm install --save el-table-infinite-scroll@2
```

### Usage

#### Global register

```js
import Vue from "vue";

import ElTableInfiniteScroll from "el-table-infinite-scroll";

Vue.directive("el-table-infinite-scroll", ElTableInfiniteScroll);
```

#### Component register

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

### Example

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

### Options

Supported [element-ui/infinite-scroll](https://element.eleme.cn/#/zh-CN/component/infiniteScroll#attributes) all options.

## Contribution

Thanks to [JetBrains](https://www.jetbrains.com/?from=el-table-infinite-scroll) for supporting my free open source license.

![JetBrains](./jetbrains.svg)
