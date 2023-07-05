<template>
  <div id="td_two" style="width: 100%; height: 100%"></div>
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
      let myChart = this.$echarts.init(document.getElementById("td_two"));
      myChart.clear();

      // mock 数据
      const dataArray = [
        {
          name: "设备故障",
          value: 10,
        },
        {
          name: "线路损坏",
          value: 25,
        },
        {
          name: "用户原因",
          value: 15,
        },
        {
          name: "其他",
          value: 20,
        },
      ];

      // 计算总数
      const list = [];
      let total = dataArray.reduce((p, v) => {
        list.push(v.value);
        return p + v.value;
      }, 0);

      const color = ["#BEE5FB", "#3CD495", "#3254DD", "#48E5E5"];

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
            } else if (params.data.name == dataArray[3].name) {
              return color[3];
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
          radius: ["45%", "58%"],
          center: ["35%", "50%"],
          hoverAnimation: false,
          itemStyle: items,
          label: {
            show: false,
          },
          data: data1,
        },
      ];
      const legend = {
        icon: "none",
        right: this.WidthAdaptive(50),
        top: 'center',
        itemGap: this.WidthAdaptive(14),
        textStyle: {
          color: "#F8FCFF",
          fontSize: this.WidthAdaptive(16),
          rich: {
            a: {
              width: this.WidthAdaptive(50),
              color: 'rgba(216, 240, 255, 0.8)',
              fontSize: this.WidthAdaptive(12),
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
