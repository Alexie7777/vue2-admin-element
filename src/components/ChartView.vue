<template>
  <div>
    <el-col :span="18" class="mt-5">
      <el-card style="height: 200px">123</el-card>
    </el-col>
    <el-col class="mt-5" :span="9">
      <el-card style="height: 235px">123</el-card>
    </el-col>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ChartView extends Vue {}
</script>

<style scoped></style>
