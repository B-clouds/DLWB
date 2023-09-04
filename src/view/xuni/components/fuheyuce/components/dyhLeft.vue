<template>
  <div class="dyhLeft">
    <div class="gl_top">
      <span class="span1">当前区域：</span>
      <div class="names">
        <span>{{ origData.name }}</span>
      </div>
      <div class="fanhui" @click="returnMain"></div>
    </div>
    <div class="jr_block">
      <div class="j_titles">
        <span class="span1">用户现状概括</span>
      </div>
      <div class="yh_content">
        <div class="yh_item">
          <img src="./img/1.png" class="yh_icon" />
          <div class="yh_data">
            <span class="yh_name">用户总数</span>
            <div class="yh_value">
              <span>{{ baseData.yhzs }}</span>
            </div>
          </div>
        </div>
        <div class="yh_item">
          <img src="./img/4.png" class="yh_icon" />
          <div class="yh_data">
            <span class="yh_name">总负荷</span>
            <div class="yh_value">
              <span>{{ baseData.zfh }}</span>
            </div>
          </div>
        </div>
        <div class="yh_item">
          <img src="./img/2.png" class="yh_icon" />
          <div class="yh_data">
            <span class="yh_name">已接用户</span>
            <div class="yh_value yh_value2">
              <span>{{ baseData.yjyh }}</span>
            </div>
          </div>
        </div>
        <div class="yh_item">
          <img src="./img/5.png" class="yh_icon" />
          <div class="yh_data">
            <span class="yh_name">已接负荷</span>
            <div class="yh_value yh_value2">
              <span>{{ baseData.yjfh }}</span>
            </div>
          </div>
        </div>
        <div class="yh_item">
          <img src="./img/3.png" class="yh_icon" />
          <div class="yh_data">
            <span class="yh_name">在途用户</span>
            <div class="yh_value yh_value3">
              <span>{{ baseData.ztyh }}</span>
            </div>
          </div>
        </div>
        <div class="yh_item">
          <img src="./img/6.png" class="yh_icon" />
          <div class="yh_data">
            <span class="yh_name">在途负荷</span>
            <div class="yh_value yh_value3">
              <span>{{ baseData.ztfh }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="jr_block jr_block2">
      <div class="j_titles">
        <span class="span1">用户变化趋势</span>
      </div>
      <div class="bh_echarts">
        <dyh_one />
      </div>
    </div>
  </div>
</template>

<script>
import dyh_one from "./echarts/dyh_one.vue"; //用户变化趋势
export default {
  name: "dyhLeft",
  components: {
    dyh_one,
  },
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
beforeDestroy(){
    this.$bus.$off('sendId')
},
  methods: {
    watchId(){
      let that = this
      that.$bus.$on("sendId", (e) => {
        that.origData = e;
        that.baseData={}
        that.getBaseData()
      })
    },
    async getBaseData(){
      await this.$axios
          .get(window.wgApiUrl + "/loadForecast/loadForecastUserStatus", {
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
.dyhLeft  {
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
  height: 287px;
  background: url("img/bg4.png") no-repeat !important;
  background-size: 100% 100% !important;
  margin-bottom: 15px;
}
.jr_block2 {
  height: 299px;
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
.yh_content {
  position: absolute;
  top: 49px;
  left: 0;
  width: 379px;
  height: 250px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.yh_content > .yh_item:nth-child(1), .yh_content > .yh_item:nth-child(2) {
  margin-top: 0px !important;
}
.yh_item {
  margin-top: -20px;
  width: 48%;
  height: 99px;
  display: flex;
  justify-content: flex-start;
}
.yh_icon {
  width: 101px;
  height: 99px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.yh_data {
  margin-top: -4px;
  margin-left: -27px;
  display: flex;
  flex-direction: column;
}
.yh_name {
  margin-left: 18px;
  font-family: Source Han Sans CN;
  font-size: 12px;
  font-weight: normal;
  line-height: 37px;
  letter-spacing: 0em;
  color: #bcbcbc;
}
.yh_value {
  margin-top: -7px;
  width: 115px;
  height: 29px;
  background: url(img/11.png) no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
}
.yh_value2 {
  background: url(img/22.png) no-repeat;
  background-size: 100% 100%;
}
.yh_value3 {
  background: url(img/33.png) no-repeat;
  background-size: 100% 100%;
}
.yh_value > span {
  margin-top: -5px;
  margin-left: 20px;
  font-family: 字体圈欣意冠黑体;
  font-size: 18px;
  font-weight: normal;
  line-height: 56px;
  letter-spacing: 0px;
  color: #eafaff;
  /* 文字投影 */
  text-shadow: 0px 0px 5px rgba(173, 238, 255, 0.5);
}
.bh_echarts {
  position: absolute;
  top: 39px;
  left: 0;
  width: 379px;
  height: 258px;
}
</style>