<template>
  <div class="ydfx">
    <div class="gl_top">
      <span class="span1">当前区域：</span>
      <div class="names">
        <span>{{ origData.name }}</span>
      </div>
      <div class="fanhui" @click="fanhuiClick"></div>
    </div>

    <div class="jr_block">
      <div class="j_titles">
        <span class="span1">告警统计数量</span>
      </div>
      <div class="jbBlock">
        <div class="jbLeft">
          <span>年份</span>
        </div>
        <div class="jbRight2">
          <div class="inputs">
            <el-select
              v-model="jidu_value"
              @visible-change="jiduClick"
              placeholder=""
            >
              <el-option
                v-for="item in jidu"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <img v-show="!jidu_show" src="./img/xia.png" />
            <img v-show="jidu_show" src="./img/shang.png" />
          </div>
        </div>
      </div>
      <div class="yd_title">
        <img src="./img/sj.png" />
        <span>电力平衡分析</span>
      </div>

      <div class="jbBlock">
        <div class="jbLeft">
          <span>季度</span>
        </div>
        <div class="jbRight2">
          <div class="inputs">
            <el-select
              v-model="nianfen_value"
              @visible-change="nianfenClick"
              placeholder=""
            >
              <el-option
                v-for="item in nianfen"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <img v-show="!nianfen_show" src="./img/xia.png" />
            <img v-show="nianfen_show" src="./img/shang.png" />
          </div>
        </div>
      </div>
      <div class="jr_t_b">
        <div class="blocks">
          <img src="./img/j3.png" />
          <div class="rights">
            <div class="tops">
              <span class="span1">6274</span>
              <span class="span2">㎡</span>
            </div>
            <div class="bottoms">
              <span>最大负荷时刻</span>
            </div>
          </div>
        </div>
        <div class="blocks">
          <img src="./img/j3.png" />
          <div class="rights">
            <div class="tops">
              <span class="span1">xxxx</span>
            </div>
            <div class="bottoms">
              <span>区域最大负荷</span>
            </div>
          </div>
        </div>
      </div>
      <div class="jr_t_b">
        <div class="blocks">
          <img src="./img/j4.png" />
          <div class="rights">
            <div class="tops">
              <span class="span1">274</span>
              <span class="span2">kg/m³</span>
            </div>
            <div class="bottoms">
              <span>10千伏电源出力</span>
            </div>
          </div>
        </div>
        <div class="blocks">
          <img src="./img/j4.png" />
          <div class="rights">
            <div class="tops">
              <span class="span1">741</span>
              <span class="span2">kg/m³</span>
            </div>
            <div class="bottoms">
              <span>0.38千伏电源出力</span>
            </div>
          </div>
        </div>
      </div>

      <div class="wgfh">
        <img src="./img/span1.png" />
        <span class="span1">10千伏网格负荷</span>
        <div class="span2">
          <span>2</span>
        </div>
        <div class="span2">
          <span>2</span>
        </div>
        <div class="span2">
          <span>7</span>
        </div>
        <div class="span2">
          <span>4</span>
        </div>
        <span class="span3">xxx</span>
      </div>

      <div class="qf">
        <div class="qf_item">
          <div class="tops">
            <span>220供10千伏</span>
          </div>
          <div class="bottoms">
            <span>1350</span>
          </div>
        </div>

        <div class="qf_item">
          <div class="tops">
            <span>110供10千伏</span>
          </div>
          <div class="bottoms">
            <span>462</span>
          </div>
        </div>

        <div class="qf_item">
          <div class="tops">
            <span>35供10千伏</span>
          </div>
          <div class="bottoms">
            <span>1812</span>
          </div>
        </div>
      </div>
      <div class="yd_title">
        <img src="./img/sj.png" />
        <span>电量平衡分析</span>
      </div>
      <div class="jr_t_b">
        <div class="blocks">
          <img src="./img/j5.png" />
          <div class="rights">
            <div class="tops">
              <span class="span1">6274</span>
              <span class="span2">㎡</span>
            </div>
            <div class="bottoms">
              <span>全社会用电量</span>
            </div>
          </div>
        </div>
        <div class="blocks">
          <img src="./img/j4.png" />
          <div class="rights">
            <div class="tops">
              <span class="span1">xxxx</span>
            </div>
            <div class="bottoms">
              <span>10千伏电源发电量</span>
            </div>
          </div>
        </div>
      </div>
      <div class="jr_t_b">
        <div class="blocks">
          <img src="./img/j4.png" />
          <div class="rights">
            <div class="tops">
              <span class="span1">274</span>
              <span class="span2">kg/m³</span>
            </div>
            <div class="bottoms">
              <span>0.38千伏电源发电量</span>
            </div>
          </div>
        </div>
        <div class="blocks">
          <img src="./img/j4.png" />
          <div class="rights">
            <div class="tops">
              <span class="span1">741</span>
              <span class="span2">kg/m³</span>
            </div>
            <div class="bottoms">
              <span>10千伏网供电量</span>
            </div>
          </div>
        </div>
      </div>

      <div class="wgfh">
        <img src="./img/span1.png" />
        <span class="span1">10千伏网供电量</span>
        <div class="span2">
          <span>2</span>
        </div>
        <div class="span2">
          <span>2</span>
        </div>
        <div class="span2">
          <span>7</span>
        </div>
        <div class="span2">
          <span>4</span>
        </div>
        <span class="span3">xxx</span>
      </div>

      <div class="qf">
        <div class="qf_item">
          <div class="tops">
            <span>220供10千伏</span>
          </div>
          <div class="bottoms">
            <span>1350</span>
          </div>
        </div>

        <div class="qf_item">
          <div class="tops">
            <span>110供10千伏</span>
          </div>
          <div class="bottoms">
            <span>462</span>
          </div>
        </div>

        <div class="qf_item">
          <div class="tops">
            <span>35供10千伏</span>
          </div>
          <div class="bottoms">
            <span>1812</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ydfx",
  components: {},
  data() {
    return {

      origData:{},
      baseData:{},
      jidu: [
        {
          value: "",
          label: "2022",
        },
      ],
      jidu_value: "",
      jidu_show: "",

      nianfen: [
        {
          value: "",
          label: "3月-5月",
        },
      ],
      nianfen_value: "",
      nianfen_show: "",
      value1: "",
    };
  },
  beforeDestroy() {
    this.$bus.$off("sendId")
  },
  mounted() {
    this.watchId()
  },
  methods: {
    watchId(){
      let that = this
      that.$bus.$on("sendId", (e) => {
        that.origData = e;
        // console.log(11111+e)
        that.baseData={}
        that.getBaseData()
      })
    },
    async getBaseData(){
      await this.$axios
          .get(window.wgApiUrl + "/loadForecast/loadForecastUserStatus", {
            // .get("http://192.168.2.21:8025/rackAnalysis/rackAnalysisContactAnalysis", {
            params: {
              areaId:this.origData.id,
              // type:this.selectId?this.selectId:0
            },
          }).then(res=>{
            this.baseData=res.data.data[0]
          })
    },
    jiduClick(e) {
      this.jidu_show = e;
    },
    nianfenClick(e) {
      this.nianfen_show = e;
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
.ydfx {
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
  height: 883px;
  background: url("img/bg4.png") no-repeat !important;
  background-size: 100% 100% !important;
  margin-bottom: 20px;
}
.jr_block2 {
  height: 386px !important;
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
  margin-top: 8px;
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
.yd_title {
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  margin-top: 20px;
}
.yd_title > img {
  width: 30px;
  height: 30px;
  margin-left: 6px;
  margin-right: 2px;
  margin-top: -2px;
}

.yd_title > span {
  font-family: Source Han Sans CN;
  font-size: 14px;
  font-weight: normal;
  background: linear-gradient(to bottom, #ffffff, #6bedff);
  -webkit-background-clip: text;
  color: transparent;
}
</style>
<style scoped>
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
  font-size: 10px;
  font-weight: normal;
  line-height: 26px;
  letter-spacing: 0px;
  color: #d6d6d6;
}
</style>
<style scoped>
.wgfh {
  width: 364px;
  height: 49px;
  margin-left: 11px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  background: url("img/s_1.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.wgfh > img {
  width: 42px;
  height: 42px;
  margin-left: 10px;
  margin-right: 10px;
}

.wgfh > .span1 {
  font-family: Source Han Sans CN;
  font-size: 14px;
  font-weight: normal;
  color: #ffffff;
  margin-right: 20px;
}
.wgfh > .span2 {
  width: 22px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("img/span2.png") no-repeat !important;
  background-size: 100% 100% !important;
  margin-right: 8px;
}
.wgfh > .span2 > span {
  font-family: DIN Alternate;
  font-size: 22px;
  font-weight: bold;
  color: #ffffff;
}
.wgfh > .span3 {
  font-family: Source Han Sans CN;
  font-size: 14px;
  font-weight: normal;
  /* 文字三级 */
  color: #b3b3b3;
  margin-top: 4px;
}
</style>
<style scoped>
.qf {
  width: 355px;
  height: 45px;
  display: flex;
  justify-content: space-between;
  margin-left: 14px;
  margin-top: 16px;
  margin-bottom: 50px;
}
.qf_item {
  width: 109px;
  height: 45px;
  background: url("img/qf1.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.qf_item > .tops {
  width: 100%;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.qf_item > .tops > span {
  font-family: Source Han Sans CN;
  font-size: 12px;
  font-weight: normal;
  color: #ffffff;
}
.qf_item > .bottoms {
  width: 100%;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.qf_item > .bottoms > span {
  font-family: DIN Alternate;
  font-size: 20px;
  font-weight: bold;
  color: #fcfbff;
}
</style>
