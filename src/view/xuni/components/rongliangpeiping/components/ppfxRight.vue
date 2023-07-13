<template>
  <div class="mxRight">
    <!-- 配平建议-->
    <div class="jr_block">
      <div class="j_titles">
        <span class="span1">配平建议</span>
      </div>
      <div class="j_t_tr jt1">
        <div class="blocks">
          <span class="span1">时间</span>
        </div>
        <div class="blocks">
          <span class="span1">容量需求</span>
        </div>
        <div class="blocks">
          <span class="span1">新增数量</span>
        </div>
        <div class="blocks">
          <span class="span1">容载比</span>
        </div>
        <div class="blocks">
          <span class="span1">单个容量</span>
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
import rlpp_echarts from "./echarts/rlpp_echarts.vue";
export default {
  components: {
    rlpp_echarts,
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
.pr_t {
  width: 100%;
  height: 247px;
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
  height: 284px !important;
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
  height: 244px;
}
</style>

<style scoped>
.jr_block {
  width: 100%;
  height: 272px;
  background: url("img/bg4.png") no-repeat !important;
  background-size: 100% 100% !important;
  margin-bottom: 20px;
  position: relative;
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
.j_t_tr {
  width: 100%;
  height: 36px;
  display: flex;
}
.jt1 {
  margin-top: 8px;
}
.j_t_tr > .blocks {
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.j_t_tr > .blocks > .span1 {
  font-family: Source Han Sans SC;
  font-size: 14px;
  color: #ffffff;
}
.j_t_tr > .blocks > .span2 {
  opacity: 0.7;
  font-family: Source Han Sans SC;
  font-size: 12px;
  font-weight: normal;
  color: #ffffff;
}
</style>
<style scoped>
.j_t_table {
  width: 100%;
  height: 186px;
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
