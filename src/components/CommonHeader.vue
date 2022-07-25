<template>
  <div class="h-full flex items-center">
    <el-button
      @click="handleToggle"
      class="p-2"
      icon="el-icon-menu"
      size="mini"
    ></el-button>
    <h3 class="text-white p-2">首页</h3>
    <el-dropdown trigger="click" class="ml-auto">
      <span class="el-dropdown-link">
        <img
          :src="imgUrl"
          class="w-10 h-10 object-cover rounded-full bg-red-300"
          alt="Avatar"
        />
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item>退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class CommonHeader extends Vue {
  imgUrl = require("../assets/peep-1.png");

  handleToggle() {
    this.$store.commit("toggleMenu");
  }
}
</script>

<style lang="less" scoped></style>
