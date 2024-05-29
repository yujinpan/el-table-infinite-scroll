---
title: vue3
---

# el-table-infinite-scroll(vue3)

<!--@include: ./description.md-->

<!--@include: ./support.md-->

## Install

```sh
npm install --save el-table-infinite-scroll
```

## Usage

### Global register

```js
import { createApp } from "vue";
import App from "./src/App.vue";

import ElTableInfiniteScroll from "el-table-infinite-scroll";

const app = createApp(App);

app.use(ElTableInfiniteScroll);
app.mount("#app");
```

### Component register

```vue
<template>
  <el-table v-el-table-infinite-scroll="load"></el-table>
</template>

<script setup>
import { default as vElTableInfiniteScroll } from "el-table-infinite-scroll";
</script>
```

## Example

Scroll table to bottom to load paginated data.

<demo name="ScrollLoad" />

## Options

Supported [element-plus/infinite-scroll](https://element-plus.org/zh-CN/component/infinite-scroll.html#指令) all options.
