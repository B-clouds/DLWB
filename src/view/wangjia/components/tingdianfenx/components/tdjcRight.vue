<template>
  <div class="gRight">
    <div class="jr_block">
      <div class="j_titles">
        <span class="span1">停电影响范围</span>
      </div>
      <tdjcrOne />
    </div>

    <div class="jr_block jr_block2">
      <div class="j_titles">
        <span class="span1">今日停电监测</span>
      </div>
      <div class="j_t_tr jt1">
        <div class="blocks">
          <span class="span1">编号</span>
        </div>
        <div class="blocks">
          <span class="span1">区域</span>
        </div>
        <div class="blocks">
          <span class="span1">线路名称</span>
        </div>
        <div class="blocks">
          <span class="span1">停电类型</span>
        </div>
        <div class="blocks">
          <span class="span1">停电范围</span>
        </div>
        <div class="blocks">
          <span class="span1">停电原因</span>
        </div>
      </div>
      <div class="j_t_table">
        <div
          class="j_t_tr"
          :class="index % 2 == 0 ? 'j_t_bg' : ''"
          v-for="(item, index) in 10"
          :key="index"
        >
          <div class="blocks">
            <span class="span2">xxxx</span>
          </div>
          <div class="blocks">
            <span class="span2">xxxx</span>
          </div>
          <div class="blocks">
            <span class="span2">xxxx</span>
          </div>
          <div class="blocks">
            <span class="span2">xxxx</span>
          </div>
          <div class="blocks">
            <span class="span2">xxxx</span>
          </div>
          <div class="blocks">
            <span class="span2">xxxx</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tdjcrOne from "./echarts/tdjcrOne.vue";
export default {
  name: "gRight",
  components: {
    tdjcrOne,
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
  height: 606px !important;
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
<style scoped>
.j_t_tr {
  width: 100%;
  height: 36px;
  display: flex;
}
.jt1 {
  margin-top: 8px;
}
.j_t_tr > .blocks {
  width: 17%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.j_t_tr > .blocks > .span1 {
  font-family: Source Han Sans CN;
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
}
.j_t_tr > .blocks > .span2 {
  font-family: Source Han Sans CN;
  font-size: 14px;
  font-weight: normal;
  color: #bee4ee;
}
</style>
<style scoped>
.j_t_table {
  width: 100%;
  height: 516px;
  overflow-y: scroll;
}
.j_t_table::-webkit-scrollbar {
  display: none;
}
.j_t_bg {
  background: url("img/gblock.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.jr_two {
  width: 100%;
  height: 262px;
}
.jr_three {
  width: 100%;
  height: 218px;
}
</style>
