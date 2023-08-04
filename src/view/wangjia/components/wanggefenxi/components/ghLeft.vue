<template>
  <div class="gLeft">
    <div class="gl_top">
      <span class="span1">当前区域：</span>
      <div class="names">
        <span>xxxxx区域名称</span>
      </div>
      <div class="fanhui" @click="fanhui"></div>
    </div>
    <div class="jr_block">
      <div class="j_titles">
        <span class="span1">主要技术原则</span>
      </div>
      <div class="j_t_tr jt1">
        <div class="blocks">
          <span class="span1">类型</span>
        </div>
        <div class="blocks">
          <span class="span1">10kV</span>
        </div>
        <div class="blocks">
          <span class="span1">0.4kV</span>
        </div>
      </div>
      <div class="j_t_table">
        <div
          class="j_t_tr"
          :class="index % 2 == 0 ? 'j_t_bg' : ''"
          v-for="(item, index) in 6"
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
        </div>
      </div>
    </div>
    <div class="jr_block jr_block3">
      <div class="j_titles">
        <span class="span1">规划预期</span>
      </div>
      <div class="jbBlock">
        <div class="jbLeft">
          <span>是否纳入“十三五”期间改造</span>
        </div>
        <div class="jbRight">
          <span>是</span>
        </div>
      </div>
      <div class="jbBlock">
        <div class="jbLeft">
          <span>规划改造年份</span>
        </div>
        <div class="jbRight">
          <span>2025年</span>
        </div>
      </div>
    </div>

    <div class="jr_block jr_block2">
      <div class="j_titles">
        <span class="span1">户表规模</span>
      </div>
      <div class="j_t_tr jt1">
        <div class="blocks blocks2">
          <span class="span1">类型</span>
        </div>
        <div class="blocks blocks2">
          <span class="span1">型号</span>
        </div>
        <div class="blocks blocks2">
          <span class="span1">数量</span>
        </div>
        <div class="blocks blocks2">
          <span class="span1">规模 </span>
        </div>
        <div class="blocks blocks2">
          <span class="span1">投资(万元)</span>
        </div>
      </div>
      <div class="j_t_table">
        <div
          class="j_t_tr"
          :class="index % 2 == 0 ? 'j_t_bg' : ''"
          v-for="(item, index) in 6"
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "gLeft",
  components: {},
  methods: {
    fanhui() {
      this.$emit("geshihua");
    },
  },
};
</script>

<style scoped>
.gLeft {
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
  height: 317px;
  background: url("img/bg4.png") no-repeat !important;
  background-size: 100% 100% !important;
  margin-bottom: 15px;
}
.jr_block2 {
  height: 317px !important;
}
.jr_block3 {
  height: 245px !important;
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
.j_t_tr {
  width: 100%;
  height: 36px;
  display: flex;
}
.jt1 {
  margin-top: 8px;
}
.j_t_tr > .blocks {
  width: 33%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.j_t_tr > .blocks2 {
  width: 20% !important;
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
  height: 216px;
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

<style scoped>
.jbBlock {
  width: 100%;
  height: 34px;
  display: flex;
  margin-top: 42px;
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
  width: 200px;
  height: 100%;
  display: flex;
  align-items: center;

  margin-left: 14px;
  justify-content: flex-end;
}
.jbBlock > .jbLeft2 {
  width: 80px;
  justify-content: flex-end;
}
.jbBlock > .jbLeft2 > span {
  margin-right: 17px;
}

.jbBlock > .jbLeft > span {
  font-family: Source Han Sans SC;
  font-size: 14px;
  margin-right: 15px;
  font-weight: normal;
  letter-spacing: 0em;

  color: rgba(255, 255, 255, 0.7);
}
.jbBlock > .jbRight {
  width: 104px;
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
