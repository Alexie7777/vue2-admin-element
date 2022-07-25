<template>
  <el-table :data="saleData" stripe style="width: 100%">
    <el-table-column prop="brand" label="品牌"></el-table-column>
    <el-table-column prop="seasonSales" label="季度销售额"> </el-table-column>
    <el-table-column prop="yearSales" label="年度销售额"> </el-table-column>
  </el-table>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SalesOverview extends Vue {
  saleData = [
    {
      brand: "oppo",
      seasonSales: 100,
      yearSales: 300,
    },
    {
      brand: "Xiaomi",
      seasonSales: 100,
      yearSales: 300,
    },
    {
      brand: "Apple",
      seasonSales: 100,
      yearSales: 300,
    },
    {
      brand: "Huawei",
      seasonSales: 100,
      yearSales: 300,
    },
    {
      brand: "Other",
      seasonSales: 100,
      yearSales: 300,
    },
    {
      brand: "vivo",
      seasonSales: 100,
      yearSales: 300,
    },
  ];
}
</script>

<style lang="less" scoped></style>
