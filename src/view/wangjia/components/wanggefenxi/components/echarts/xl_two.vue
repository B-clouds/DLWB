<template>
  <div id="xl_two" style="width: 379px; height: 208px"></div>
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
      let myChart = this.$echarts.init(document.getElementById("xl_two"));
      myChart.clear();

      // mock 数据
      const dataArray = [
        {
          name: "居民（户）",
          value: 40,
        },
        {
          name: "工商业（户）",
          value: 35,
        },
      ];

      // 计算总数
      const list = [];
      let total = dataArray.reduce((p, v) => {
        list.push(v.value);
        return p + v.value;
      }, 0);

      const color = ["#05CFF7", "#1978E5"];

      var labelshow = true;
      var centerimg = true;
      var lineshow = false;
      let color1 = [];
      // 设置每层圆环颜色和添加间隔的透明色
      color.forEach((item) => {
        color1.push(item, "transparent");
      });
      let data1 = [];
      let sum = 0;
      // 根据总值设置间隔值大小
      dataArray.forEach((item) => {
        sum += Number(item.value);
      });

      //图表数据
      const countOccurences = (arr, value) =>
        arr.reduce((a, v) => (v === value ? a + 1 : a + 0), 0);
      const nums = countOccurences(list, 0);

      // 给每个数据后添加特定的透明的数据形成间隔
      if (nums < 1) {
        dataArray.forEach((item, index) => {
          if (item.value !== 0) {
            data1.push(item, {
              name: "",
              value: sum / 90,
              labelLine: {
                show: false,
                lineStyle: {
                  color: "transparent",
                },
              },
              itemStyle: {
                color: "transparent",
              },
            });
          } else if (item.value == 0) {
            data1.push(item);
          }
        });
      } else {
        dataArray.forEach((item, index) => {
          data1.push(item);
        });
      }

      //title
      const title = {
        text: "{a|" + total + "}\n{b|总数}",
        top: "44%",
        left: "30%",
        textStyle: {
          fontSize: this.WidthAdaptive(14),
          color: "#C9E5FF",
          fontFamily: "OPPOSans",
          fontWeight: "500",
          lineHeight: this.WidthAdaptive(20),
          rich: {
            a: {
              fontColor: "#F5FCFF",
              fontSize: this.WidthAdaptive(18),
              fontFamily: "Source Han Sans CN",
              fontWeight: "normal",
              align: "center",
            },
            b: {
              fontSize: this.WidthAdaptive(12),
              fontColor: "#727D89",
              fontFamily: "Source Han Sans CN",
              align: "center",
            },
          },
        },
      };

      const graphic = {
        elements: [
          {
            type: "image",
            style: {
              image: require("../img/pie.png"),
              width: this.WidthAdaptive(161),
              height: this.WidthAdaptive(161),
            },
            top: "18%",
            left: "14%",
            silent: true,
          },
        ],
      };

      // series itemStyle
      const items = {
        normal: {
          color: (params) => {
            if (params.data.name == dataArray[0].name) {
              return color[0];
            } else if (params.data.name == dataArray[1].name) {
              return color[1];
            } else {
              return color1[params.dataIndex];
            }
          },
        },
      };

      // series
      const series = [
        {
          type: "pie",
          radius: ["50%", "58%"],
          center: ["35%", "56%"],
          hoverAnimation: false,
          itemStyle: items,
          label: {
            show: false,
          },
          data: data1,
        },
      ];
      const legend = {
        show: true,
        top: "37%",
        right: "7%",
        orient: "horizontal",
        itemGap: 30,
        icon: "rect",
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
          fontSize: 14,
          fontFamily: "Source Han Sans CN",
          fontWeight: "normal",
          color: "#FFFFFF",
          opacity: 0.8,
          padding: [0, 0, 0, 6],
        },
      };
      var tooltip = {
        show: true,
      };

      // 渲染
      var option = {
        title,
        graphic,
        series,
        color,
        legend,
        tooltip,
      };
      myChart.setOption(option, true);

      window.onresize = myChart.resize;
    },
  },
};
</script>

<style scoped></style>
