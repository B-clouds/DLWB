<template>
  <div class="fhgkRight">
    <!-- 负荷趋势-->
    <div class="jr_block">
      <div class="j_titles">
        <span class="span1">负荷趋势</span>
      </div>
      <div class="jbBlock">
        <div class="jbLeft">
          <span>频度</span>
        </div>
        <div class="jbRight2">
          <div class="inputs">
            <el-select
              v-model="pl_value"
              @visible-change="plClick"
              placeholder=""
            >
              <el-option
                v-for="item in pl"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <img v-show="!pl_show" src="./img/xia.png" />
            <img v-show="pl_show" src="./img/shang.png" />
          </div>
        </div>
      </div>
      <div class="jbBlock">
        <div class="jbLeft">
          <span>周期</span>
        </div>
        <div class="jbRight2">
          <div class="inputs">
            <el-date-picker
              v-model="value1"
              type="daterange"
              range-separator="-"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            >
            </el-date-picker>
          </div>
        </div>
      </div>
      <div class="jbBlock">
        <div class="jbLeft">
          <span>维度</span>
        </div>
        <div class="jbRight2">
          <div class="inputs">
            <el-select
              v-model="wd_value"
              @visible-change="wdClick"
              placeholder=""
            >
              <el-option
                v-for="item in wd"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <img v-show="!wd_show" src="./img/xia.png" />
            <img v-show="wd_show" src="./img/shang.png" />
          </div>
        </div>
      </div>
      <div class="qs_echarts">
        <fhgk_one />
      </div>
    </div>
  </div>
</template>

<script>
import fhgk_one from "./echarts/fhgk_one.vue"; //负荷趋势
export default {
  components: {
    fhgk_one,
  },
  name: "fhgkRight",
  data() {
    return {
      pl: [
        {
          value: "",
          label: "日度",
        },
      ],
      pl_value: "",
      pl_show: "",
      value1: "",
      wd: [
        {
          value: "",
          label: "最小负荷",
        },
      ],
      wd_value: "",
      wd_show: "",
    };
  },
  filters: {},
  watch: {
    colors(e) {},
  },
  mounted() {},
  methods: {
    wdClick(e) {
      this.wd_show = e;
    },
    plClick(e) {
      this.pl_show = e;
    },
  },
};
</script>

<style scoped>
.fhgkRight {
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
  height: 423px;
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
  top: 210px;
  left: 0;
  width: 379px;
  height: 200px;
}
</style>
<style scoped>
.jbBlock {
  width: 100%;
  height: 34px;
  display: flex;
  margin-top: 18px;
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
  width: 273px;
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