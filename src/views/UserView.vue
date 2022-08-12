<template>
  <div>
    <div class="flex m-5">
      <el-button size="small" type="primary">+ 新增</el-button>
      <div class="flex ml-auto">
        <el-input placeholder="请输入内容" v-model="searchBox" clearable>
        </el-input>
        <el-button type="primary">搜索</el-button>
      </div>
    </div>

    <el-table border :data="tableData" style="width: 100%" stripe>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="age" label="年龄" width="120"></el-table-column>
      <el-table-column prop="sex" label="性别" width="120"></el-table-column>
      <el-table-column
        prop="birthday"
        label="出生日期"
        width="150"
      ></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column label="操作"></el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class UserView extends Vue {
  tableData = {};
  searchBox = "";

  async created() {
    const response = await this.$http.get("/api/userData");
    this.tableData = response.data;
    console.log(response);
  }
}
</script>

<style lang="scss" scoped></style>
