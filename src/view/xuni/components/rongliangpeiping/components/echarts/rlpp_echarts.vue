<template>
  <div id="rlpp_echarts" style="width: 100%; height: 100%"></div>
</template>

<script>
export default {
  props: ["echartsData"],
  data() {
    return {
      pieData: [],
      xData: ["分区数量", "网格数量", "单元数量"],
      yData: [75, 60, 65],
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
      let myChart = this.$echarts.init(document.getElementById("rlpp_echarts"));
      myChart.clear();
      // 渲染
      var option = {
        tooltip: {
          trigger: "axis",
          backgroundColor: "rgba(8, 22, 38, 0.7)",
          borderColor: "transparent",
          padding: [this.WidthAdaptive(10)],
          axisPointer: {
            type: "line",
          },
          textStyle: {
            color: "#D8F0FF",
            fontFamily: "Source Han Sans CN",
            fontSize: this.WidthAdaptive(12),
          },
        },
        legend: {
          show: false,
        },
        grid: {
          left: "10%",
          right: "2%",
          top: "20%",
          bottom: "11%",
        },
        xAxis: {
          type: "category",
          splitLine: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#BAE7FF",
            },
          },
          axisLabel: {
            show: true,
            textStyle: {
              fontSize: this.WidthAdaptive(12),
              fontFamily: "Source Han Sans CN",
              fontWeight: "normal",
              color: "#B3B3B3",
            },
          },
          axisTick: {
            show: false,
          },
          data: this.xData,
        },
        yAxis: {
          type: "value",
          name: "单位：个",
          nameGap: this.WidthAdaptive(15),
          nameTextStyle: {
            fontSize: this.WidthAdaptive(12),
            fontFamily: "Source Han Sans CN",
            fontWeight: "normal",
            color: "rgba(216, 240, 255, 0.7)",
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: "solid",
              color: "rgba(167, 167, 167, 0.3)",
            },
          },
          axisLine: {
            //坐标轴轴线相关设置。数学上的y轴
            show: false,
            lineStyle: {
              color: "rgba(176, 215, 255, 0.4)",
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: true,
            textStyle: {
              fontSize: this.WidthAdaptive(12),
              fontFamily: "Source Han Sans CN",
              fontWeight: "normal",
              color: "#B3B3B3",
            },
          },
        },
        series: [
          {
            name: "数量",
            type: "bar",
            barWidth: this.WidthAdaptive(12),
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "#0EECE4", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#058FE7", // 100% 处的颜色
                  },
                ],
                false
              ),
            },
            label: {
              show: false,
            },
            emphasis: {
              focus: "series",
            },
            data: this.yData,
          },
        ],
      };
      myChart.setOption(option, true);

      window.onresize = myChart.resize;
    },
  },
};
</script>

<style scoped></style>
