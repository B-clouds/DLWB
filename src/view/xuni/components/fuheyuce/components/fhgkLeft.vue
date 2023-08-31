<template>
  <div class="fhgkLeft">
    <div class="gl_top">
      <span class="span1">当前区域：</span>
      <div class="names">
        <span>{{ origData.name }}</span>
      </div>
      <div class="fanhui" @click="returnMain"></div>
    </div>
    <div class="jr_block">
      <div class="j_titles">
        <span class="span1">负荷概括</span>
      </div>
      <div class="gk_content">
        <div class="gk_item">
          <span class="gk_name">最大负荷</span>
          <div class="gk_data">
            <span class="gk_value">{{ baseData.zdfh }}</span>
            <span class="gk_unit">kWh</span>
          </div>
        </div>
        <div class="gk_item">
          <span class="gk_name">最小负荷</span>
          <div class="gk_data">
            <span class="gk_value">{{ baseData.zxfh }}</span>
            <span class="gk_unit">kWh</span>
          </div>
        </div>
        <div class="gk_item">
          <span class="gk_name">平均负荷</span>
          <div class="gk_data">
            <span class="gk_value">{{ baseData.pjfh }}</span>
            <span class="gk_unit">kWh</span>
          </div>
        </div>
        <div class="gk_item">
          <span class="gk_name">当前负荷</span>
          <div class="gk_data">
            <span class="gk_value">{{ baseData.dqfh }}</span>
            <span class="gk_unit">kWh</span>
          </div>
        </div>
        <div class="gk_item">
          <span class="gk_name">去年最大负荷</span>
          <div class="gk_data">
            <span class="gk_value">{{ baseData.qnzdfh }}</span>
            <span class="gk_unit">kWh</span>
          </div>
        </div>
        <div class="gk_item">
          <span class="gk_name">负荷自然增长率</span>
          <div class="gk_data">
            <span class="gk_value">{{ baseData.fhzrzcl }}</span>
            <span class="gk_unit">%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "fhgkLeft",
  components: {},
  data() {
    return {
      // baseData:'',
      origData:{},
      baseData:{}
    };
  },
  mounted() {
    this.watchId()
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
          .get(window.wgApiUrl + "/loadForecast/loadForecastLoadGeneralize", {
            // .get("http://192.168.2.21:8025/rackAnalysis/rackAnalysisContactAnalysis", {
            params: {
              areaId:this.origData.id,
              // type:this.selectId?this.selectId:0
            },
          }).then(res=>{
            this.baseData=res.data.data[0]
          })
    },
    returnMain() {
      this.$bus.$emit("returnMain", true);
    },
  },
};
</script>

<style scoped>
.fhgkLeft {
  width: 379px;
  height: 974px;
  position: absolute;
  top: 92px;
  left: 10px;
}
</style>
<style scoped>
.gl_top {
  width: 351px;
  height: 50px;
  margin-bottom: 17px;
  display: flex;
  align-items: center;
  background: url("img/gl_bg.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.gl_top > .span1 {
  font-family: Source Han Sans CN;
  font-size: 20px;
  font-weight: normal;
  color: #ffffff;
  margin-left: 37px;
  margin-right: 5px;
}
.gl_top > .names {
  width: 130px;
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 24px;
}
.gl_top > .names > span {
  font-family: Source Han Sans CN;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
}
.gl_top > .fanhui {
  width: 31px;
  height: 31px;
  background: url("img/fanhui.png") no-repeat !important;
  background-size: 100% 100% !important;
  cursor: pointer;
}
.jr_block {
  position: relative;
  width: 100%;
  height: 281px;
  background: url("img/bg4.png") no-repeat !important;
  background-size: 100% 100% !important;
  margin-bottom: 15px;
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
  font-family: Source Han Sans CN;
  color: rgba(255, 255, 255, 0.6);
  font-size: 20px;
  font-weight: normal;
  cursor: pointer;
  margin-left: 18px;
}
.j_titles > .span3 {
  margin-left: 36px;
}
.j_titles > .span4 {
  color: #ffffff;
}
</style>
<style scoped>
.gk_content {
  position: absolute;
  top: 50px;
  left: 0;
  width: 379px;
  height: 214px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.gk_item {
  margin: 0px 32px 23px;
  width: 124px;
  height: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(img/fhgk.png) no-repeat;
  background-size: 100% 100%;
}
.gk_name {
  margin-top: 5px;
  font-family: Source Han Sans CN;
  font-size: 12px;
  font-weight: normal;
  text-align: center;
  letter-spacing: 0px;
  color: #d6d6d6;
}
.gk_data {
  margin-top: -4px;
  display: flex;
  align-items: center;
}
.gk_value {
  font-family: DIN Alternate;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 0px;
  background: linear-gradient(180deg, #ffffff 24%, #7bbbff 77%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
.gk_unit {
  margin-left: 4px;
  margin-top: 8px;
  font-family: Source Han Sans CN;
  font-size: 12px;
  font-weight: normal;
  text-align: center;
  letter-spacing: 0px;
  /* 文字三级 */
  color: #b3b3b3;
}
</style>