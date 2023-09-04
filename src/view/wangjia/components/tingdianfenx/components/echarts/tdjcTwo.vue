<template>
  <div id="tdjcTwo" style="width: 379px; height: 248px"></div>
</template>

<script>
export default {
  props: ["echartsData"],
  data() {
    return {
      pieData: [],
    };
  },
  mounted() {
    this.myecharts();
    this.WidthAdaptive();
  },
  watch: {
    echartsData(n, o) {
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
      let myChart = this.$echarts.init(document.getElementById("tdjcTwo"));
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
          type: "category",
          data: this.xLists,
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,.5)",
            },
          },
          axisLabel: {
            margin: 10,
            color: "#e2e9ff",
            interval: 0,

            textStyle: {
              fontSize: this.WidthAdaptive(10),
            },
          },
          axisTick: {
            show: false,
          },

          data: ["10次以上", "6-10次", "3-5次", "2次及以下"],
        },
        yAxis: {
          nameTextStyle: {
            color: "#CCCCCC",
            fontSize: this.WidthAdaptive(10),
          },
          axisTick: { show: false },
          axisLabel: {
            textStyle: { color: "#CCCCCC", fontSize: this.WidthAdaptive(10) },
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
            data: [6, 5, 2, 9],
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
