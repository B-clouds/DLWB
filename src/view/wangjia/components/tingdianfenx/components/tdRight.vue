<template>
  <div class="jRight">
    <!-- 停电频次统计-->
    <div class="jr_block">
      <div class="j_titles">
        <span class="span1">停电频次统计</span>
        <span class="span2">(近五年)</span>
      </div>
      <div class="tdText">
        <div class="tdNumImg"></div>
        <span class="tdNumName">停电总次数：</span>
        <span class="tdNumData">15</span>
        <span class="tdNumUnit">次</span>
      </div>
      <div class="tdEcharts">
        <td_oneEcharts />
      </div>
    </div>
    <!-- 停电原因占比-->
    <div class="jr_block jr_block2">
      <div class="j_titles">
        <span class="span1">停电原因占比</span>
      </div>
      <div class="tdEcharts tdEchartsTwo">
        <td_twoEcharts />
      </div>
    </div>
  </div>
</template>

<script>
import td_oneEcharts from "./echarts/td_one.vue"; //停电频次统计
import td_twoEcharts from "./echarts/td_two.vue"; //停电原因占比
export default {
  components: {
    td_oneEcharts,
    td_twoEcharts,
  },
  name: "tdRight",
  data() {
    return {};
  },
  filters: {},
  watch: {
    colors(e) {},
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.jRight {
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
  height: 337px;
  background: url("img/bg4.png") no-repeat !important;
  background-size: 100% 100% !important;
  margin-bottom: 15px;
}
.jr_block2 {
  height: 223px !important;
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
<!-- 停电频次统计 -->
<style scoped>
.tdText {
  position: absolute;
  top: 56px;
  left: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.tdNumImg {
  width: 67px;
  height: 34px;
  background: url(img/tdtj.png) no-repeat;
  background-size: 100% 100%;
}
.tdNumName {
  margin-left: 4px;
  font-family: Source Han Sans CN;
  font-size: 16px;
  font-weight: bold;
  line-height: 22.4px;
  letter-spacing: 1.6px;
  color: #ffffff;
  text-shadow: 0px 0px 10px 0px rgba(11, 113, 255, 0.6);
}
.tdNumData {
  font-family: DIN Alternate;
  font-size: 24px;
  font-weight: bold;
  line-height: 18px;
  letter-spacing: 0px;
  color: #eafaff;
  text-shadow: 0px 0px 10px rgba(11, 113, 255, 0.5),
    0px 0px 10px rgba(11, 113, 255, 0.8);
}
.tdNumUnit {
  margin-left: 5px;
  font-family: 苹方;
  font-size: 14px;
  font-weight: normal;
  line-height: 18px;
  letter-spacing: 0px;
  color: #bebebe;
}
.tdEcharts {
  position: absolute;
  top: 87px;
  left: 0;
  width: 379px;
  height: 250px;
}
.tdEchartsTwo {
  top: 390px;
  height: 183px;
}
</style>