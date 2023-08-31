<template>
  <div id="ssxz_two" style="width: 379px; height: 212px"></div>
</template>

<script>
export default {
  props: ["echartsData"],
  data() {
    return {
      pieData: [],
      sj_data: [],
      sl_data: [],
    };
  },
  mounted() {
    this.myecharts();
    this.WidthAdaptive();
  },
  watch: {
    echartsData(n, o) {
      this.pieData = n;
      this.pieData.forEach((item) => {
        this.sj_data.push(item.sj);
        this.sl_data.push(item.sl);
      });
      this.myecharts();
    },
  },
  methods: {
    WidthAdaptive(res) {
      var windth = window.screen.width;

      let fontSize = windth / 1920;
      return fontSize * res;
    },
    myecharts() {
      let myChart = this.$echarts.init(document.getElementById("ssxz_two"));
      myChart.clear();

      let option = {
        backgroundColor: "transparent",
        color: ["rgba(25, 120, 229, 1)"],
        tooltip: {
          //鼠标悬停提示内容
          trigger: "axis", // 触发类型，默认数据触发，可选为：'axis' item
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "line", // 默认为直线，可选为：'line' | 'shadow'
            show: true,
          },
        },
        grid: {
          left: "5%",
          right: "5%",
          top: "20%",
          bottom: "5%",
          containLabel: true,
        },
        xAxis: {
          axisTick: { show: false },
          axisLabel: {
            textStyle: { color: "#CCCCCC", fontSize: 14 },
          },
          axisLine: {
            // onZero: false, // X轴脱离Y轴0刻度
            lineStyle: { color: "#cccccc", type: "solid" },
          },
          data: this.sj_data,
          // data: ["1月", "2月", "3月", "4月", "5月", "6月"],
        },
        yAxis: {
          nameTextStyle: {
            color: "#CCCCCC",
            fontSize: this.WidthAdaptive(12),
          },
          axisTick: { show: false },
          axisLabel: {
            textStyle: { color: "#CCCCCC", fontSize: this.WidthAdaptive(12) },
          },
          axisLine: {
            lineStyle: { color: "#cccccc", type: "solid" },
          },
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "rgba(135,140,147,0.2)",
            },
          },
          boundaryGap: [0, 0.1],
        },
        series: [
          {
            type: "line",
            symbolSize: this.WidthAdaptive(6),
            // data: [61, 35, 96, 169, 54, 69],
            data: this.sl_data,
          },
        ],
      };
      window.onresize = function () {
        myChart.resize();
      };
      myChart.setOption(option);
    },
  },
};
</script>

<style scoped></style>
