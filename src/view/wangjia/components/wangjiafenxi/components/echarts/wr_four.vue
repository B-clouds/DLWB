<template>
  <div id="wr_four" style="width: 379px; height: 144px"></div>
</template>

<script>
export default {
  props: ["echartsData"],
  data() {
    return {
      id:'',
      selectId:'',
      type:[],
      value:[],
      pieData: [],
    };
  },
  mounted() {
    this.getAllData()
    // this.myecharts();
    this.WidthAdaptive();
  },
  watch: {
    echartsData(n, o) {
      this.myecharts();
    },
  },
  methods: {
    getAllData() {
      let that = this
      that.$bus.$on("leftOid", (e) => {
        that.id = e;
        // console.log('=========')
        this.getChartData()
        // console.log(that.id)
      })
      that.$bus.$on("selectId2", (e) => {
        that.selectId=e
        this.getChartData()
      })
    },
    async getChartData (){
      await this.$axios
          // .get(window.wgApiUrl + "/rackAnalysis/rackAnalysisGridStructure", {
          .get("http://192.168.2.21:8025/rackAnalysis/rackAnalysisGridStructure", {
            params: {
              id:this.id,
              type:this.selectId?this.selectId:0
            },
          })
          .then((res) => {
            this.type=[]
            this.value=[]
            this.chartsData={}

            res.data.data.map(item=>{
              this.type.push(item.lx)
              this.value.push(item.sl)
            })
            // console.log('[[[[[[[')
            // console.log(res.data.data)
            // console.log(this.chartsData)
          })
          .catch((error) => {});
      this.myecharts()
    },
    WidthAdaptive(res) {
      var windth = window.screen.width;

      let fontSize = windth / 1920;
      return fontSize * res;
    },
    myecharts() {
      let myChart = this.$echarts.init(document.getElementById("wr_four"));
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
          top: "14%",
          right: "5%",
          left: "10%",
          bottom: "20%",
        },
        xAxis: [
          {
            type: "category",
            data: this.type,
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.5)",
              },
            },
            axisLabel: {
              margin: 10,
              color: "#e2e9ff",
              textStyle: {
                fontSize: this.WidthAdaptive(8),
              },
            },
            axisTick: {
              show: false,
            },
          },
        ],
        yAxis: [
          {
            nameTextStyle: {
              color: "#CCCCCC",
              fontSize: this.WidthAdaptive(10),
              padding: 5,
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
            name: "网架结构",
            type: "bar",
            data: this.value,
            barWidth: this.WidthAdaptive(8),
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(14, 236, 228, 1)", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(5, 143, 231, 1)", // 100% 处的颜色
                    },
                  ],
                  false
                ),
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
