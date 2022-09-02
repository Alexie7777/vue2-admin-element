<template>
  <el-row :gutter="15">
    <el-col :span="6">
      <el-card class="mt-5 md-card" shadow="hover">
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
        <div v-loading="ipIsLoading" class="footer p-2 pl-4 border-0">
          <p class="text-gray-400 pl-3 m-0 text-sm">
            IP地址:
            <span :class="warningStyle">{{ ipInfo.ip_address }}</span>
          </p>
          <p class="text-gray-400 pl-3 text-sm">
            登录地点:
            <span :class="warningStyle"
              >{{ ipInfo.city }} {{ ipInfo.country }}</span
            >
          </p>
        </div>
      </el-card>
      <el-card class="mt-5 md-card" shadow="hover">
        <SalesOverview />
      </el-card>
    </el-col>
    <OrderOverview />
    <ChartView />
  </el-row>
</template>

<script lang="ts">
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
  hasError = false;
  ipIsLoading = true;

  created() {
    this.getGeoIp();
  }

  get warningStyle() {
    return this.hasError ? "text-red-400" : "";
  }

  async getGeoIp() {
    try {
      const result = await this.$http.get(
        "https://ipgeolocation.abstractapi.com/v1/?api_key=d2448e6f3e954983b3edb8c7f8944eae"
      );
      let { ip_address, city, country } = result.data;
      this.ipInfo = {
        country,
        city,
        ip_address,
      };
    } catch (error) {
      this.hasError = true;
      this.ipInfo = {
        country: error.message,
        ip_address: error.message,
      };
      this.$notify({
        title: "警告",
        message: "由于网络问题, 无法获取您的IP",
        type: "warning",
      });
    } finally {
      this.ipIsLoading = false;
    }
  }
}
</script>

<style lang="less" scoped>
.el-main {
  padding-top: 0;
}
</style>
