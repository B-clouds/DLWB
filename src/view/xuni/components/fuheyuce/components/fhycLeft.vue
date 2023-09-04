<template>
  <div class="fhycLeft">
    <div class="gl_top">
      <span class="span1">当前区域：</span>
      <div class="names">
        <span>{{ origData.name }}</span>
      </div>
      <div class="fanhui" @click="returnMain"></div>
    </div>
    <div class="jr_block">
      <div class="j_titles">
        <span class="span1">区域负荷预测</span>
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
      <div class="jbBlock">
        <div class="jbLeft">
          <span>算法</span>
        </div>
        <div class="jbRight2">
          <div class="inputs">
            <el-select
              v-model="sf_value"
              @visible-change="sfClick"
              placeholder=""
            >
              <el-option
                v-for="item in sf"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <img v-show="!sf_show" src="./img/xia.png" />
            <img v-show="sf_show" src="./img/shang.png" />
          </div>
        </div>
      </div>
      <div class="d_btn">
        <span>预测</span>
      </div>
      <div class="qs_echarts">
        <fhyc_one />
      </div>
      <div class="jbBlock jbBlock2">
        <div class="jbLeft">
          <span>算法平均误差</span>
        </div>
        <div class="jbRight">
          <input v-model="sbdx" placeholder="xxxxxx" />
        </div>
      </div>
      <div class="d_btn d_btn2">
        <span>保存</span>
      </div>
    </div>
  </div>
</template>

<script>
import fhyc_one from "./echarts/fhyc_one.vue"; //负荷趋势
export default {
  name: "fhycLeft",
  components: {
    fhyc_one,
  },
  data() {
    return {
      origData:{},
      baseData:{},
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
      sf: [
        {
          value: "",
          label: "一元线性回归",
        },
      ],
      sf_value: "",
      sf_show: "",
    };
  },
  mounted() {
    this.watchId()
  },
  beforeDestroy() {
    //组件销毁前需要解绑事件。否则会出现重复触发事件的问题
    this.$bus.$off('sendId');
  },
  methods: {
    watchId(){
      let that = this
      that.$bus.$on("sendId", (e) => {
        that.origData = e;
        that.baseData={}
        that.getBaseData()
      })
    },
    async getBaseData(){
      await this.$axios
          .get(window.wgApiUrl + "/loadForecast/loadForecastUserStatus", { //改路径对参数就行
            params: {
              areaId:this.origData.id,
            },
          }).then(res=>{
            this.baseData=res.data.data[0]
          })
    },
    returnMain() {
      this.$bus.$emit("returnMain", true);
    },
    wdClick(e) {
      this.wd_show = e;
    },
    plClick(e) {
      this.pl_show = e;
    },
    sfClick(e) {
      this.sf_show = e;
    },
  },
};
</script>

<style scoped>
.fhycLeft {
  width: 379px;
  height: 974px;
  position: absolute;
  top: 92px;
  left: 10px;
}
.qs_echarts {
  position: absolute;
  top: 320px;
  left: 0;
  width: 379px;
  height: 210px;
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
  cursor: pointer;
}
.jr_block {
  position: relative;
  width: 100%;
  height: 655px;
  background: url("img/bg4.png") no-repeat !important;
  background-size: 100% 100% !important;
  margin-bottom: 15px;
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
.jbBlock {
  width: 100%;
  height: 34px;
  display: flex;
  margin-top: 15px;
  position: relative;
}
.jbBlock2 {
  margin-top: 310px;
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
  width: 73px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.jbBlock2 > .jbLeft {
  width: 121px;
}
.jbBlock > .jbLeft > span {
  font-family: Source Han Sans SC;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 0em;

  color: rgba(255, 255, 255, 0.7);
  margin-right: 17px;
}
.jbBlock > .jbRight2 {
  width: 273px;
  height: 100%;
  background: url("img/jbInput2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.jbBlock > .jbRight {
  width: 273px;
  height: 100%;
  display: flex;
  align-items: center;
  background: url("img/jbInput2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.jbBlock2 > .jbRight {
  width: 225px;
}
.jbBlock > .jbRight > span {
  font-family: Source Han Sans SC;
  font-size: 14px;
  font-weight: normal;
  color: #ffffff;
  opacity: 0.5;
  margin-left: 11px;
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
<style scoped>
.d_btn {
  width: 105px;
  height: 30px;
  position: absolute;
  right: 37px;
  bottom: 378px;
  background: url("img/d_btn.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.d_btn2 {
  bottom: 22px;
}
.d_btn > span {
  font-family: Source Han Sans CN;
  font-size: 13px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.7);
}
.d_btn:hover {
  background: url("img/d_btn2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.d_btn:hover > span {
  font-family: Source Han Sans CN;
  font-size: 13px;
  font-weight: bold;
  color: #ffffff;
}
</style>