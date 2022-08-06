<template>
  <div ref="echarts"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import * as echarts from "echarts";

@Component
export default class ECharts extends Vue {
  @Prop({ required: true }) isAxisChart!: boolean;
  @Prop({ required: true }) chartOptions!: object;

  axisOptions = {
    legend: {
      //图例文字额色

      textstyle: {
        color: "#333",
      },
    },

    grid: {
      left: "20%",
    },

    tooltip: {
      trigger: "axis",
    },

    xAxis: {
      type: "category", // 类目轴

      data: [],

      axisLine: {
        linestyle: {
          color: "#17b3a3",
        },
      },

      axisLabel: {
        interval: 0,

        color: "#333",
      },
    },

    yAxis: [
      {
        type: "value",

        axisLine: {
          linestyle: {
            colon: "#17b3a3",
          },
        },
      },
    ],

    color: ["#2ec7c9", "#b6a2de", "#5ablef", "#ffb980", "#d87a80", "#8d98b3"],
    series: [],
  };

  pieOptions = {
    tooltip: {
      trigger: "item",
    },

    color: [
      "#0f78f4",
      "#dd536b",
      "#9462e5",
      "#a6a6a6",
      "#e1bb22",
      "#39c362",
      "#3ed1cf",
    ],
    series: [],
  };

  echart = null;

  get options() {
    return this.isAxisChart ? this.axisOptions : this.pieOptions;
  }

  mounted() {
    this.initChart();
  }

  initChart() {
    this.initChartData();
    if (this.echart) {
      this.echart.setOption(this.options);
    } else {
      this.echart = echarts.init(this.$refs.echarts as HTMLElement);
      this.echart.setOption(this.options);
    }
  }

  initChartData() {
    if (this.isAxisChart) {
      this.axisOptions.xAxis.data = this.chartOptions.xData;
      this.axisOptions.series = this.chartOptions.series;
    } else {
      this.pieOptions.series = this.chartOptions.series;
    }
  }

  @Watch("chartOptions", { deep: true })
  onChartOptionsChanged() {
    this.initChart();
  }
}
</script>

<style scoped></style>
