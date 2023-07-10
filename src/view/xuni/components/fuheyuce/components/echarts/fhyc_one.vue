<template>
  <div id="fhyc_one" style="width: 100%; height: 100%"></div>
</template>

<script>
export default {
  props: ["echartsData"],
  data() {
    return {
      pieData: [],
      xData: ["12.01", "12.02", "12.04", "12.05", "12.06", "12.07"],
      yData: [19, 20, 28, 40, 49, 70],
      yData1: [10, 14, 19, 29, 42, 60],
      yData2: [40, 45, 50, 55, 60, 70],
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
      let myChart = this.$echarts.init(document.getElementById("fhyc_one"));
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
          icon: "rect",
          top: "1%",
          itemWidth: this.WidthAdaptive(8),
          itemHeight: this.WidthAdaptive(8),
          itemGap: this.WidthAdaptive(20),
          textStyle: {
            color: "rgba(230, 247, 255, 0.7)",
            fontSize: this.WidthAdaptive(12),
          },
        },
        grid: {
          left: "12%",
          right: "10%",
          top: "28%",
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
        yAxis: [{
          type: "value",
          name: "负荷：KAV",
          nameGap: this.WidthAdaptive(15),
          interval: 20,
          max:100,
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
        },{
          type: "value",
          name: "增长率：%",
          nameGap: this.WidthAdaptive(15),
          nameTextStyle: {
            fontSize: this.WidthAdaptive(12),
            fontFamily: "Source Han Sans CN",
            fontWeight: "normal",
            color: "rgba(216, 240, 255, 0.7)",
          },
          interval: 20,
          max: 100,
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
        },],
        series: [
          {
            name: "同期负荷值",
            type: "line",
            lineStyle: {
              type: "solid",
              color: "#1890FF",
              width: this.WidthAdaptive(1),
            },
            symbol: "circle",
            symbolSize: this.WidthAdaptive(6),
            itemStyle: {
              color: "#1890FF",
              borderColor: "rgba(24, 144, 255, 0.4)",
              borderWidth: this.WidthAdaptive(4),
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
                      color: "rgba(24,144,255,0.33)", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(24,144,255,0)", // 100% 处的颜色
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
          {
            name: "同期预测值",
            type: "line",
            lineStyle: {
              type: "solid",
              color: "#41E4BB",
              width: this.WidthAdaptive(1),
            },
            symbol: "circle",
            symbolSize: this.WidthAdaptive(6),
            itemStyle: {
              color: "#41E4BB",
              borderColor: "rgba(65,228,187,0.40)",
              borderWidth: this.WidthAdaptive(4),
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
                      color: "rgba(65,228,187,0.30)", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(65,228,187,0)", // 100% 处的颜色
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
            data: this.yData1,
            yAxisIndex: 1,
          },
          {
            name: "本期预测值",
            type: "line",
            lineStyle: {
              type: "solid",
              color: "#FFAA18",
              width: this.WidthAdaptive(1),
            },
            symbol: "circle",
            symbolSize: this.WidthAdaptive(6),
            itemStyle: {
              color: "#FFAA18",
              borderColor: "rgba(255, 170, 24, 0.4)",
              borderWidth: this.WidthAdaptive(4),
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
                      color: "rgba(255,201,24,0.33)", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(255,201,24,0)", // 100% 处的颜色
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
            data: this.yData2,
            yAxisIndex: 1,
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
