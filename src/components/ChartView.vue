<template>
  <div>
    <el-col :span="18" class="mt-5">
      <el-card shadow="hover" style="height: 260px">
        <!-- <div style="height: 260px" ref="line"></div> -->
        <ECharts
          style="height: 260px"
          :isAxisChart="true"
          :chartOptions="echartsData.order"
        />
      </el-card>
    </el-col>
    <el-col class="mt-5" :span="9">
      <el-card shadow="hover" style="height: 250px">
        <!-- <div style="height: 250px" ref="histogram"></div> -->
        <ECharts
          :isAxisChart="true"
          :chartOptions="echartsData.user"
          style="height: 250px"
        />
      </el-card>
    </el-col>
    <el-col class="mt-5" :span="9">
      <el-card shadow="hover" style="height: 250px">
        <ECharts
          :isAxisChart="false"
          :chartOptions="echartsData.video"
          style="height: 250px"
        />
      </el-card>
    </el-col>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import { Lseries } from "@/type/series";
import * as echarts from "echarts";
import ECharts from "@/components/ECharts.vue";

@Component({
  components: {
    ECharts,
  },
})
export default class ChartView extends Vue {
  echartsData = {
    order: {
      xData: [],
      series: [],
    },
    user: {
      xData: [],
      series: [],
    },
    video: {
      series: [],
    },
  };

  created() {
    this.$http.get("/api/homeData").then((res) => {
      const { code, data } = res.data;
      if (code == 200) {
        const order = data.orderData;
        const xDate = order.date;
        const keyArray = Object.keys(order.data[0]);
        const series = [];
        keyArray.forEach((key) => {
          series.push({
            name: key,
            data: order.data.map((item) => item[key]),
            type: "line",
          });
        });

        this.echartsData.order.xData = xDate;
        this.echartsData.order.series = series;

        const user = data.userData;
        this.echartsData.user.xData = user.map((item) => item["date"]);
        this.echartsData.user.series = [
          {
            type: "bar",
            data: user.map((item) => item["new"]),
          },
          {
            type: "bar",
            data: user.map((item) => item["active"]),
          },
        ];

        const pie = data.videoData;
        this.echartsData.video.series = [
          {
            type: "pie",
            data: pie.map((item) => {
              return {
                name: item["name"],
                value: item["value"],
              };
            }),
          },
        ];
      }
    });
  }
}
</script>

<style scoped></style>
