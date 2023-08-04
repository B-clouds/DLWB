<template>
  <div class="gRight">
    <div class="jr_block">
      <div class="j_titles">
        <span class="span1">户均配变容量（综合）（kVA/户）</span>
      </div>
      <xr_one />
    </div>

    <div class="jr_block">
      <div class="j_titles">
        <span class="span1">综合配变容量（kVA）</span>
      </div>
      <xr_two />
    </div>
    <div class="jr_block">
      <div class="j_titles">
        <span class="span1">农排配变容量（kVA）</span>
      </div>
      <xr_three />
    </div>
  </div>
</template>

<script>
import xr_one from "./echarts/xr_one.vue";
import xr_two from "./echarts/xr_two.vue";
import xr_three from "./echarts/xr_three.vue";
export default {
  name: "gRight",
  components: {
    xr_one,
    xr_two,
    xr_three,
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
  height: 305px;
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
.gr_two {
  width: 100%;
  height: 249px;
}
.gr_three {
  width: 100%;
  height: 230px;
}
</style>
