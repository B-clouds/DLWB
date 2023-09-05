<template>
  <div id="csgzlOne" style="width: 379px; height: 270px"></div>
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
      let myChart = this.$echarts.init(document.getElementById("csgzlOne"));
      myChart.clear();
      this.xLists = ["正常", "注意", "异常", "严重"];
      this.y1s = [50, 40, 30, 20];
      let option = {
        backgroundColor: "transparent",
        legend: {
          icon: "rect",
          itemWidth: this.WidthAdaptive(8),
          itemHeight: this.WidthAdaptive(8),
          itemGap: this.WidthAdaptive(34),
          padding: this.WidthAdaptive(2),
          top: this.WidthAdaptive(18),
          left: "5%",
          textStyle: {
            color: "rgba(201, 229, 255, 1)",
            fontSize: this.WidthAdaptive(12),
          },
        },
        tooltip: {
          confine: true,
        },
        radar: {
          // shape: 'circle',
          // 文字设置
          radius: "50%",
          axisName: {
            color: "#333",
            fontSize: "14px",
          },

          indicator: [
            { name: "运行年限", max: 100 },
            { name: "故障情况", max: 100 },
            { name: "导线截面", max: 100 },
            { name: "计划停电", max: 100 },
            { name: "故障原因", max: 100 },
          ],
        },
        series: [
          {
            name: "省均值",
            type: "radar",
            color: "rgba(5, 143, 231, 0.5)",
            lineStyle: {
              color: "rgba(5, 143, 231, 0.5)",
            },
            itemStyle: {
              background: "rgba(5, 143, 231, 0.5)",
            },
            areaStyle: {
              color: "rgba(5, 143, 231, 0.5)",
            },
            data: [
              {
                value: [90, 80, 90, 65, 80],
                name: "省均值",
              },
            ],
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
