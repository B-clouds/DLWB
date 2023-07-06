<template>
  <div class="mxRight">
    <!-- 区域基本信息-->
    <div class="jr_block">
      <div class="j_titles">
        <span class="span1">区域基本信息</span>
      </div>
      <div class="jr_t_t">
        <span class="span1">区域名称:</span>
        <span class="span2">xxxxx区域名称</span>
      </div>
      <div class="jr_t_b">
        <div class="blocks">
          <img src="./img/jr1.png" />
          <div class="rights">
            <div class="tops">
              <span class="span1">6274</span>
              <span class="span2">㎡</span>
            </div>
            <div class="bottoms">
              <span>区域面积</span>
            </div>
          </div>
        </div>
        <div class="blocks">
          <img src="./img/jr2.png" />
          <div class="rights">
            <div class="tops">
              <span class="span1">xxxx</span>
            </div>
            <div class="bottoms">
              <span>区域分类</span>
            </div>
          </div>
        </div>
      </div>
      <div class="jr_t_b">
        <div class="blocks">
          <img src="./img/jr1.png" />
          <div class="rights">
            <div class="tops">
              <span class="span1">274</span>
              <span class="span2">kg/m³</span>
            </div>
            <div class="bottoms">
              <span>负荷密度</span>
            </div>
          </div>
        </div>
        <div class="blocks">
          <img src="./img/jr2.png" />
          <div class="rights">
            <div class="tops">
              <span class="span1">741</span>
              <span class="span2">kg/m³</span>
            </div>
            <div class="bottoms">
              <span>远景密度</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 设施现状-->
    <div class="jr_block jr_block2">
      <div class="j_titles">
        <span class="span1">设施现状</span>
      </div>
      <div class="jr_b_echarts">
        <zr_bottom />
      </div>
    </div>
  </div>
</template>

<script>
import zr_bottom from "./echarts/zr_bottom.vue";
export default {
  components: {
    zr_bottom,
  },
  name: "mxRight",
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
.mxRight {
  width: 379px;
  height: 943px;
  position: absolute;
  top: 125px;
  right: 10px;
}
</style>
<style scoped>
/* 表格样式 */
.e_tables {
  width: 90%;
  height: 100%;
  overflow-y: scroll;
  margin-left: 5%;
}
.e_tables2 {
  height: 72% !important;
}
.e_tables::-webkit-scrollbar {
  display: none;
}
.span1 {
  color: red;
}
.w_title {
  width: 100%;
  height: 47.3px;
  background: url("img/title.png") no-repeat !important;
  background-size: 100% 100% !important;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.w_title > span {
  margin-left: 38.33px;
  font-family: YouSheBiaoTiHei;
  font-size: 26px;
  margin-top: -4px;
  font-weight: normal;
  background-image: -webkit-linear-gradient(
    bottom,
    #6bedff,
    #ffffff
  ) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
}
</style>
<style scoped>
.jr_block {
  width: 100%;
  height: 289px;
  background: url("img/bg4.png") no-repeat !important;
  background-size: 100% 100% !important;
  margin-bottom: 15px;
}
.jr_block2 {
  height: 630px !important;
}
.jr_t_t {
  width: 352px;
  height: 44px;
  margin-left: 15px;
  margin-top: 8px;
  display: flex;
  align-items: center;
  background: url("img/jr_t_t.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.jr_t_t > .span1 {
  font-family: Source Han Sans CN;
  font-size: 16px;
  font-weight: normal;
  color: #ffffff;
  margin-left: 13px;
  margin-right: 25px;
}
.jr_t_t > .span2 {
  font-family: Source Han Sans CN;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
}
.jr_t_b {
  width: 100%;
  height: 50px;
  display: flex;
  margin-top: 30px;
}
.jr_t_b > .blocks {
  width: 50%;
  height: 100%;
  display: flex;
}
.jr_t_b > .blocks > img {
  width: 43px;
  height: 44px;
  margin-left: 24px;
  margin-right: 5px;
  margin-top: 4px;
}
.jr_t_b > .blocks > .rights {
  width: 120px;
  height: 100%;
}
.jr_t_b > .blocks > .rights > .tops {
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
}
.jr_t_b > .blocks > .rights > .tops > .span1 {
  font-family: YouSheBiaoTiHei;
  font-size: 24px;
  font-weight: normal;
  background-image: -webkit-linear-gradient(top, #a3ffff, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.jr_t_b > .blocks > .rights > .tops > .span2 {
  font-family: Source Han Sans CN;
  font-size: 14px;
  font-weight: normal;
  /* 文字三级 */
  color: #b3b3b3;
  margin-left: 3px;
  margin-top: 4px;
}
.jr_t_b > .blocks > .rights > .bottoms {
  width: 100%;
  height: 20px;
  display: flex;
  align-items: flex-end;
}
.jr_t_b > .blocks > .rights > .bottoms > span {
  font-family: Source Han Sans CN;
  font-size: 14px;
  font-weight: normal;
  line-height: 26px;
  letter-spacing: 0px;
  color: #d6d6d6;
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
.t_input {
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 40px;
}
.t_input > .t_block {
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 13px;
  background: url("img/tbgs.png") no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
}
.t_input > .t_block > img {
  width: 16px;
  height: 16px;
}
.t_input > .chaxun {
  width: 126px;
  height: 100%;
  background: url("img/chaxun.png") no-repeat !important;
  background-size: 100% 100% !important;
  position: relative;
}
.chaxun > .icons {
  width: 15px;
  height: 15px;
  position: absolute;
  top: 8.5px;
  right: 8.5px;
  background: url("img/c1.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.jr_b_echarts {
  width: 100%;
  height: 589px;
}
</style>
