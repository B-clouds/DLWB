<template>
  <div id="dyh_two" style="width: 100%; height: 100%"></div>
</template>

<script>
export default {
  props: ["echartsData"],
  data() {
    return {
      origData:{},
      date:[],
      value: {xmsl:[],zrl:[]},
      pieData: [],
      xData: ["12.01", "12.02", "12.04", "12.05", "12.06", "12.07"],
      yData: [19, 20, 28, 40, 49, 70],
      yData1: [10, 14, 19, 29, 42, 60],
    };
  },
  mounted() {
    // this.myecharts();
    this.watchId()
    this.WidthAdaptive();
  },
  watch: {
    echartsData(n, o) {
      this.myecharts();
    },
  },
  methods: {
    watchId(){
      let that = this
      that.$bus.$on("sendId", (e) => {
        that.origData = e;
        that.baseData={}
        this.getBaseData()
      })
    },
    async getBaseData(){
      await this.$axios
          .get(window.wgApiUrl + "/loadForecast/loadForecastPlanningProject", {
            // .get("http://192.168.2.21:8025/rackAnalysis/rackAnalysisContactAnalysis", {
            params: {
              areaId:this.origData.id,
              // type:this.selectId?this.selectId:0
            },
          }).then(res=>{
            this.date=[]
            this.value={xmsl:[],zrl:[]},
            res.data.data.map(item=>{
              if(item.type=='0'){
                this.date.push(item.sj)
                this.value.xmsl.push(item.sl)
              }else if(item.type=='1'){
                this.value.zrl.push(item.sl)
              }
            })
            // this.baseData=res.data.data
          })
      console.log('898989')
      console.log(this.value)
      this.myecharts()
    },
    WidthAdaptive(res) {
      var windth = window.screen.width;

      let fontSize = windth / 1920;
      return fontSize * res;
    },
    myecharts() {
      let myChart = this.$echarts.init(document.getElementById("dyh_two"));
      myChart.clear();

      // 渲染
      var option = {
        tooltip: {
          trigger: "axis",
          backgroundColor: "rgba(8, 22, 38, 0.7)",
          borderColor: "transparent",
          padding: [this.WidthAdaptive(10)],
          axisPointer: {
            type: "line",
          },
          textStyle: {
            color: "#D8F0FF",
            fontFamily: "Source Han Sans CN",
            fontSize: this.WidthAdaptive(12),
          },
        },
        legend: {
          icon: "rect",
          bottom: "0%",
          itemWidth: this.WidthAdaptive(8),
          itemHeight: this.WidthAdaptive(8),
          itemGap: this.WidthAdaptive(40),
          textStyle: {
            color: "rgba(230, 247, 255, 0.7)",
            fontSize: this.WidthAdaptive(12),
          },
        },
        grid: {
          left: "12%",
          right: "12%",
          top: "15%",
          bottom: "24%",
        },
        xAxis: {
          type: "category",
          splitLine: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#BAE7FF",
            },
          },
          axisLabel: {
            show: true,
            textStyle: {
              fontSize: this.WidthAdaptive(12),
              fontFamily: "Source Han Sans CN",
              fontWeight: "normal",
              color: "#B3B3B3",
            },
          },
          axisTick: {
            show: false,
          },
          data: this.date,
        },
        yAxis: [
          {
            type: "value",
            name: "负荷：个",
            nameGap: this.WidthAdaptive(15),
            interval: 20,
            max: 100,
            nameTextStyle: {
              fontSize: this.WidthAdaptive(12),
              fontFamily: "Source Han Sans CN",
              fontWeight: "normal",
              color: "rgba(216, 240, 255, 0.7)",
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: "solid",
                color: "rgba(167, 167, 167, 0.3)",
              },
            },
            axisLine: {
              //坐标轴轴线相关设置。数学上的y轴
              show: false,
              lineStyle: {
                color: "rgba(176, 215, 255, 0.4)",
              },
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: true,
              textStyle: {
                fontSize: this.WidthAdaptive(12),
                fontFamily: "Source Han Sans CN",
                fontWeight: "normal",
                color: "#B3B3B3",
              },
            },
          },
          {
            type: "value",
            name: "增长率：%",
            nameGap: this.WidthAdaptive(15),
            nameTextStyle: {
              fontSize: this.WidthAdaptive(12),
              fontFamily: "Source Han Sans CN",
              fontWeight: "normal",
              color: "rgba(216, 240, 255, 0.7)",
            },
            interval: 20,
            max: 100,
            splitLine: {
              show: true,
              lineStyle: {
                type: "solid",
                color: "rgba(167, 167, 167, 0.3)",
              },
            },
            axisLine: {
              //坐标轴轴线相关设置。数学上的y轴
              show: false,
              lineStyle: {
                color: "rgba(176, 215, 255, 0.4)",
              },
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: true,
              textStyle: {
                fontSize: this.WidthAdaptive(12),
                fontFamily: "Source Han Sans CN",
                fontWeight: "normal",
                color: "#B3B3B3",
              },
            },
          },
        ],
        series: [
          {
            name: "项目数量",
            type: "bar",
            barWidth: this.WidthAdaptive(4),
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "#3CDDEB", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(60,221,235,0.00)", // 100% 处的颜色
                  },
                ],
                false
              ),
              barBorderRadius: [this.WidthAdaptive(4)],
            },
            label: {
              show: false,
            },
            emphasis: {
              focus: "series",
            },
            data: this.value.xmsl,
          },
          {
            name: "总容量",
            type: "bar",
            barWidth: this.WidthAdaptive(4),
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "#D0DEEE", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(208,222,238,0.10)", // 100% 处的颜色
                  },
                ],
                false
              ),
              barBorderRadius: [this.WidthAdaptive(4)],
            },
            label: {
              show: false,
            },
            emphasis: {
              focus: "series",
            },
            data: this.value.zrl,
            yAxisIndex: 1,
            barGap: "60%",
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
