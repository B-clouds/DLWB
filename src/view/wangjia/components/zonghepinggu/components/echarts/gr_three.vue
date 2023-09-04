<template>
  <div id="gr_three" style="width: 379px; height: 218px"></div>
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
      let myChart = this.$echarts.init(document.getElementById("gr_three"));
      myChart.clear();

      // mock 数据
      const dataArray = [
        {
          name: "光伏板",
          value: 40,
        },
        {
          name: "储能箱",
          value: 35,
        },
        {
          name: "智慧灯杆",
          value: 15,
        },
        {
          name: "开关柜",
          value: 6,
        },
        {
          name: "其他",
          value: 4,
        },
      ];

      // 计算总数
      const list = [];
      let total = dataArray.reduce((p, v) => {
        list.push(v.value);
        return p + v.value;
      }, 0);

      const color = ["#05CFF7", "#1978E5", "#EAB966", "#60B45E", "#BECDD0"];

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
            } else if (params.data.name == dataArray[2].name) {
              return color[2];
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
          center: ["35%", "55%"],
          hoverAnimation: false,
          itemStyle: items,
          label: {
            show: false,
          },
          data: data1,
        },
      ];
      const legend = {
        icon: "rect",
        itemWidth: this.WidthAdaptive(6),
        itemHeight: this.WidthAdaptive(6),
        right: this.WidthAdaptive(40),
        top: this.WidthAdaptive(62),
        textStyle: {
          color: "#D4F6FF",
          fontSize: this.WidthAdaptive(14),
          rich: {
            a: {
              width: this.WidthAdaptive(60),
            },
          },
        },
        formatter: function (name) {
          for (let i = 0; i < dataArray.length; i++) {
            if (dataArray[i].name == name) {
              return (
                "{a|" + dataArray[i].name + "}" + "   " + dataArray[i].value
              );
            }
          }
        },
      };
      // 渲染
      var option = {
        title,
        graphic,
        series,
        color,
        legend,
      };
      myChart.setOption(option, true);

      window.onresize = myChart.resize;
    },
  },
};
</script>

<style scoped></style>
