<template>
  <div class="gRight">
    <div class="jr_block jr_block2">
      <div class="j_titles">
        <span class="span1">电量需求分析</span>
      </div>
      <qugkR_two :xList="xList" :y1="y1" :y2="y2" />
      <div class="jbBlock">
        <div class="jbLeft jbLeft2">
          <span>供电年均增速</span>
        </div>
        <div class="jbRight">
          <span>{{ powerSupplyAverage }}</span>
        </div>
      </div>
      <div class="jbBlock">
        <div class="jbLeft jbLeft2">
          <span>售电年均增速</span>
        </div>
        <div class="jbRight">
          <span>{{ powerSellyAverage }}</span>
        </div>
      </div>
    </div>

    <div class="jr_block">
      <div class="j_titles">
        <span class="span1">负荷需求分析</span>
      </div>
      <div class="jbBlock">
        <div class="jbLeft jbLeft2">
          <span>年均增速</span>
        </div>
        <div class="jbRight">
          <span>{{ powerLoadAverage }}</span>
        </div>
      </div>
      <quyRtrhee :xList2="xList2" :value2="value2" />
    </div>
  </div>
</template>

<script>
import xr_one from "./echarts/xr_one.vue";
import xr_two from "./echarts/xr_two.vue";
import xr_three from "./echarts/xr_three.vue";
import qugkR_two from "./echarts/qugkR_two.vue";
import quyRtrhee from "./echarts/quyRtrhee.vue";

export default {
  name: "gRight",
  components: {
    xr_one,
    xr_two,
    xr_three,
    qugkR_two,
    quyRtrhee,
  },
  data() {
    return {
      powerSupplyAverage: 0, //供电
      powerSellyAverage: 0, //售电
      xList: [],
      y1: [],
      y2: [],
      oneType: {},

      powerLoadAverage: 0, //年均增速
      xList2: [],
      value2: [],
    };
  },
  created() {
    this.getDLXQFX();
    this.getFHXQFX();
  },
  methods: {
    getDLXQFX() {
      this.$axios
        .get(window.wgApiUrl + "/gridding/electricityDemandAnalysis", {
          params: {
            areaId: "10000",
          },
        })
        .then((res) => {
          this.powerSupplyAverage = res.data.data.powerSupplyAverage;
          this.powerSellyAverage = res.data.data.powerSellyAverage;
          let newData = res.data.data.result;
          let xList = [];
          let y1 = [];
          let y2 = [];
          for (let i = 0; i < newData.length; i++) {
            if (newData[i].type == 0) {
              xList.push(newData[i].nf);
              y1.push(newData[i].sl);
            } else if (newData[i].type == 1) {
              y2.push(newData[i].sl);
            }
          }
          this.xList = xList;
          this.y1 = y1;
          this.y2 = y2;
        })
        .catch((error) => {});
    },
    getFHXQFX() {
      this.$axios
        .get(window.wgApiUrl + "/gridding/loadDemandAnalysis", {
          params: {
            areaId: "10000",
          },
        })
        .then((res) => {
          this.powerLoadAverage = res.data.data.powerSellyAverage;
          let newData = res.data.data.result;
          this.xList2 = [];
          this.value2 = [];
          for (let i = 0; i < newData.length; ++i) {
            this.xList2.push(newData[i].nf);
            this.value2.push(newData[i].sl);
          }
          this.xList2 = this.xList2.reverse();
          this.value2 = this.value2.reverse();
        })
        .catch((error) => {});
    },
  },
};
</script>

<style scoped>
.gRight {
  width: 379px;
  height: 941px;
  position: absolute;
  top: 125px;
  right: 10px;
}
</style>
<style scoped>
.jr_block {
  width: 100%;
  height: 385px;
  background: url("img/bg4.png") no-repeat !important;
  background-size: 100% 100% !important;
  margin-bottom: 25px;
}
.jr_block2 {
  height: 526px !important;
}
.jr_block3 {
  height: 270px !important;
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
.gr_t {
  width: 100%;
  height: 23px;
  margin-top: 14px;
  display: flex;
  justify-content: flex-end;
}
.gr_t > .blocks {
  width: 132px;
  height: 100%;
  display: flex;
  align-items: center;
  background: url("img/gt.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.gr_t > .blocks > span {
  font-family: Source Han Sans CN;
  font-size: 12px;
  font-weight: normal;
  color: #d8f0ff;
  margin-left: 5px;
}
</style>
<style scoped>
.gr_one {
  width: 100%;
  height: 240px;
}
.gr_two {
  width: 100%;
  height: 249px;
}
.gr_three {
  width: 100%;
  height: 230px;
}
</style>

<style scoped>
.jbBlock {
  width: 100%;
  height: 34px;
  display: flex;
  margin-top: 28px;
  position: relative;
}
.jbBlock > .jbBtn {
  width: 81px;
  height: 33px;
  position: absolute;
  top: 1px;
  right: 22px;
  background: url("img/btns.png") no-repeat !important;
  background-size: 100% 100% !important;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.jbBlock > .jbBtn > span {
  font-family: Source Han Sans SC;
  font-size: 16px;
  font-weight: normal;
  color: #e2e2e2;
}
.jbBlock > .jbLeft {
  width: 146px;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 14px;
}
.jbBlock > .jbLeft2 {
  width: 120px;
  justify-content: flex-end;
}
.jbBlock > .jbLeft2 > span {
  margin-right: 17px;
}

.jbBlock > .jbLeft > span {
  font-family: Source Han Sans SC;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 0em;

  color: rgba(255, 255, 255, 0.7);
}
.jbBlock > .jbRight {
  width: 204px;
  height: 100%;
  display: flex;
  align-items: center;
  background: url("img/jbInput.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.jbBlock > .jbRight > span {
  font-family: Source Han Sans SC;
  font-size: 14px;
  font-weight: normal;
  color: #ada9a9;
  margin-left: 11px;
}
.jbBlock > .jbRight2 {
  width: 284px;
  height: 100%;
  background: url("img/jbInput2.png") no-repeat !important;
  background-size: 100% 100% !important;
}

.inputs {
  width: 100%;
  height: 100%;
  /* background: url("img/ip.png") no-repeat !important;
  background-size: 100% 100% !important; */
  position: relative;
  background: rgba(25, 61, 112, 0.8);
  box-sizing: border-box;
  border: 1px solid #3876b6;
}
.inputs > img {
  position: absolute;
  top: 10px;
  right: 8px;
  width: 14px;
  height: 8px;
}
</style>
