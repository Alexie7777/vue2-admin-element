<template>
  <el-row :gutter="15">
    <el-col :span="6">
      <el-card class="mt-5" shadow="hover">
        <div class="flex justify-start gap-5 items-center" slot="header">
          <img
            :src="imgUrl"
            class="w-20 h-20 rounded-full bg-red-300"
            alt="Avatar"
          />
          <div>
            <h3 class="text-lg">Admin</h3>
            <p class="text-gray-400 py-2 text-base">超级管理员</p>
          </div>
        </div>
        <div class="footer p-2 pl-4 border-0">
          <p class="text-gray-400 pl-3 m-0 text-sm">
            IP地址: {{ ipInfo.ip_address }}
          </p>
          <p class="text-gray-400 pl-3 text-sm">
            登录地点: {{ ipInfo.city }} {{ ipInfo.country }}
          </p>
        </div>
      </el-card>
      <el-card class="mt-5" shadow="hover">
        <SalesOverview />
      </el-card>
    </el-col>
    <OrderOverview />
    <ChartView />
  </el-row>
</template>

<script lang="ts">
import axios from "axios";
import { Component, Vue } from "vue-property-decorator";
import SalesOverview from "@/components/SalesOverview.vue";
import OrderOverview from "@/components/OrderOverview.vue";
import ChartView from "@/components/ChartView.vue";

@Component({
  components: {
    SalesOverview,
    OrderOverview,
    ChartView,
  },
})
export default class HomeView extends Vue {
  name = "Alex7777";
  imgUrl = require("@/assets/peep-1.png");
  ipInfo = {};

  created() {
    axios
      .get(
        "https://ipgeolocation.abstractapi.com/v1/?api_key=d2448e6f3e954983b3edb8c7f8944eae"
      )
      .then((res) => {
        let { country, city, ip_address } = res.data;
        console.log(res.data);
        this.ipInfo = {
          country,
          city,
          ip_address,
        };
      });
  }
}
</script>

<style lang="less" scoped>
.el-header {
  background-color: #333;
}

.el-main {
  padding-top: 0;
}
</style>
