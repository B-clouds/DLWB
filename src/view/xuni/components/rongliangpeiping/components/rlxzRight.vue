<template>
  <div class="wjRight">
    <div class="jr_block">
      <div class="j_titles">
        <span class="span1">110kV变电规模</span>
      </div>
      <div class="rz_One">
        <div class="rz_o_block">
          <div class="bgs"></div>
          <span class="span1">xxxx</span>
          <span class="span2">网供负荷</span>
        </div>
        <div class="rz_o_block">
          <div class="bgs"></div>
          <span class="span1">xxxx</span>
          <span class="span2">变电站座数</span>
        </div>
        <div class="rz_o_block">
          <div class="bgs"></div>
          <span class="span1">xxxx</span>
          <span class="span2">主变台数</span>
        </div>
        <div class="rz_o_block">
          <div class="bgs"></div>
          <span class="span1">xxxx</span>
          <span class="span2">变电容量</span>
        </div>
        <div class="rz_o_block">
          <div class="bgs"></div>
          <span class="span1">xxxx</span>
          <span class="span2">容载比</span>
        </div>
      </div>
    </div>

    <div class="jr_block">
      <div class="j_titles">
        <span class="span1">500kV变电规模</span>
      </div>
      <div class="rz_One">
        <div class="rz_o_block2">
          <div class="bgs2"></div>
          <span class="span1">xxxx</span>
          <span class="span2">网供负荷</span>
        </div>
        <div class="rz_o_block2">
          <div class="bgs2"></div>
          <span class="span1">xxxx</span>
          <span class="span2">变电站座数</span>
        </div>
        <div class="rz_o_block2">
          <div class="bgs2"></div>
          <span class="span1">xxxx</span>
          <span class="span2">主变台数</span>
        </div>
        <div class="rz_o_block2">
          <div class="bgs2"></div>
          <span class="span1">xxxx</span>
          <span class="span2">变电容量</span>
        </div>
        <div class="rz_o_block2">
          <div class="bgs2"></div>
          <span class="span1">xxxx</span>
          <span class="span2">容载比</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
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
  height: 279px;
  background: url("img/bg4.png") no-repeat !important;
  background-size: 100% 100% !important;
  margin-bottom: 20px;
  position: relative;
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
.rz_One {
  width: 100%;
  height: 240px;
  display: flex;
  flex-wrap: wrap;
}
.rz_One > .rz_o_block {
  margin: 10px 5px 15px 33px;
  width: 73px;
  height: 92px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  align-items: center;
}
.rz_One > .rz_o_block > .span1 {
  font-family: DIN Alternate;
  font-size: 20px;
  font-weight: bold;
  background-image: -webkit-linear-gradient(top, #a3ffff, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  z-index: 1;
}
.rz_One > .rz_o_block > .span2 {
  font-family: Source Han Sans CN;
  font-size: 12px;
  font-weight: normal;
  color: #d6d6d6;
  z-index: 1;
}
.rz_One > .rz_o_block > .bgs {
  width: 73px;
  height: 66px;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 0;
  background: url("img/bgs.png") no-repeat !important;
  background-size: 100% 100% !important;
}

.rz_o_block2 {
  width: 75px;
  height: 80px;
  margin: 6px 20px 30px 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  align-items: center;
}
.rz_o_block2 > .bgs2 {
  position: absolute;
  left: 0px;
  top: 18px;
  width: 75px;
  height: 33px;
  background: url("img/bgs2.png") no-repeat !important;
  background-size: 100% 100% !important;
}

.rz_o_block2 > .span1 {
  font-family: DIN Alternate;
  font-size: 20px;
  font-weight: bold;
  background-image: -webkit-linear-gradient(top, #a3ffff, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  z-index: 1;
}
.rz_o_block2 > .span2 {
  font-family: Source Han Sans CN;
  font-size: 12px;
  font-weight: normal;
  color: #d6d6d6;
  z-index: 1;
}
</style>
