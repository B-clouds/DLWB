<template>
  <div id="csgzrTwo2" style="width: 379px; height: 278px"></div>
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
      let myChart = this.$echarts.init(document.getElementById("csgzrTwo2"));
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
          top: "10%",
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

          data: ["1月", "2月", "3月", "4月", "5月", "6月"],
        },
        yAxis: {
          name: "单位：次",
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
            data: [6, 5, 2, 9, 10, 4],
            markLine: {
              symbol: ["none", "none"], // 去掉箭头
              label: {
                show: true,
                padding: [0, 0, 25, -100],
                formatter: "{b}",
              },
              lineStyle: {
                color: "#52DBFF",
              },
              data: [
                {
                  name: "改造前平均次数",
                  yAxis: 11,
                },
              ],
            },
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
