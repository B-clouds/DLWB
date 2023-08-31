<template>
  <div class="fhight">
    <!-- 区域基本信息-->
    <div class="jr_block">
      <div class="j_titles">
        <span class="span1">区域基本信息</span>
      </div>
      <div class="qy_info">
        <span class="qy_name1">区域名称：</span>
        <span class="qy_name2">XXXXX区域名称</span>
      </div>
      <div class="qy_content">
        <div class="qy_item">
          <img src="./img/qymj.png" class="qy_icon" />
          <div class="qy_data">
            <div class="qy_value">
              <span class="qy_num">6274</span>
              <span class="qy_unit">㎡</span>
            </div>
            <span class="qy_name">区域面积</span>
          </div>
        </div>
        <div class="qy_item">
          <img src="./img/qyfl.png" class="qy_icon" />
          <div class="qy_data">
            <div class="qy_value">
              <span class="qy_num">xxxx</span>
              <span class="qy_unit"></span>
            </div>
            <span class="qy_name">区域分类</span>
          </div>
        </div>
        <div class="qy_item">
          <img src="./img/fhmd.png" class="qy_icon" />
          <div class="qy_data">
            <div class="qy_value">
              <span class="qy_num">274</span>
              <span class="qy_unit">kg/m³</span>
            </div>
            <span class="qy_name">负荷密度</span>
          </div>
        </div>
        <div class="qy_item">
          <img src="./img/yjmd.png" class="qy_icon" />
          <div class="qy_data">
            <div class="qy_value">
              <span class="qy_num">741</span>
              <span class="qy_unit">kg/m³</span>
            </div>
            <span class="qy_name">远景密度</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 规划区域统计-->
    <div class="jr_block">
      <div class="j_titles">
        <span class="span1">规划区域统计</span>
      </div>
      <div class="gh_echarts">
        <ghqy_echarts />
      </div>
    </div>
  </div>
</template>

<script>
import ghqy_echarts from "./echarts/ghqy_echarts.vue"; //规划区域统计
export default {
  components: {
    ghqy_echarts,
  },
  name: "fhight",
  data() {
    return {
      id:'',
      baseData:{}
    };
  },
  filters: {},
  watch: {
    colors(e) {},
  },
  mounted() {},
  methods: {
    watchId(){
      let that = this
      that.$bus.$on("leftOid", (e) => {
        that.id = e;
        // console.log('=========')
        this.getBaseData()
        // console.log(that.id)
      })
    },
    async getBaseData(){
      await this.$axios
          .get(window.wgApiUrl + "/loadForecast/loadForecastBasicInfo", {
            // .get("http://192.168.2.21:8025/rackAnalysis/rackAnalysisContactAnalysis", {
            params: {
              areaId:this.id,
              // type:this.selectId?this.selectId:0
            },
          }).then(res=>{
            // this.
          })
    }
  },
};
</script>

<style scoped>
.fhight {
  width: 379px;
  height: 943px;
  position: absolute;
  top: 125px;
  right: 10px;
}
</style>
<style scoped>
.jr_block {
  width: 100%;
  height: 284px;
  background: url("img/bg4.png") no-repeat !important;
  background-size: 100% 100% !important;
  margin-bottom: 15px;
  position: relative;
}
.j_titles {
  width: 100%;
  height: 40px;
  background: url("img/jtitle.png") no-repeat !important;
  background-size: 100% 100% !important;
  display: flex;
  align-items: center;
}
.j_titles > .span1 {
  font-family: Source Han Sans CN;
  font-size: 20px;
  font-weight: normal;
  color: #ffffff;
  margin-left: 18px;
}
.j_titles > .span2 {
  margin-top: 6px;
  margin-left: 6px;
  font-family: Source Han Sans CN;
  font-size: 12px;
  font-weight: normal;
  line-height: 14px;
  text-align: right;
  letter-spacing: 0px;
  color: #d8f0ff;
}
.j_titles > .span3 {
  margin-left: 36px;
}
.j_titles > .span4 {
  color: #ffffff;
}
</style>
<!-- 区域基本信息 -->
<style scoped>
.qy_info {
  position: absolute;
  top: 48px;
  left: 14px;
  width: 352px;
  height: 44px;
  border-radius: 4.61px;
  background: rgba(149, 165, 232, 0.12);
  box-sizing: border-box;
  border: 1px solid rgba(120, 143, 240, 0.5);
  display: flex;
  align-items: center;
}
.qy_name1 {
  margin-left: 13px;
  font-family: SourceHanSansSC-Medium;
  font-size: 16px;
  font-weight: normal;
  line-height: 26px;
  letter-spacing: 0px;
  color: #ffffff;
}
.qy_name2 {
  margin-left: 25px;
  font-family: Source Han Sans CN;
  font-size: 18px;
  font-weight: bold;
  line-height: 26px;
  letter-spacing: 0px;
  color: #ffffff;
}
.qy_content {
  position: absolute;
  top: 114px;
  left: 0;
  width: 379px;
  height: 160px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.qy_item {
  margin-bottom: 38px;
  width: 50%;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.qy_icon {
  margin-left: 24px;
  width: 43px;
  height: 44px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.qy_data {
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.qy_value {
  display: flex;
  align-items: center;
}
.qy_num {
  font-family: DIN Alternate;
  font-size: 24px;
  font-weight: bold;
  line-height: 36px;
  letter-spacing: 0px;
  background: linear-gradient(180deg, #ffffff 24%, #7bbbff 77%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
.qy_unit {
  margin-top: 6px;
  margin-left: 3px;
  font-family: Source Han Sans CN;
  font-size: 16px;
  font-weight: normal;
  line-height: 26px;
  letter-spacing: 0px;
  /* 文字三级 */
  color: #b3b3b3;
}
.qy_name {
  margin-top: -4px;
  font-family: Source Han Sans CN;
  font-size: 14px;
  font-weight: normal;
  line-height: 26px;
  letter-spacing: 0px;
  color: #d6d6d6;
}
.gh_echarts {
  position: absolute;
  top: 39px;
  left: 0;
  width: 379px;
  height: 240px;
}
</style>