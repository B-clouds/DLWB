<template>
  <div class="wjRight">
    <div class="jr_block">
      <div class="j_titles">
        <span class="span1">台区高损概括</span>
      </div>
      <div class="zr_one">
        <div class="zr_block">
          <div class="zr_title">台区数量</div>
          <span>6274</span>
        </div>
        <div class="zr_block zr_block2">
          <div class="zr_title">高损数量</div>
          <span>6274</span>
        </div>
        <div class="zr_block zr_block3">
          <div class="zr_title">异常高损数量</div>
          <span>6274</span>
        </div>
      </div>
    </div>

    <div class="jr_block jr_block2">
      <div class="j_titles">
        <span class="span1">频繁故障原因分析</span>
      </div>
      <div class="zl_two">
        <zr_two />
      </div>
    </div>

    <div class="jr_block jr_block3">
      <div class="j_titles">
        <span class="span1">频繁线路类型对比</span>
      </div>
      <div class="zl_three">
        <zr_three />
      </div>
    </div>
  </div>
</template>

<script>
import zr_two from "./echarts/zr_two.vue";
import zr_three from "./echarts/zr_three.vue";
export default {
  components: {
    zr_two,
    zr_three,
  },
  name: "wjRight",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.wjRight {
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
  height: 194px;
  background: url("img/bg4.png") no-repeat !important;
  background-size: 100% 100% !important;
  margin-bottom: 56px;
  position: relative;
}
.jr_block2 {
  height: 299px !important;
}
.jr_block3 {
  height: 319px !important;
}

.jr_xiala {
  width: 177px;
  height: 31px;
  position: absolute;
  top: 5px;
  right: 13px;
  background: url("img/xiala.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.jr_xiala > img {
  position: absolute;
  top: 10px;
  right: 8px;
  width: 14px;
  height: 8px;
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
.wr_one {
  width: 100%;
  height: 220px;
}
.wr_two {
  width: 100%;
  height: 161px;
}
.wr_three {
  width: 100%;
  height: 196px;
}
.wr_four {
  width: 100%;
  height: 144px;
}
</style>
<style scoped>
.zr_one {
  width: 100%;
  height: 154px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.zr_one > .zr_block {
  width: 137px;
  height: 48px;
  margin-top: 10px;
  margin-left: 17px;
  margin-right: 35px;
  background: url("img/zr1.png") no-repeat;
  background-size: 100% 100%;
  position: relative;
  display: flex;
  align-items: center;
}
.zr_one > .zr_block > span {
  font-family: DIN Alternate;
  margin-left: 44px;
  font-size: 20px;
  font-weight: bold;
  background: linear-gradient(to bottom, #ffffff, #7bbbff);
  -webkit-background-clip: text;
  color: transparent;
}
.zr_block2 {
  background: url("img/zr2.png") no-repeat !important;
  background-size: 100% 100%;
}
.zr_block3 {
  background: url("img/zr3.png") no-repeat !important;
  background-size: 100% 100%;
  margin-top: -10px !important;
}
.zr_one > .zr_block > .zr_title {
  width: 72px;
  height: 26px;
  position: absolute;
  left: 40px;
  bottom: 33px;
  font-family: SourceHanSansCN-Medium;
  font-size: 12px;
  font-weight: normal;
  line-height: 26px;
  color: #d6d6d6;
}
</style>
<style scoped>
.zl_two {
  width: 100%;
  height: 259px;
}
.zl_three {
  width: 100%;
  height: 279px;
}
</style>
