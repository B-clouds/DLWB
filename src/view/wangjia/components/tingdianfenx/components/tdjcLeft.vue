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
        <span class="span1">停电情况</span>
      </div>
      <div class="ckxq">
        <span>查看详情</span>
      </div>
      <div class="tkbj">
        <div class="tguan"></div>
        <div class="sx_item">
          <span class="span1">设备类型</span>
          <!-- 设备类型 -->
          <div class="selectss">
            <el-select
              v-model="dy_value"
              @visible-change="dyClick"
              placeholder=""
            >
              <el-option
                v-for="item in dianya"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <img v-show="!dy_show" src="./img/xia.png" />
            <img v-show="dy_show" src="./img/shang.png" />
          </div>
          <span class="span2">统计类型</span>
          <div class="selectss">
            <el-select
              v-model="cj_value"
              @visible-change="cjClick"
              placeholder=""
            >
              <el-option
                v-for="item in chuangjian"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <img v-show="!cj_show" src="./img/xia.png" />
            <img v-show="cj_show" src="./img/shang.png" />
          </div>
          <span class="span2">开始时间</span>
          <div class="selectss">
            <el-date-picker
              v-model="value1"
              @change="dateClick"
              value-format="yyyy-MM-dd"
              type="date"
              placeholder="选择投运运日期"
            >
            </el-date-picker>
          </div>
        </div>
      </div>
      <tdjcOne />
    </div>
    <div class="jr_block">
      <div class="j_titles">
        <span class="span1">停电次数</span>
      </div>
      <tdjcTwo />
    </div>
    <div class="jr_block">
      <div class="j_titles">
        <span class="span1">频繁停电情况</span>
      </div>
      <tdjcThree />
    </div>
  </div>
</template>

<script>
import tdjcOne from "./echarts/tdjcOne.vue";
import tdjcTwo from "./echarts/tdjcTwo.vue";
import tdjcThree from "./echarts/tdjcThree.vue";
export default {
  name: "zdfxLeft",
  components: {
    tdjcOne,
    tdjcTwo,
    tdjcThree,
  },
  data() {
    return {
      gjlx: [
        {
          value: "",
          label: "重过载",
        },
      ],
      gjlx_value: "",
      gjlx_show: "",

      pl: [
        {
          value: "",
          label: "日内",
        },
      ],
      pl_value: "",
      pl_show: "",
      value1: "",

      dianya: [
        {
          value: "全站",
          label: "全站",
        },
        {
          value: "1号主变",
          label: "1号主变",
        },
        {
          value: "2号主变",
          label: "2号主变",
        },
      ],
      dy_value: "",
      dy_show: "",
      // --------------------------统计类型---------------------------
      chuangjian: [
        {
          value: "0",
          label: "有功功率",
        },
        {
          value: "1",
          label: "无功功率",
        },
        {
          value: "2",
          label: "电流",
        },
      ],
      cj_value: "",
      cj_show: false,
    };
  },
  mounted() {
    console.log(this.$bus.$on("leftOid"), "ididiiididididi");
  },
  methods: {
    //停电分析-区域基本信息
    async getAreaInfo() {
      this.$axios
        .get(window.wgApiUrl + "/powerCut/tree", {
          params: {
            id: 10000,
          },
        })
        .then((res) => {
          console.log("res", res);
        })
        .catch((error) => {});
    },
    gjlxClick(e) {
      this.gjlx_show = e;
    },
    plClick(e) {
      this.pl_show = e;
    },
    fanhuiClick() {
      this.$emit("geshihua");
    },
    dyClick(e) {
      this.dy_show = e;
    },
    cjClick(e) {
      this.cj_show = e;
    },
  },
};
</script>

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
  height: 289px;
  background: url("img/bg4.png") no-repeat !important;
  background-size: 100% 100% !important;
  margin-bottom: 20px;
  position: relative;
}

.jr_block2 {
  height: 300px !important;
}
.jr_block3 {
  height: 259px !important;
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
  width: 76px;
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
  margin-right: 12px;
}
.jbBlock > .jbRight {
  width: 284px;
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
<style scoped>
.zst {
  width: 274px;
  height: 57px;
  margin-left: 46px;
  margin-top: 10px;
  background: url("img/zst.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.zl_one {
  width: 100%;
  height: 222px;
}
.zl_two {
  width: 100%;
  height: 248px;
}
</style>
<style scoped>
.ckxq {
  width: 69px;
  height: 31px;
  position: absolute;
  right: 14px;
  top: 5px;
  background: url("img/ckxq.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.ckxq > span {
  font-family: Source Han Sans SC;
  font-size: 14px;
  font-weight: normal;
  color: #ffffff;
}
.tkbj {
  width: 794px;
  height: 342px;
  position: absolute;
  left: 400px;
  top: 0px;
  background: url("img/tkbj.png") no-repeat;
  background-size: 100% 100%;
}
.tkbj > .tguan {
  width: 33px;
  height: 33px;
  position: absolute;
  right: 27px;
  top: 22px;
  background: url("img/tguan.png") no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
}

.sx_item {
  width: 100%;
  height: 34px;
  display: flex;
  align-items: center;
  margin-top: 20px;
}
.sx_item > .span1 {
  font-family: Source Han Sans SC;
  font-size: 14px;
  font-weight: normal;
  color: rgba(255, 255, 255, 0.7);
  margin-left: 23px;
  margin-right: 14px;
}
.sx_item > .span2 {
  font-family: Source Han Sans SC;
  font-size: 14px;
  font-weight: normal;
  color: rgba(255, 255, 255, 0.7);
  margin-left: 20px;
  margin-right: 14px;
}

.selectss {
  width: 135px;
  height: 34px;
  /* background: url("img/ip.png") no-repeat !important;
  background-size: 100% 100% !important; */
  position: relative;
  background: rgba(25, 61, 112, 0.8);
  box-sizing: border-box;
  border: 1px solid #3876b6;
}
.selectss > img {
  position: absolute;
  top: 14px;
  right: 8.8px;
  width: 14px;
  height: 8px;
}
</style>
