<template>
  <div class="gRight">
    <div class="jr_block">
      <div class="j_titles">
        <span class="span1">配变规模</span>
      </div>
      <div class="jbBlock">
        <div class="jbLeft jbLeft2">
          <span>投资（万元）</span>
        </div>
        <div class="jbRight">
          <span>7</span>
        </div>
      </div>
      <ghr_one />
    </div>

    <div class="jr_block jr_block2">
      <div class="j_titles">
        <span class="span1">线路规模</span>
      </div>
      <div class="jbBlock">
        <div class="jbLeft jbLeft2">
          <span>投资（万元）</span>
        </div>
        <div class="jbRight">
          <span>3.91</span>
        </div>
      </div>
      <ghr_two />
    </div>
    <div class="jr_block jr_block3">
      <div class="j_titles">
        <span class="span1">电杆规模</span>
      </div>
      <div class="jbBlock">
        <div class="jbLeft jbLeft2">
          <span>投资（万元）</span>
        </div>
        <div class="jbRight">
          <span>1.08</span>
        </div>
      </div>
      <ghr_three />
    </div>
  </div>
</template>

<script>
import ghr_one from "./echarts/ghr_one.vue";
import ghr_two from "./echarts/ghr_two.vue";
import ghr_three from "./echarts/ghr_three.vue";
export default {
  name: "gRight",
  components: {
    ghr_one,
    ghr_two,
    ghr_three,
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
  height: 310px;
  background: url("img/bg4.png") no-repeat !important;
  background-size: 100% 100% !important;
  margin-bottom: 15px;
}
.jr_block2 {
  height: 310px !important;
}
.jr_block3 {
  height: 294px !important;
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
  margin-top: 18px;
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
  width: 130px;
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
