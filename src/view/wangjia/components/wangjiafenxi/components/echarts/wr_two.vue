<template>
  <div id="wr_two" style="width: 379px; height: 161px"></div>
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
      let myChart = this.$echarts.init(document.getElementById("wr_two"));
      myChart.clear();

      // mock 数据
      const dataArray = [
        {
          name: "220kV",
          value: 10,
        },
        {
          name: "110kV",
          value: 15,
        },
        {
          name: "35kV",
          value: 20,
        },
        {
          name: "10kV",
          value: 25,
        },
        {
          name: "0.4kV",
          value: 30,
        },
      ];

      // 计算总数
      const list = [];
      let total = dataArray.reduce((p, v) => {
        list.push(v.value);
        return p + v.value;
      }, 0);

      const color = ["#48E5E5", "#3254DD", "#BEE5FB", "#2B8EF3", "#3CD495"];

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
          radius: ["50%", "65%"],
          center: ["28%", "50%"],
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
        itemWidth: this.WidthAdaptive(8),
        itemHeight: this.WidthAdaptive(8),
        right: this.WidthAdaptive(60),
        top: this.WidthAdaptive(22),
        textStyle: {
          color: "#D4F6FF",
          fontSize: this.WidthAdaptive(14),
          rich: {
            a: {
              width: this.WidthAdaptive(40),
              padding: [-2, 0, 0, 0],
            },
          },
        },
        formatter: function (name) {
          for (let i = 0; i < dataArray.length; i++) {
            if (dataArray[i].name == name) {
              let bfb = (dataArray[i].value / total).toFixed(2) * 100 + "%";
              return "{a|" + dataArray[i].name + "}" + "   " + bfb;
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
