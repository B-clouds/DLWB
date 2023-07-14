<template>
  <div style="width: 379px; height: 267px" id="dyghtwo"></div>
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
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("dyghtwo"));
      let xLabel = [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
      ];
      let goOutSchool = [
        "30",
        "12",
        "62",
        "36",
        "30",
        "60",
        "40",
        "46",
        "91",
        "60",
        "73",
        "12",
      ];

      let option = {
        backgroundColor: "transparent",
        grid: {
          top: "15%",
          left: "10%",
          right: "6%",
          bottom: "14%",
          // containLabel: true
        },
        tooltip: {
          //鼠标悬停提示内容
          trigger: "axis", // 触发类型，默认数据触发，可选为：'axis' item
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "line", // 默认为直线，可选为：'line' | 'shadow'
            show: true,
          },
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
                fontSize: this.WidthAdaptive(10),
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
            name: "单位：台",
            nameTextStyle: {
              color: " rgba(255, 255, 255, 0.6)",
              fontSize: this.WidthAdaptive(10),
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
                fontSize: this.WidthAdaptive(10),
              },
            },
            axisTick: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "未来新能源装机数量",
            type: "line",
            symbol: "circle", // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
            symbolSize: 0,
            smooth: true,
            lineStyle: {
              normal: {
                width: this.WidthAdaptive(2),
                color: "#4E94FC", // 线条颜色
              },
              borderColor: "rgba(0,0,0,.4)",
            },
            itemStyle: {
              color: "rgba(24,187,157,1)",
              borderColor: "#646ace",
              borderWidth: this.WidthAdaptive(20),
            },
            tooltip: {
              show: true,
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
                      color: "rgba(87, 131, 246, 0.3)",
                    },
                    {
                      offset: 1,
                      color: "rgba(87, 131, 246, 0)",
                    },
                  ],
                  false
                ),
                shadowColor: "rgba(10,219,250, 0.5)", //阴影颜色
                shadowBlur: this.WidthAdaptive(20), //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
              },
            },
            data: goOutSchool,
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
