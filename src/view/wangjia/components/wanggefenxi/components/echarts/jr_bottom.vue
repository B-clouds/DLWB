<template>
  <div id="zjy_l_three" style="width: 379px; height: 589px"></div>
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
      let myChart = this.$echarts.init(document.getElementById("zjy_l_three"));
      myChart.clear();

      // 渲染
      var option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // Use axis to trigger tooltip
            type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
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
          left: "18%",
          right: "10%",
          top: "10%",
          bottom: "10%",
        },
        xAxis: {
          type: "value",
          splitLine: {
            show: false,
          },
          axisLine: {
            //坐标轴轴线相关设置。数学上的x轴
            show: true,
            lineStyle: {
              color: "rgba(176, 215, 255, 0.2)",
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "rgba(201, 229, 255, .8)",
              fontSize: this.WidthAdaptive(12),
              padding: this.WidthAdaptive(3),
            },
          },
        },
        yAxis: {
          type: "category",
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "rgba(112,112,112,0.5)",
            },
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#8C9493",
            },
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "rgba(201, 229, 255, .8)",
              fontSize: this.WidthAdaptive(12),
              padding: this.WidthAdaptive(3),
            },
          },
          axisTick: {
            show: false,
          },
          inverse: true,
          data: [
            "设备分类",
            "变电站",
            "储能箱",
            "光伏板",
            "变压器",
            "杆塔",
            "管廊",
            "线路",
          ],
        },
        series: [
          {
            name: "电压等级110",
            type: "bar",
            showBackground: false, //柱状背景
            barWidth: this.WidthAdaptive(7),
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  1,
                  0,
                  0,
                  0,
                  [
                    {
                      offset: 0,
                      color: "rgba(0, 213, 255, 1)", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(0, 213, 255, .2)", // 100% 处的颜色
                    },
                  ],
                  false
                ),
                //这里设置柱形图圆角 [左上角，右上角，右下角，左下角]
                barBorderRadius: [0, 15, 15, 0],
              },
            },
            label: {
              show: false,
            },
            emphasis: {
              focus: "series",
            },
            data: [32, 80, 30, 33, 89, 33, 32, 20],
            color: "#0EE1E8",
          },
          {
            name: "10千伏",
            type: "bar",
            showBackground: false, //柱状背景
            barWidth: this.WidthAdaptive(7),
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  1,
                  0,
                  0,
                  0,
                  [
                    {
                      offset: 0,
                      color: "rgba(25, 120, 229, 1)", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(25, 120, 229, .2)", // 100% 处的颜色
                    },
                  ],
                  false
                ),
                //这里设置柱形图圆角 [左上角，右上角，右下角，左下角]
                barBorderRadius: [0, 15, 15, 0],
              },
            },
            label: {
              show: false,
            },
            emphasis: {
              focus: "series",
            },
            data: [32, 80, 30, 33, 89, 33, 32, 20],
            color: "#0EE1E8",
            barGap: "100%",
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
