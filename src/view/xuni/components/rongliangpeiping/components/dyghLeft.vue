<template>
  <div class="zdfxLeft">
    <div class="gl_top">
      <span class="span1">当前区域：</span>
      <div class="names">
        <span>{{ origData.name }}</span>
      </div>
      <div class="fanhui" @click="fanhuiClick"></div>
    </div>
    <div class="jr_block">
      <div class="j_titles">
        <span>电源现状情况</span>
      </div>
      <div class="one_block">
        <div class="one_b_item">
          <img src="./img/zj1.png" />
          <span class="span1">6274</span>
          <span class="span2">装机规模</span>
        </div>
        <div class="one_b_item">
          <img src="./img/zj2.png" />
          <span class="span1">6274</span>
          <span class="span2">年发电量</span>
        </div>
      </div>
      <div class="one_block">
        <div class="one_b_item">
          <img src="./img/zj3.png" />
          <span class="span1">6274</span>
          <span class="span2">利用小时</span>
        </div>

        <div class="one_b_item">
          <img c src="./img/zj4.png" />
          <span class="span1">6274</span>
          <span class="span2">最大出力系数</span>
        </div>
      </div>
    </div>
    <div class="jr_block jr_block2">
      <div class="j_titles">
        <span>未来新能源装机规模</span>
      </div>
      <div class="zwt"></div>
      <dyghtwo />
    </div>
  </div>
</template>

<script>
import dyghtwo from "./echarts/dyghtwo.vue";
export default {
  name: "zdfxLeft",
  components: {
    dyghtwo,
  },
  data() {
    return {
      origData:{},
      baseData:{}
    };
  },
  beforeDestroy() {
    this.$bus.$off("sendId")
  },
  mounted() {
    this.watchId()
  },
  methods: {
    watchId(){
      let that = this
      that.$bus.$on("sendId", (e) => {
        that.origData = e;
        // console.log(11111+e)
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
    gjlxClick(e) {
      this.gjlx_show = e;
    },
    plClick(e) {
      this.pl_show = e;
    },
    fanhuiClick() {
      this.$emit("geshihua");
    },
  },
};
</script>

<style scoped>
.zdfxLeft {
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
}
.jr_block {
  width: 100%;
  height: 188px;
  background: url("img/bg4.png") no-repeat !important;
  background-size: 100% 100% !important;
  margin-bottom: 20px;
}
.jr_block2 {
  height: 361px !important;
}

.j_titles {
  width: 100%;
  height: 40px;
  background: url("img/jtitle.png") no-repeat !important;
  background-size: 100% 100% !important;
  display: flex;
  align-items: center;
}
.j_titles > span {
  font-family: Source Han Sans CN;
  font-size: 20px;
  font-weight: normal;
  color: #ffffff;
  margin-left: 18px;
}
</style>
<style scoped>
.one_block {
  width: 331px;
  height: 48px;
  display: flex;
  justify-content: space-between;
  margin: 18px 0 0 17px;
}
.one_block > .one_b_item {
  width: 147px;
  height: 100%;
  background: url("img/lv.png") no-repeat !important;
  background-size: 100% 100% !important;
  position: relative;
  display: flex;
  align-items: center;
}
.one_block > .one_b_item > img {
  width: 25px;
  height: 25px;
  margin-left: 10px;
  margin-right: 11px;
}

.one_block > .one_b_item > .span1 {
  font-family: DIN Alternate;
  font-size: 20px;
  font-weight: bold;
  background-image: -webkit-linear-gradient(top, #a3ffff, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.one_block > .one_b_item > .span2 {
  position: absolute;
  left: 42px;
  top: -5px;
  font-family: Source Han Sans CN;
  font-size: 12px;
  font-weight: normal;
  color: #d6d6d6;
}
</style>

<style scoped>
.zwt {
  width: 362px;
  height: 45px;
  margin-left: 6px;
  margin-top: 7px;
  background: url("img/zwf.png") no-repeat !important;
  background-size: 100% 100% !important;
}
</style>
