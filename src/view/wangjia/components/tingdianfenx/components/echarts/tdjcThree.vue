<template>
  <div id="tdjcThree" style="width: 379px; height: 270px"></div>
</template>

<script>
export default {
  props: ["echartsData", "xList", "y1", "y2"],
  data() {
    return {
      pieData: [],
      xLists: [],
      y1s: [],
      y2s: [],
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
    xList(e, f) {
      this.xLists = e;
      this.myecharts();
    },
    y1(e, f) {
      this.y1s = e;
      this.myecharts();
    },
    y2(e, f) {
      this.y2s = e;
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
      let myChart = this.$echarts.init(document.getElementById("tdjcThree"));
      myChart.clear();
      this.xLists = ["5次以上", "连续60天停电3次以上", "计划检修停电3次以上"];
      this.y1s = [30, 40, 50];
      this.y2s = [12, 18, 25];
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
          top: "17%",
          right: "5%",
          left: "14%",
          bottom: "20%",
        },
        xAxis: [
          {
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
            name: "线路",
            type: "bar",
            data: this.y1s,
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
            name: "配变",
            type: "bar",
            data: this.y2s,
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
