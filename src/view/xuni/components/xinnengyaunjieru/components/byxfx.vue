<template>
  <div class="zdfxLeft">
    <div class="gl_top">
      <span class="span1">当前区域：</span>
      <div class="names">
        <span>xxxxx区域名称</span>
      </div>
      <div class="fanhui" @click="fanhuiClick"></div>
    </div>
    <div class="jr_block">
      <div class="j_titles">
        <span>必要性分析</span>
      </div>
      <div class="j_t">
        <div class="blocks">
          <div class="lefts">
            <div class="img3"></div>
          </div>
          <div class="rights">
            <div class="tops">阈值设定</div>
            <div class="bottoms">
              <span class="span1">965</span>
              <span class="span2">xx</span>
            </div>
          </div>
        </div>
        <div class="blocks">
          <div class="lefts">
            <div class="img4"></div>
          </div>
          <div class="rights">
            <div class="tops">总容量</div>
            <div class="bottoms">
              <span class="span1">965</span>
              <span class="span2">xx</span>
            </div>
          </div>
        </div>
      </div>
      <div class="j_t">
        <div class="blocks">
          <div class="lefts">
            <div class="img5"></div>
          </div>
          <div class="rights">
            <div class="tops">最大负荷</div>
            <div class="bottoms">
              <span class="span1">965</span>
              <span class="span2">xx</span>
            </div>
          </div>
        </div>
        <div class="blocks">
          <div class="lefts">
            <div class="img6"></div>
          </div>
          <div class="rights">
            <div class="tops">负载率</div>
            <div class="bottoms">
              <span class="span1">96</span>
              <span class="span2">%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "zdfxLeft",
  components: {},
  data() {
    return {};
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
  height: 210px;
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
.j_t > .blocks > .lefts > .img3 {
  width: 30px;
  height: 30px;
  position: absolute;
  left: 16px;
  top: 2px;
  background: url("img/by1.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.j_t > .blocks > .lefts > .img4 {
  width: 30px;
  height: 30px;
  position: absolute;
  left: 16px;
  top: 2px;
  background: url("img/by2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.j_t > .blocks > .lefts > .img5 {
  width: 30px;
  height: 30px;
  position: absolute;
  left: 16px;
  top: 2px;
  background: url("img/by3.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.j_t > .blocks > .lefts > .img6 {
  width: 30px;
  height: 30px;
  position: absolute;
  left: 16px;
  top: 2px;
  background: url("img/by4.png") no-repeat !important;
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
