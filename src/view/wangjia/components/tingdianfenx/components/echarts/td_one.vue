<template>
  <div id="td_one" style="width: 100%; height: 100%"></div>
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
      let myChart = this.$echarts.init(document.getElementById("td_one"));
      myChart.clear();

      // 渲染
      var option = {
        tooltip: {
          trigger: "axis",
          backgroundColor: "rgba(8, 22, 38, 0.7)",
          borderColor: "transparent",
          padding: [this.WidthAdaptive(10)],
          axisPointer: {
            type: "shadow",
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
          left: "12%",
          right: "2%",
          top: "16%",
          bottom: "15%",
        },
        xAxis: {
          type: "category",
          splitLine: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(176, 215, 255, 0.4)",
            },
          },
          axisLabel: {
            show: true,
            textStyle: {
              fontSize: this.WidthAdaptive(12),
              fontFamily: "Source Han Sans CN",
              fontWeight: "normal",
              color: "rgba(216, 240, 255, 0.6)",
            },
          },
          axisTick: {
            show: false,
          },
          data: ["2020", "2023", "2024", "2025", "2026"],
        },
        yAxis: {
          type: "value",
          name: "单位: 次",
          nameGap: this.WidthAdaptive(15),
          nameTextStyle: {
            fontSize: this.WidthAdaptive(12),
            fontFamily: "Source Han Sans CN",
            fontWeight: "normal",
            color: "rgba(216, 240, 255, 0.6)",
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: "dashed",
              color: "rgba(176, 215, 255, 0.25)",
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
              color: "rgba(216, 240, 255, 0.6)",
            },
          },
        },
        series: [
          {
            name: "停电次数",
            type: "line",
            lineStyle: {
              type: "solid",
              color: "#1978E5",
              width: this.WidthAdaptive(2),
            },
            symbol: "circle",
            symbolSize: this.WidthAdaptive(6),
            itemStyle: {
              color: "#1978E5",
              borderColor: "#FFFFFF",
              borderWidth: this.WidthAdaptive(1),
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
                      color: "rgba(0,150,255,0.15)", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(0,150,255,0)", // 100% 处的颜色
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
            data: [32, 80, 30, 33, 89],
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
