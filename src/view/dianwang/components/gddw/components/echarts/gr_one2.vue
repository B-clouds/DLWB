<template>
  <div id="gr_one2" style="width: 379px; height: 270px"></div>
</template>

<script>
export default {
  data() {
    return {
      pieData: [],
      xLists: [],
      y1s: [],
      y2s: [],
    };
  },
  props: ["xList", "y1", "y2"],
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
      let myChart = this.$echarts.init(document.getElementById("gr_one2"));
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
          right: "6%",
          top: "25%",
          bottom: "2%",
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

          data: this.xLists,
          //   data: ["2018年", "2019年", "2020年", "2021年", "2022年", "2023年"],
        },
        yAxis: [
          {
            name: "单位：组",
            nameTextStyle: {
              color: "rgba(201, 229, 255, .8)",
              fontSize: this.WidthAdaptive(12),
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
          {
            name: "单位：kVA",
            nameTextStyle: {
              color: "rgba(201, 229, 255, .8)",
              fontSize: this.WidthAdaptive(12),
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
        ],
        series: [
          {
            name: "用户数量",
            type: "line",
            symbolSize: this.WidthAdaptive(6),
            symbol: "circle",
            data: this.y1s,
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
          {
            name: "光伏容量",
            type: "line",
            symbolSize: this.WidthAdaptive(6),
            symbol: "circle",
            data: this.y2s,
            yAxisIndex: 1,
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
                      color: "rgba(65, 228, 187, 0.38)",
                    },
                    {
                      offset: 1,
                      color: "rgba(65, 228, 187, 0)",
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
