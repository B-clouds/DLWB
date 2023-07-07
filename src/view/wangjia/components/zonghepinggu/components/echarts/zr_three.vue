<template>
  <div id="zr_three" style="width: 379px; height: 279px"></div>
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
      let myChart = this.$echarts.init(document.getElementById("zr_three"));
      myChart.clear();
      let option = {
        backgroundColor: "transparent",
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          icon: "rect",
          itemWidth: this.WidthAdaptive(8),
          itemHeight: this.WidthAdaptive(8),
          itemGap: this.WidthAdaptive(34),
          padding: this.WidthAdaptive(2),
          top: this.WidthAdaptive(18),
          textStyle: {
            color: "rgba(201, 229, 255, 1)",
            fontSize: this.WidthAdaptive(12),
          },
        },
        grid: {
          top: "19%",
          right: "5%",
          left: "10%",
          bottom: "14%",
        },
        xAxis: [
          {
            type: "category",
            data: ["2019", "2020", "2021", "2022", "2023", "2024", "2025"],
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.5)",
              },
            },
            axisLabel: {
              margin: 10,
              color: "#e2e9ff",
              textStyle: {
                fontSize: this.WidthAdaptive(12),
              },
            },
            axisTick: {
              show: false,
            },
          },
        ],
        yAxis: [
          {
            name: "单位:个",

            nameTextStyle: {
              color: "#CCCCCC",
              fontSize: this.WidthAdaptive(12),
              padding: 5,
            },
            axisLabel: {
              formatter: "{value}",
              color: "rgba(255,255,255,.9)",
              fontSize: this.WidthAdaptive(12),
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "rgba(0,186,255,.6)",
              },
            },
            splitLine: {
              lineStyle: {
                type: "dashed",
                color: "rgba(255,255,255,0.2)",
              },
            },
          },
        ],
        series: [
          {
            name: "电缆",
            type: "bar",
            data: [30, 68, 50, 69, 40, 30, 20],
            barWidth: this.WidthAdaptive(8),
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(24, 144, 255, 1)", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(5, 143, 231, .3)", // 100% 处的颜色
                    },
                  ],
                  false
                ),
              },
            },
          },
          {
            name: "架空",
            type: "bar",
            data: [70, 68, 50, 49, 20, 70, 50],
            barWidth: this.WidthAdaptive(8),
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(238, 113, 92, 1)", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(238, 113, 92, .3)", // 100% 处的颜色
                    },
                  ],
                  false
                ),
              },
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
