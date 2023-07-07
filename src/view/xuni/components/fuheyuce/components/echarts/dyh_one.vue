<template>
  <div id="dyh_one" style="width: 100%; height: 100%"></div>
</template>

<script>
export default {
  props: ["echartsData"],
  data() {
    return {
      pieData: [],
      xData: ["2017", "2018", "2019", "2020", "2021", "2022", "2023"],
      yData: [1900, 2000, 2800, 4000, 3900, 2000, 3000],
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
      let myChart = this.$echarts.init(document.getElementById("dyh_one"));
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
          left: "14%",
          right: "3%",
          top: "17%",
          bottom: "13%",
        },
        xAxis: {
          type: "category",
          splitLine: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(255, 255, 255, 0.94)",
            },
          },
          axisLabel: {
            show: true,
            textStyle: {
              fontSize: this.WidthAdaptive(12),
              fontFamily: "Source Han Sans CN",
              fontWeight: "normal",
              color: "#F1F1F1",
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
            color: "#F1F1F1",
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: "dashed",
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
              color: "#F1F1F1",
            },
          },
        },
        series: [
          {
            name: "数量",
            type: "line",
            smooth: true,
            lineStyle: {
              type: "solid",
              color: new this.$echarts.graphic.LinearGradient(
                0,
                0.17,
                0.75,
                1,
                [
                  {
                    offset: 0,
                    color: "rgba(132,167,255,0.00)", // 0% 处的颜色
                  },
                  {
                    offset: 0.37,
                    color: "#50D4FA", // 100% 处的颜色
                  },
                  {
                    offset: 0.75,
                    color: "#4E94FC", // 100% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(87,131,246,0.28)", // 100% 处的颜色
                  },
                ],
                false
              ),
              width: this.WidthAdaptive(2),
            },
            symbol: "circle",
            symbolSize: this.WidthAdaptive(10),
            itemStyle: {
              color: "#FFFFFF",
            },
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(17,70,139,0.20)", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(17,70,139,0.00)", // 100% 处的颜色
                    },
                  ],
                  false
                ),
              },
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
