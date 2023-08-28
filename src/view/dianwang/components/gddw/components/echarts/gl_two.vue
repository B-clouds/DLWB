<template>
  <div id="gl_two" style="width: 379px; height: 262px"></div>
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
      let myChart = this.$echarts.init(document.getElementById("gl_two"));
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
          icon: "circle",
          itemWidth: this.WidthAdaptive(6),
          itemHeight: this.WidthAdaptive(6),
          itemGap: this.WidthAdaptive(34),
          padding: this.WidthAdaptive(2),
          top: this.WidthAdaptive(18),
          right: this.WidthAdaptive(18),
          textStyle: {
            color: "rgba(201, 229, 255, 1)",
            fontSize: this.WidthAdaptive(12),
          },
        },
        grid: {
          top: "20%",
          right: "5%",
          left: "10%",
          bottom: "10%",
        },
        xAxis: [
          {
            type: "category",
            data: ["2018", "2019", "2020", "2021", "2022", "2023"],
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.5)",
              },
            },
            axisLabel: {
              margin: 10,
              color: "#e2e9ff",
              textStyle: {
                fontSize: this.WidthAdaptive(10),
              },
            },
            axisTick: {
              show: false,
            },
          },
        ],
        yAxis: [
          {
            nameTextStyle: {
              color: "#CCCCCC",
              fontSize: this.WidthAdaptive(10),
              padding: 5,
            },
            axisLabel: {
              formatter: "{value}",
              color: "rgba(255,255,255,.9)",
              fontSize: this.WidthAdaptive(10),
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
            data: [68, 50, 69, 75, 59, 62, 47],
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
                      color: "rgba(25, 120, 229, 0.7)", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(25, 120, 229, 0)", // 100% 处的颜色
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
            data: [68, 50, 69, 75, 59, 62, 47],
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
                      color: "rgba(16,210,172,1)", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(16,210,172,0)", // 100% 处的颜色
                    },
                  ],
                  false
                ),
              },
            },
          },
        ],
        barGap: "60%",
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
