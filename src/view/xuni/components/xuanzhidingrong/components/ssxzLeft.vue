<template>
  <div class="zdfxLeft">
    <div class="gl_top">
      <span class="span1">当前区域：</span>
      <div class="names">
        <span>{{ areaName }}</span>
      </div>
      <div class="fanhui" @click="fanhuiClick"></div>
    </div>
    <div class="jr_block">
      <div class="j_titles">
        <span>基本情况</span>
      </div>
      <div class="j_t">
        <div class="blocks">
          <div class="lefts">
            <div class="img1"></div>
          </div>
          <div class="rights">
            <div class="tops">用电户数</div>
            <div class="bottoms">
              <span class="span1">{{ BasicFacilitiesInfo.ydhs }}</span>
              <span class="span2">人</span>
            </div>
          </div>
        </div>
        <div class="blocks">
          <div class="lefts">
            <div class="img2"></div>
          </div>
          <div class="rights">
            <div class="tops">设备情况</div>
            <div class="bottoms">
              <span class="span1">{{ BasicFacilitiesInfo.sbqk }}</span>
            </div>
          </div>
        </div>
      </div>
      <ssxz_one :echartsData="BasicFacilitiesaData" />
    </div>
    <div class="jr_block jr_block2">
      <div class="j_titles">
        <span>负载情况</span>
      </div>
      <ssxz_two :echartsData="LoadInfoData" />
    </div>
  </div>
</template>

<script>
import ssxz_one from "./echarts/ssxz_one.vue";
import ssxz_two from "./echarts/ssxz_two.vue";
export default {
  props: ["id"],
  name: "zdfxLeft",
  components: {
    ssxz_one,
    ssxz_two,
  },
  data() {
    return {
      ararName: "",
      BasicFacilitiesInfo: {},
      BasicFacilitiesaData: [], //基本情况数据
      LoadInfoData: [], //负载情况数据
    };
  },
  beforeMount() {
    this.areaName = sessionStorage.getItem("xzdr_areaName");
  },
  mounted() {
    console.log("1243", this.id);

    this.BasicFacilitiesInfoFn();
    this.LoadInfoFn();
  },
  methods: {
    gjlxClick(e) {
      this.gjlx_show = e;
    },
    plClick(e) {
      this.pl_show = e;
    },
    fanhuiClick() {
      this.$emit("geshihua");
    },
    //虚拟规划-选址定容-设施现状-基本情况
    async BasicFacilitiesInfoFn() {
      this.$axios
        .get(
          window.wgApiUrl + "/siteSelection/siteSelectionBasicFacilitiesInfo",
          {
            params: {
              areaId: "10000",
            },
          }
        )
        .then((res) => {
          if (res.status == 200) {
            if (res.data.msg == "query success") {
              this.BasicFacilitiesInfo = res.data.data.count;
              this.BasicFacilitiesaData = res.data.data.result;
            }
          }
          // return resolve(res.data.data);
        })
        .catch((error) => {});
    },

    //虚拟规划-选址定容-设施现状-负载情况
    async LoadInfoFn() {
      this.$axios
        .get(window.wgApiUrl + "/siteSelection/siteSelectionLoadInfo", {
          params: {
            areaId: "10000",
          },
        })
        .then((res) => {
          if (res.status == 200) {
            if (res.data.msg == "query success") {
              console.log("res", res);
              this.LoadInfoData = res.data.data;
            }
          }
          // return resolve(res.data.data);
        })
        .catch((error) => {});
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
  height: 358px;
  background: url("img/bg4.png") no-repeat !important;
  background-size: 100% 100% !important;
  margin-bottom: 20px;
}
.jr_block2 {
  height: 252px !important;
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
.one_block > .one_b_item > .img1 {
  width: 21px;
  height: 17px;
  margin-left: 12px;
  margin-right: 13px;
}
.one_block > .one_b_item > .img2 {
  width: 19px;
  height: 19px;
  margin-left: 14px;
  margin-right: 12px;
}
.one_block > .one_b_item > .img3 {
  width: 25px;
  height: 25px;
  margin-left: 12px;
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
.j_t {
  width: 100%;
  height: 68px;
  margin-top: 16px;
  display: flex;
}
.j_t > .blocks {
  width: 140px;
  height: 100%;
  margin-left: 26px;
  margin-right: 20px;
  display: flex;
}
.j_t > .blocks > .lefts {
  width: 62px;
  height: 100%;
  background: url("img/jlo.png") no-repeat !important;
  background-size: 100% 100% !important;
  position: relative;
}
.j_t > .blocks > .lefts > .img1 {
  width: 30px;
  height: 30px;
  position: absolute;
  left: 16px;
  top: 2px;
  background: url("img/lj1.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.j_t > .blocks > .lefts > .img2 {
  width: 30px;
  height: 30px;
  position: absolute;
  left: 16px;
  top: 2px;
  background: url("img/lj2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.j_t > .blocks > .rights {
  width: 78px;
  height: 100%;
}
.j_t > .blocks > .rights > .tops {
  width: 100%;
  height: 23px;
  display: flex;
  align-items: center;
  margin-left: 10px;
  font-family: Source Han Sans SC;
  font-size: 16px;
  font-weight: normal;
  color: #a6c4ff;
}
.j_t > .blocks > .rights > .bottoms {
  width: 78px;
  height: 30px;
  display: flex;
  align-items: center;
}
.j_t > .blocks > .rights > .bottoms > .span1 {
  font-family: Source Han Sans SC;
  font-size: 18px;
  font-weight: normal;
  color: #ffffff;
  margin-left: 10px;
}
.j_t > .blocks > .rights > .bottoms > .span2 {
  font-family: Source Han Sans SC;
  font-size: 10px;
  font-weight: normal;
  color: #87a1cd;
  margin-left: 2px;
}
</style>
