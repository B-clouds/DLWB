<template>
  <div id="zlfxLeft_one" style="width: 379px; height: 222px"></div>
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
      let myChart = this.$echarts.init(document.getElementById("zlfxLeft_one"));
      myChart.clear();

      let option = {
        backgroundColor: "transparent",
        color: ["#1890FF", "#EE715C"],
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
          icon: "rect",
          itemWidth: this.WidthAdaptive(8),
          itemHeight: this.WidthAdaptive(8),
          itemGap: this.WidthAdaptive(34),
          padding: this.WidthAdaptive(2),
          top: this.WidthAdaptive(18),
          right: this.WidthAdaptive(20),
          textStyle: {
            color: "rgba(201, 229, 255, 1)",
            fontSize: this.WidthAdaptive(12),
          },
        },
        grid: {
          left: "4%",
          right: "5%",
          top: "20%",
          bottom: "12%",
          containLabel: true,
        },
        xAxis: {
          axisTick: { show: false },
          boundaryGap: false,
          axisLabel: {
            margin: 10,

            textStyle: { color: "#CCCCCC", fontSize: this.WidthAdaptive(10) },
          },
          axisLine: {
            // onZero: false, // X轴脱离Y轴0刻度
            lineStyle: { color: "#cccccc", type: "solid" },
          },

          data: ["2018年", "2019年", "2020年", "2021年", "2022年", "2023年"],
        },
        yAxis: {
          name: "单位:个",
          nameTextStyle: {
            color: " rgba(255, 255, 255, 0.6)",
            fontSize: this.WidthAdaptive(10),
          },
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
            name: "一般告警",
            type: "line",
            symbolSize: this.WidthAdaptive(6),
            symbol: "circle",
            data: [61, 65, 96, 59, 54, 69],
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
                      color: "rgba(24, 144, 255,.38)",
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
          {
            name: "紧急告警",
            type: "line",
            symbolSize: this.WidthAdaptive(6),
            symbol: "circle",
            data: [21, 45, 36, 19, 44, 59],
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
                      color: "rgba(238, 113, 92, .38)",
                    },
                    {
                      offset: 1,
                      color: "rgba(238, 113, 92, 0)",
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
