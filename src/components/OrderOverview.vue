<template>
  <div>
    <el-col v-for="(item, index) in data" :key="index" class="mt-5" :span="6">
      <el-card shadow="hover">
        <div class="flex items-center">
          <div class="flex justify-center items-center self-stretch">
            <i
              :class="`el-icon-${item.icon}`"
              class="text-3xl p-5"
              :style="{ background: item.color }"
            ></i>
          </div>
          <div class="flex flex-col px-5">
            <p class="text-lg">{{ item.name }}</p>
            <p class="text-gray-400">${{ item.value }}</p>
          </div>
        </div>
      </el-card>
    </el-col>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class OrderOverview extends Vue {
  data = [
    {
      name: "今日支付订单",
      value: 1234,
      icon: "success",
      color: "#2ec7c9",
    },
    {
      name: "今日收藏订单",
      value: 210,
      icon: "star-on",
      color: "#ffb980",
    },
    {
      name: "今日未支付订单",
      value: 1234,
      icon: "s-goods",
      color: "#5ab1ef",
    },
    {
      name: "本月支付订单",
      value: 1234,
      icon: "success",
      color: "#2ec7c9",
    },
    {
      name: "本月收藏订单",
      value: 1234,
      icon: "star-on",
      color: "#ffb980",
    },
    {
      name: "本月未支付订单",
      value: 1234,
      icon: "s-goods",
      color: "#5ab1ef",
    },
  ];
}
</script>

<style scoped>
/deep/ .el-card__body {
  padding: 0;
}
</style>
