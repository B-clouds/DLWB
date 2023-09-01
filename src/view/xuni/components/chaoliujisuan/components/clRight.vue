<template>
  <div class="clRight">
    <!-- 历史潮流计算-->
    <div class="jr_block">
      <div class="j_titles">
        <span class="span1">历史潮流计算</span>
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
              value-format="yyyy-MM-dd HH:mm:ss"
              @change="changeFn"
            >
            </el-date-picker>
          </div>
        </div>
      </div>
      <div class="j_table">
        <div class="j_t_tr jt1">
          <div class="blocks">
            <span class="span1">时间</span>
          </div>
          <div class="blocks">
            <span class="span1">对象</span>
          </div>
          <div class="blocks">
            <span class="span1">平均值</span>
          </div>
          <div class="blocks">
            <span class="span1">预警</span>
          </div>
        </div>
        <div class="j_t_table">
          <div
            class="j_t_tr"
            :class="index % 2 == 0 ? 'j_t_bg' : ''"
            v-for="(item, index) in dataList"
            :key="index"
          >
            <div class="blocks">
              <span class="span2">{{ item.sj.split(" ")[0] }}</span>
            </div>
            <div class="blocks">
              <span class="span2">{{ item.dx }}</span>
            </div>
            <div class="blocks">
              <span class="span2">{{ item.pjz }}</span>
            </div>
            <div class="blocks">
              <span class="span2">{{ item.yj }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "clRight",
  data() {
    return {
      value1: "",
      id: "",
      dataList: [],
    };
  },
  filters: {},
  watch: {
    colors(e) {},
  },
  mounted() {
    this.$bus.$on("leftOid", (e) => {
      this.id = e;
      console.log(e);
      let param = {
        areaId: "10000",
        // startTIme: "",
        // endTime: "",
      };
      this.load_flow_calculation(param);
    });
  },
  methods: {
    changeFn() {
      console.log(this.id, "-----=======-------");
      console.log("---时间-----", this.value1);

      if (this.value1) {
        let param = {
          areaId: "10000",
          // startTIme: this.value1[0],
          // endTime: this.value1[1],
        };
        this.load_flow_calculation(param);
      } else {
        let param = {
          areaId: "10000",
        };
        this.load_flow_calculation(param);
      }
    },
    async load_flow_calculation(param) {
      this.$axios
        .get(
          window.wgApiUrl +
            "/electricalCalculation/electricalCalculationHistoricalCurrent",
          {
            params: param,
          }
        )
        .then((res) => {
          if (res.status == 200) {
            if (res.data.msg == "query success") {
              console.log(res, "rse---------");

              this.dataList = res.data.data;
            }
          }
          // return resolve(res.data.data);
        })
        .catch((error) => {});
    },
  },
  beforeDestroy() {
    this.$bus.$off("leftOid");
  },
};
</script>

<style scoped>
.clRight {
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
  height: 358px;
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
<style scoped>
.j_table {
  position: absolute;
  top: 101px;
  width: 379px;
  height: 234px;
}
.j_t_tr {
  width: 100%;
  height: 39px;
  display: flex;
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
  height: 195px;
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