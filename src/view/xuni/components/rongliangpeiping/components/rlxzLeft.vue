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
        <span>10kV配变规模</span>
      </div>
      <div class="one_block">
        <div class="one_b_item">
          <img class="img1" src="./img/img1.png" />
          <span class="span1">6274</span>
          <span class="span2">网供配变负荷</span>
        </div>
        <div class="one_b_item">
          <img class="img2" src="./img/img2.png" />
          <span class="span1">6274</span>
          <span class="span2">配变台数</span>
        </div>
      </div>
      <div class="one_block">
        <div class="one_b_item">
          <img class="img2" src="./img/img2.png" />
          <span class="span1">6274</span>
          <span class="span2">配变容量</span>
        </div>

        <div class="one_b_item">
          <img class="img3" src="./img/img3.png" />
          <span class="span1">6274</span>
          <span class="span2">最大负载率平均值</span>
        </div>
      </div>
    </div>
    <div class="jr_block jr_block2">
      <div class="j_titles">
        <span>35kV变电规模</span>
      </div>
      <div class="two_block">
        <div class="two_b_item">
          <div class="tops">
            <span>网供负荷</span>
          </div>
          <div class="bottoms">
            <span>XXXX</span>
          </div>
        </div>
        <div class="two_b_item">
          <div class="tops">
            <span>变电站座数</span>
          </div>
          <div class="bottoms">
            <span>XXXX</span>
          </div>
        </div>
        <div class="two_b_item">
          <div class="tops">
            <span>主变台数</span>
          </div>
          <div class="bottoms">
            <span>XXXX</span>
          </div>
        </div>
        <div class="two_b_item">
          <div class="tops">
            <span>变电容量</span>
          </div>
          <div class="bottoms">
            <span>XXXX</span>
          </div>
        </div>
        <div class="two_b_item">
          <div class="tops">
            <span>容载比</span>
          </div>
          <div class="bottoms">
            <span>XXXX</span>
          </div>
        </div>
        <div class="zwf"></div>
      </div>
    </div>
    <div class="jr_block jr_block2">
      <div class="j_titles">
        <span>220kV变电规模</span>
      </div>
      <div class="two_block">
        <div class="two_b_item">
          <div class="tops">
            <span>网供负荷</span>
          </div>
          <div class="bottoms">
            <span>XXXX</span>
          </div>
        </div>
        <div class="two_b_item">
          <div class="tops">
            <span>变电站座数</span>
          </div>
          <div class="bottoms">
            <span>XXXX</span>
          </div>
        </div>
        <div class="two_b_item">
          <div class="tops">
            <span>主变台数</span>
          </div>
          <div class="bottoms">
            <span>XXXX</span>
          </div>
        </div>
        <div class="two_b_item">
          <div class="tops">
            <span>变电容量</span>
          </div>
          <div class="bottoms">
            <span>XXXX</span>
          </div>
        </div>
        <div class="two_b_item">
          <div class="tops">
            <span>容载比</span>
          </div>
          <div class="bottoms">
            <span>XXXX</span>
          </div>
        </div>
        <div class="zwf"></div>
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
  height: 188px;
  background: url("img/bg4.png") no-repeat !important;
  background-size: 100% 100% !important;
  margin-bottom: 20px;
}
.jr_block2 {
  height: 284px !important;
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
.two_block {
  width: 100%;
  height: 244px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-content: space-around;
}
.two_block > .two_b_item {
  width: 124px;
  height: 56px;
  background: url("img/tbig.png") no-repeat !important;
  background-size: 100% 100% !important;
  margin-right: 4px;
}
.zwf {
  width: 124px;
  height: 56px;
}
.two_block > .two_b_item > .tops {
  width: 100%;
  height: 50%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.two_block > .two_b_item > .tops > span {
  font-family: Source Han Sans CN;
  font-size: 12px;
  font-weight: normal;
  color: #d6d6d6;
}
.two_block > .two_b_item > .bottoms {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.two_block > .two_b_item > .bottoms > span {
  font-family: DIN Alternate;
  font-size: 20px;
  font-weight: bold;
  background-image: -webkit-linear-gradient(top, #a3ffff, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
