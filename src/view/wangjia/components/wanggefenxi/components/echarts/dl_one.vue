<template>
  <div id="dl_one" style="width: 379px; height: 208px"></div>
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
      let myChart = this.$echarts.init(document.getElementById("dl_one"));
      myChart.clear();

      // mock 数据
      const dataArray = [
        {
          name: "供电量",
          value: 827864,
        },
        {
          name: "售电量",
          value: 788126,
        },
      ];

      // 计算总数
      const list = [];
      let total = dataArray.reduce((p, v) => {
        list.push(v.value);
        return p + v.value;
      }, 0);

      const color = ["#05CFF7", "#1978E5"];

      //title
      const title = {
        show: false,
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
          radius: ["0%", "60%"],
          center: ["25%", "58%"],
          hoverAnimation: false,
          itemStyle: items,
          label: {
            show: false,
          },
          data: dataArray,
        },
      ];
      const legend = {
        top: "40%",
        right: "4%",
        orient: "vertical",
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
        formatter: function (name) {
          if (name == "供电量") {
            return name + " " + dataArray[0].value + "(kWh)";
          } else {
            return name + " " + dataArray[1].value + "(kWh)";
          }
        },
      };
      var tooltip = {
        show: true,
      };

      // 渲染
      var option = {
        title,
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
