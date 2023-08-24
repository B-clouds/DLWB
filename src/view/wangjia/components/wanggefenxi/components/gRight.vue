<template>
  <div class="gRight">
    <div class="jr_block">
      <div class="j_titles">
        <span class="span1">光伏规模统计</span>
      </div>
      <div class="gr_one gr_one2">
        <gr_one2 :xList="xList" :y1="y1" :y2="y2" />
      </div>
    </div>

    <div class="jr_block jr_block2">
      <div class="j_titles">
        <span class="span1">变电容量趋势分析</span>
      </div>
      <div class="gr_t">
        <div class="blocks">
          <span>电压等级（10kV）</span>
        </div>
      </div>
      <div class="gr_one">
        <gr_two />
      </div>
    </div>
    <div class="jr_block jr_block3">
      <div class="j_titles">
        <span class="span1">微网设备类型统计</span>
      </div>
      <div class="gr_three">
        <gr_three />
      </div>
    </div>
  </div>
</template>

<script>
import gr_one2 from "./echarts/gr_one2.vue";
import gr_two from "./echarts/gr_two.vue";
import gr_three from "./echarts/gr_three.vue";
export default {
  name: "gRight",
  components: {
    gr_one2,
    gr_two,
    gr_three,
  },
  data() {
    return {
      xList: [],
      y1: [],
      y2: [],
    };
  },
  created() {
    this.getGF();
  },
  methods: {
    getGF() {
      this.$axios
        .get(window.wgApiUrl + "/view/pvScaleStatistics", {
          params: {
            areaId: 10000,
          },
        })
        .then((res) => {
          let newData = res.data.data;
          let xList = [];
          for (let i = 0; i < newData.length; i++) {
            if (newData[i].type == 0) {
              xList.push(parseInt(newData[i].date));
              this.y1.push(newData[i].count);
            } else if (newData[i].type == 1) {
              this.y2.push(newData[i].count);
            }
          }
          this.xList = xList.reverse();
          this.y1 = this.y1.reverse();
          this.y2 = this.y2.reverse();
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
  height: 317px;
  background: url("img/bg4.png") no-repeat !important;
  background-size: 100% 100% !important;
  margin-bottom: 15px;
}
.jr_block2 {
  height: 326px !important;
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
.gr_one2 {
  height: 270px !important;
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
