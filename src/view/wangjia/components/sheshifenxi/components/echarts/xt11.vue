<template>
  <div id="xt11" style="width: 379px; height: 348px"></div>
</template>

<script>
export default {
  name: "yEC",
  data() {
    return {
      riqiLists: [],
      pingjunLists: [],
      zuidaLists: [],
      zuixiaoLists: [],
    };
  },
  props: ["riqiList", "pingjunList", "zuidaList", "zuixiaoList"],
  mounted() {
    this.drawLine();
    this.WidthAdaptive();
  },
  watch: {
    riqiList(e, f) {
      this.riqiLists = e;
      this.drawLine();
    },
    pingjunList(e, f) {
      this.pingjunLists = e;
      this.drawLine();
    },
    zuidaList(e, f) {
      this.zuidaLists = e;
      this.drawLine();
    },
    zuixiaoList(e, f) {
      this.zuixiaoLists = e;
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
      let myChart = this.$echarts.init(document.getElementById("xt11"));
      let xLabel = this.riqiLists;
      let goOutSchool = this.zuidaLists;
      let goOutSchool2 = this.zuixiaoLists;
      let goOutSchool3 = this.pingjunLists;
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
              name: "最大无功功率",
              textStyle: {
                color: "#D8D8D8",
              },
            },
            {
              name: "最小无功功率",
              textStyle: {
                color: "#D8D8D8",
              },
            },
            {
              name: "平均无功功率",
              textStyle: {
                color: "#D8D8D8",
              },
            },
          ],
        },
        grid: {
          top: "25%",
          left: "12%",
          right: "5%",
          bottom: "10%",
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
            name: "单位：Kvar",
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
            name: "最大无功功率",
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
          {
            name: "最小无功功率",
            type: "line",
            symbol: "circle", // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
            symbolSize: 0,
            smooth: true,
            lineStyle: {
              normal: {
                width: this.WidthAdaptive(2),
                color: "#FFE856", // 线条颜色
              },
              borderColor: "rgba(0,0,0,.4)",
            },
            itemStyle: {
              color: "#FFE856",
            },
            tooltip: {
              show: true,
            },
            data: goOutSchool2,
            markPoint: {
              symbol: "image://" + require("./img/2.png"),
              symbolSize: 13,
              label: {
                show: true,
                formatter: "{c}",
                position: "bottom",
              },
              data: [
                {
                  name: "最小值",
                  type: "min",
                },
              ],
            },
          },
          {
            name: "平均无功功率",
            type: "line",
            symbol: "circle", // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
            symbolSize: 0,
            smooth: true,
            lineStyle: {
              normal: {
                width: this.WidthAdaptive(2),
                color: "#1664FF", // 线条颜色
              },
              borderColor: "rgba(0,0,0,.4)",
            },
            itemStyle: {
              color: "#1664FF",
            },
            tooltip: {
              show: true,
            },
            data: goOutSchool3,
            markPoint: {
              symbol: "image://" + require("./img/3.png"),
              symbolSize: 13,
              label: {
                show: true,
                formatter: "{c}",
                position: "top",
              },
              data: [
                {
                  name: "平均值",
                  type: "average",
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
