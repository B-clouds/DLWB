<template>
  <div id="wr_one" style="width: 379px; height: 220px"></div>
</template>

<script>
export default {
  props: ["echartsData"],
  data() {
    return {
      date:[],
      zuida:[],
      zuixiao:[],
      pingjun:[],
      // dataScource:{zuida:[],zuixiao:[],pingjun:[]},
      pieData: [],
      id:''
    };
  },
  mounted() {
    this.getAllData()
    this.myecharts();
    this.WidthAdaptive();
  },
  watch: {
    echartsData(n, o) {
      // this.myecharts();
    },
  },
  methods: {
    WidthAdaptive(res) {
      var windth = window.screen.width;

      let fontSize = windth / 1920;
      return fontSize * res;
    },
     getAllData() {
      let that = this
      // this.$bus.$off('leftOid')
      that.$bus.$on("leftOid", (e) => {
        that.id = e;
        console.log('=========')
        console.log(that.id)
        this.getChartData(e)
      })
    },
        // [
        //   [
        //     {}
        //   ]
        // ]
    async getChartData (pid){
       await this.$axios
          .get(window.wgApiUrl + "/rackAnalysis/rackAnalysisLoadAnalysis", {
            params: {
              id:pid
            },
          })
          .then((res) => {
            this.date=[]
            this.zuida = []
            this.zuixiao = []
            this.pingjun = []
            res.data.data.forEach(item=>{
              if (item.type==='0'){
                this.date.push(item.sj)
                this.zuida.push(item.fzl)

              }else if(item.type==='1'){
                this.zuixiao.push(item.fzl)
              }else if(item.type==='2'){
                this.pingjun.push(item.fzl)
              }
            })
            // console.log('7777777777')
            // console.log(this.zuixiao)
          })
          .catch((error) => {});
      this.myecharts()
    },
    myecharts() {
      let myChart = this.$echarts.init(document.getElementById("wr_one"));
      myChart.clear();

      let option = {
        backgroundColor: "transparent",
        color: ["#1890FF", "#41E4BB", "#FFAA18"],
        tooltip: {
          //鼠标悬停提示内容
          trigger: "axis", // 触发类型，默认数据触发，可选为：'axis' item
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "line", // 默认为直线，可选为：'line' | 'shadow'
            show: true,
          },
        },
        legend: {
          icon: "rect",
          itemWidth: this.WidthAdaptive(8),
          itemHeight: this.WidthAdaptive(8),
          itemGap: this.WidthAdaptive(34),
          padding: this.WidthAdaptive(2),
          top: this.WidthAdaptive(18),
          textStyle: {
            color: "rgba(201, 229, 255, 1)",
            fontSize: this.WidthAdaptive(12),
          },
        },
        grid: {
          left: "4%",
          right: "5%",
          top: "20%",
          bottom: "5%",
          containLabel: true,
        },
        xAxis: {
          axisTick: { show: false },
          boundaryGap: false,
          axisLabel: {
            margin: 10,

            textStyle: { color: "#CCCCCC", fontSize: this.WidthAdaptive(10) },
          },
          axisLine: {
            // onZero: false, // X轴脱离Y轴0刻度
            lineStyle: { color: "#cccccc", type: "solid" },
          },

          data: this.date,
          //   data: ["2018年", "2019年", "2020年", "2021年", "2022年", "2023年"],
        },
        yAxis: {
          axisTick: { show: false },
          axisLabel: {
            margin: this.WidthAdaptive(10),
            textStyle: { color: "#CCCCCC", fontSize: this.WidthAdaptive(10) },
          },
          axisLine: {
            show: false,
            lineStyle: { color: "#cccccc", type: "solid" },
          },
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "rgba(135,140,147,0.2)",
            },
          },
          boundaryGap: [0, 0.1],
        },
        series: [
          {
            name: "最大负载",
            type: "line",
            symbolSize: this.WidthAdaptive(6),
            symbol: "circle",
            data: this.zuida,
            areaStyle: {
              //区域填充样式
              normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(24, 144, 255, 0.38)",
                    },
                    {
                      offset: 1,
                      color: "rgba(24, 144, 255, 0)",
                    },
                  ],
                  false
                ),
                // shadowColor: "rgba(109, 126, 0, 0.5)", //阴影颜色
                shadowBlur: this.WidthAdaptive(20), //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
              },
            },
          },
          {
            name: "最小负载",
            type: "line",
            symbolSize: this.WidthAdaptive(6),
            symbol: "circle",
            data: this.zuixiao,
            areaStyle: {
              //区域填充样式
              normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(65, 228, 187, .38)",
                    },
                    {
                      offset: 1,
                      color: "rgba(65, 228, 187, 0)",
                    },
                  ],
                  false
                ),
                // shadowColor: "rgba(109, 126, 0, 0.5)", //阴影颜色
                shadowBlur: this.WidthAdaptive(20), //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
              },
            },
          },
          {
            name: "平均负载",
            type: "line",
            symbolSize: this.WidthAdaptive(6),
            symbol: "circle",
            data: this.pingjun,
            areaStyle: {
              //区域填充样式
              normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(255, 170, 24, .38)",
                    },
                    {
                      offset: 1,
                      color: "rgba(255, 170, 24, 0)",
                    },
                  ],
                  false
                ),
                // shadowColor: "rgba(109, 126, 0, 0.5)", //阴影颜色
                shadowBlur: this.WidthAdaptive(20), //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
              },
            },
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
