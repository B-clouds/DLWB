<template>
  <div id="x4" style="width: 1879px; height: 250px"></div>
</template>

<script>
export default {
  name: "yEC",
  data() {
    return {
      xList2: [],
      yList2: [],
      units2: "kW",
    };
  },
  props: ["xLists", "yLists", "units"],
  mounted() {
    this.drawLine();
    this.WidthAdaptive();
  },
  watch: {
    xLists(e, f) {
      this.xList2 = e;
      this.drawLine();
    },
    yLists(e, f) {
      this.yList2 = e;
      this.drawLine();
    },
    units(e, f) {
      this.units2 = e;
      this.drawLine();
    },
  },
  methods: {
    // 自适应字体大小变化
    WidthAdaptive(res) {
      var windth = window.innerWidth;
      let fontSize = windth / 1920;
      return fontSize * res;
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("x4"));
      let xLabel = ["08/02", "08/03", "08/04", "08/05", "08/06"];
      let goOutSchool = ["300", "850", "602", "365", "130"];
      let goOutSchool2 = ["600", "650", "422", "165", "730"];
      let goOutSchool3 = ["200", "150", "202", "465", "330"];
      let option = {
        backgroundColor: "transparent",
        tooltip: {
          show: true,
        },
        legend: {
          top: "4%",
          itemGap: 20,
          icon: "rect",
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            padding: [3, 0, 0, 0],
          },
          data: [
            {
              name: "负载率",
              textStyle: {
                color: "#D8D8D8",
              },
            },
          ],
        },
        grid: {
          top: "25%",
          left: "3%",
          right: "3%",
          bottom: "12%",
          // containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLine: {
              //坐标轴轴线相关设置。数学上的x轴
              show: true,
              lineStyle: {
                color: "#8C9493",
              },
            },
            axisLabel: {
              //坐标轴刻度标签的相关设置
              textStyle: {
                color: "rgba(255, 255, 255, 0.8)",
                padding: this.WidthAdaptive(2),
              },
              formatter: function (data) {
                return data;
              },
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: "#192a44",
              },
            },
            axisTick: {
              show: false,
            },
            data: xLabel,
          },
        ],
        yAxis: [
          {
            name: "单位：kW",
            nameTextStyle: {
              color: " #D8D8D8",
              fontSize: this.WidthAdaptive(14),
            },
            splitLine: {
              lineStyle: {
                type: "dashed",
                color: "rgba(112,112,112,0.5)",
              },
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#8C9493",
              },
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "rgba(255, 255, 255, 0.8)",
                padding: this.WidthAdaptive(2),
              },
            },
            axisTick: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "负载率",
            type: "line",
            symbol: "circle", // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
            symbolSize: 0,
            smooth: true,
            lineStyle: {
              normal: {
                width: this.WidthAdaptive(2),
                color: "#21CFFF", // 线条颜色
              },
              borderColor: "rgba(0,0,0,.4)",
            },
            itemStyle: {
              color: "#21CFFF",
            },
            tooltip: {
              show: true,
            },
            data: goOutSchool,
            markPoint: {
              symbol: "image://" + require("./img/1.png"),
              symbolSize: 13,
              label: {
                show: true,
                formatter: "{c}",
                position: "top",
              },
              data: [
                {
                  name: "最大值",
                  type: "max",
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
