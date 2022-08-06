<template>
  <div>
    <el-col :span="18" class="mt-5">
      <el-card style="height: 260px">
        <div style="height: 260px" ref="line"></div>
      </el-card>
    </el-col>
    <el-col class="mt-5" :span="9">
      <el-card style="height: 250px">
        <div style="height: 250px" ref="histogram"></div>
      </el-card>
    </el-col>
    <el-col class="mt-5" :span="9">
      <el-card style="height: 250px">
        <div style="height: 250px" ref="pie"></div>
      </el-card>
    </el-col>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Lseries } from "@/type/series";
import * as echarts from "echarts";

@Component
export default class ChartView extends Vue {
  mounted() {
    this.$http.get("/api/homeData").then((res) => {
      const { code, data } = res.data;
      if (code == 200) {
        const order = data.orderData;
        const xDate = order.date;
        const keyArray = Object.keys(order.data[0]);
        const series: Lseries[] = [];
        keyArray.forEach((key) => {
          series.push({
            name: key,
            data: order.data.map((item) => item[key]),
            type: "line",
          });
        });

        const lineOptions = {
          xAxis: {
            data: xDate,
          },
          yAxis: {},
          legend: {
            data: keyArray,
          },
          series,
        };

        const user = data.userData;
        const histogramOptions = {
          xAxis: {
            data: user.map((item) => item["date"]),
          },
          yAxis: {},
          series: [
            {
              type: "bar",
              data: user.map((item) => item["new"]),
            },
            {
              type: "bar",
              data: user.map((item) => item["active"]),
            },
          ],
        };

        const pie = data.videoData;
        const pieOptions = {
          series: [
            {
              type: "pie",
              data: pie.map((item) => {
                return {
                  name: item["name"],
                  value: item["value"],
                };
              }),
            },
          ],
        };
        console.log(pieOptions);

        const lineChart = echarts.init(this.$refs.line as HTMLElement);
        lineChart.setOption(lineOptions);

        const histogramChart = echarts.init(
          this.$refs.histogram as HTMLElement
        );
        histogramChart.setOption(histogramOptions);

        const pieChart = echarts.init(this.$refs.pie as HTMLElement);
        pieChart.setOption(pieOptions);

        console.log(data);
      }
    });
  }
}
</script>

<style scoped></style>
