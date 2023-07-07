<template>
  <div id="zl_two" style="width: 379px; height: 248px"></div>
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
      let vm = this;
      let myChart = this.$echarts.init(document.getElementById("zl_two"));
      myChart.clear();
      let option = {
        backgroundColor: "transparent",
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },

        grid: {
          top: "19%",
          right: "5%",
          left: "10%",
          bottom: "16%",
        },
        xAxis: [
          {
            type: "category",
            data: ["01", "02", "03", "04", "05", "06", "07"],
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
            min: 0, //最小百分比
            max: 100, //最大百分比
            name: "单位：%",
            nameTextStyle: {
              color: "rgba(230, 247, 255, 0.7)",
              fontSize: this.WidthAdaptive(12),
              padding: [0, 0, 0, 0],
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
            name: "时长分析",
            type: "bar",
            data: [68, 50, 69, 75, 59, 96, 44],
            barWidth: this.WidthAdaptive(8),
            itemStyle: {
              normal: {
                color: function (params) {
                  console.log(params, this);
                  if (params.data > 80) {
                    return new vm.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      {
                        offset: 0,
                        color: "rgba(255, 234, 176, 1)",
                      },

                      {
                        offset: 1,
                        color: "rgba(255, 234, 176, 0)",
                      },
                    ]);
                  } else {
                    return new vm.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      {
                        offset: 0,
                        color: "rgba(90, 195, 238, 1)",
                      },

                      {
                        offset: 1,
                        color: "rgba(90, 195, 238, 0)",
                      },
                    ]);
                  }
                },
              },
            },
            markLine: {
              symbol: "none",
              //图表标线
              data: [
                {
                  name: "Y 轴值为 100 的水平线",
                  yAxis: 80,
                  lineStyle: {
                    normal: {
                      color: "#FFEAB0",
                      width: this.WidthAdaptive(1),
                    },
                  },
                },
              ], //type: 'average', 平均值,  min最小值,  max 最大值,  median中位数
              label: {
                show: false,
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
