<template>
  <div class="dyhRight">
    <!-- 规划项目列表-->
    <div class="jr_block">
      <div class="j_titles">
        <span class="span1">规划项目列表</span>
      </div>
      <div class="qs_echarts">
        <dyh_two />
      </div>
      <div class="jbBlock">
        <div class="jbLeft">
          <span>年度</span>
        </div>
        <div class="jbRight2">
          <div class="inputs">
            <el-date-picker v-model="value1" type="year" placeholder="选择年份">
            </el-date-picker>
          </div>
        </div>
      </div>
      <div class="j_table">
        <div class="j_t_tr jt1">
        <div class="blocks">
          <span class="span1">规划时间</span>
        </div>
        <div class="blocks">
          <span class="span1">项目名称</span>
        </div>
        <div class="blocks">
          <span class="span1">项目类型</span>
        </div>
        <div class="blocks">
          <span class="span1">容量</span>
        </div>
      </div>
      <div class="j_t_table">
        <div
          class="j_t_tr j_t_tr1"
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
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import dyh_two from "./echarts/dyh_two.vue";
export default {
  components: {
    dyh_two,
  },
  name: "dyhRight",
  data() {
    return {
      value1: "",
    };
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
.dyhRight {
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
  height: 608px;
  background: url("img/bg4.png") no-repeat !important;
  background-size: 100% 100% !important;
  margin-bottom: 15px;
  position: relative;
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
.qs_echarts {
  position: absolute;
  top: 58px;
  left: 0;
  width: 379px;
  height: 210px;
}
</style>
<style scoped>
.jbBlock {
  width: 100%;
  height: 34px;
  display: flex;
  top: 302px;
  position: absolute;
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
  width: 65px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.jbBlock > .jbLeft > span {
  font-family: Source Han Sans SC;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 0em;

  color: rgba(255, 255, 255, 0.7);
  margin-right: 17px;
}
.jbBlock > .jbRight > span {
  font-family: Source Han Sans SC;
  font-size: 14px;
  font-weight: normal;
  color: #ada9a9;
  margin-left: 11px;
}
.jbBlock > .jbRight2 {
  width: 170px;
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
<style>
.el-date-table td.in-range div,
.el-date-table td.in-range div:hover,
.el-date-table.is-week-mode .el-date-table__row.current div,
.el-date-table.is-week-mode .el-date-table__row:hover div {
  background-color: transparent;
}
.el-date-picker__header--bordered {
  border-bottom: unset;
}
</style>
<style scoped>
::v-deep .el-input__icon {
  margin-top: -6px;
}
::v-deep .el-input__inner {
  background-color: transparent;
  border: 0;
  height: 32px;
}
::v-deep .el-date-editor .el-range-separator {
  color: #ffffff;
  margin-top: -6px;
}
::v-deep .el-date-editor .el-range-input {
  color: #fff;
}
::v-deep .el-date-table td.in-range div {
  background-color: transparent !important;
}
</style>
<style scoped>
.j_table {
  position: absolute;
  top: 356px;
  width: 379px;
  height: 223px;
}
.j_t_tr {
  width: 100%;
  height: 39px;
  display: flex;
}
.j_t_tr1 {
  height: 30px;
}
.j_t_tr > .blocks {
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  height: 184px;
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