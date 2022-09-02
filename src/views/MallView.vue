<template>
  <div class="table">
    <el-table :data="computedData" stripe style="width: 100%">
      <el-table-column prop="id" label="商品ID" width="180"> </el-table-column>
      <el-table-column prop="title" label="商品名称" width="180">
      </el-table-column>
      <el-table-column prop="introduce" label="详情"> </el-table-column>
    </el-table>

    <div class="flex justify-center items-center">
      <el-pagination
        layout="prev, pager, next"
        :page-size="pageSize"
        @current-change="curChange"
        @size-change="sizeChange"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";

@Component
export default class MallView extends Vue {
  tableData = [];
  page = 1; // 当前页数
  pageSize = 7; // 每页条数

  get total() {
    return this.tableData.length;
  }

  get computedData() {
    return this.tableData.slice(
      (this.page - 1) * this.pageSize,
      this.page * this.pageSize
    );
  }

  curChange(page: number) {
    this.page = page;
  }

  sizeChange(pageSize: number) {
    this.pageSize = pageSize;
  }

  async created() {
    const {
      data: { data },
    } = await axios.get("https://mock.apifox.cn/m1/426358-0-default/api/goods");
    this.tableData = data;
  }
}
</script>

<style scoped>
.table {
  width: 1023px;
}
</style>
