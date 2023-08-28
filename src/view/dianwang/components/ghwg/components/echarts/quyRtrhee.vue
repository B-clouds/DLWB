<template>
  <div id="quyRtrhee" style="width: 379px; height: 259px"></div>
</template>

<script>
export default {
  props: ["echartsData", "xList2", "value2"],
  data() {
    return {
      pieData: [],
      xList2s: [],
      value2s: [],
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
    xList2(e, f) {
      this.xList2s = e;
      this.myecharts();
    },
    value2(e, f) {
      this.value2s = e;
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
      let myChart = this.$echarts.init(document.getElementById("quyRtrhee"));
      myChart.clear();

      let option = {
        backgroundColor: "transparent",
        color: ["rgba(24, 144, 255, 1)", "rgba(65, 228, 187, 1)"],
        tooltip: {
          //鼠标悬停提示内容
          trigger: "axis", // 触发类型，默认数据触发，可选为：'axis' item
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "line", // 默认为直线，可选为：'line' | 'shadow'
            show: true,
          },
        },
        legend: {
          show: false,
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
          left: "6%",
          right: "5%",
          top: "15%",
          bottom: "6%",
          containLabel: true,
        },
        xAxis: {
          axisTick: { show: false },
          boundaryGap: true,
          axisLabel: {
            margin: 10,

            textStyle: { color: "#CCCCCC", fontSize: this.WidthAdaptive(10) },
          },
          axisLine: {
            // onZero: false, // X轴脱离Y轴0刻度
            lineStyle: { color: "#cccccc", type: "solid" },
          },

          data: this.xList2s,
          //   data: ["2018年", "2019年", "2020年", "2021年", "2022年", "2023年"],
        },
        yAxis: {
          axisTick: { show: false },
          axisLabel: {
            margin: this.WidthAdaptive(10),
            textStyle: { color: "#CCCCCC", fontSize: this.WidthAdaptive(10) },
          },
          axisLine: {
            show: false,
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
            name: "负荷需求分析",
            type: "line",
            symbolSize: this.WidthAdaptive(6),
            symbol: "circle",
            data: this.value2s,
            label: {
              show: true,
              position: "top",
              formatter: function (params) {
                return params.value + "(kW)";
              },
            },
            areaStyle: {
              //区域填充样式
              normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(24, 144, 255, 0.38)",
                    },
                    {
                      offset: 1,
                      color: "rgba(24, 144, 255, 0)",
                    },
                  ],
                  false
                ),
                // shadowColor: "rgba(109, 126, 0, 0.5)", //阴影颜色
                shadowBlur: this.WidthAdaptive(20), //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
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
