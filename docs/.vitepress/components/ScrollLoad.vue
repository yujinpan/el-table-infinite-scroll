<template>
  <p style="margin-bottom: 8px">
    <span>loaded page(total: {{ total }}): {{ page }}, </span>
    disabled:
    <el-switch v-model="disabled" :disabled="page >= total"></el-switch>
  </p>

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
import { ref } from 'vue';

const dataTemplate = new Array(10).fill({
  date: '2009-01-01',
  name: 'Tom',
  age: '30',
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
