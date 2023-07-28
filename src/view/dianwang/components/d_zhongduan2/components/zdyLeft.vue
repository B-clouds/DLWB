<template>
  <div class="zdyLeft">
    <div class="jcxx">
      <div class="j_titles">
        <span>管廊基本信息</span>
      </div>
      <div class="kong"></div>

      <div class="jbBlock">
        <div class="jbLeft">
          <span>管廊名称</span>
        </div>
        <div class="jbRight2">
          <input v-model="sbmc" placeholder="最大输入不超过10个字" />
        </div>
      </div>
      <div class="jbBlock">
        <div class="jbLeft">
          <span>运维单位</span>
        </div>
        <div class="jbRight2">
          <div class="inputs">
            <el-select v-model="ywdw" @visible-change="oamClick" placeholder="">
              <el-option
                v-for="item in oam"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <img v-show="!oam_show" src="./img/xia.png" />
            <img v-show="oam_show" src="./img/shang.png" />
          </div>
        </div>
      </div>
      <div class="jbBlock">
        <div class="jbLeft">
          <span>投运日期</span>
        </div>
        <div class="jbRight2">
          <div class="inputs">
            <el-date-picker
              v-model="value1"
              value-format="yyyy-MM-dd"
              type="date"
              placeholder="选择投运日期"
            >
            </el-date-picker>
          </div>
        </div>
      </div>
      <div class="jbBlock">
        <div class="jbLeft">
          <span>退运日期</span>
        </div>
        <div class="jbRight2">
          <div class="inputs">
            <el-date-picker
              v-model="value2"
              value-format="yyyy-MM-dd"
              type="date"
              placeholder="选择退运日期"
            >
            </el-date-picker>
          </div>
        </div>
      </div>
      <div class="jbBlock">
        <div class="jbLeft">
          <span>数据来源</span>
        </div>
        <div class="jbRight2">
          <input v-model="sjly" placeholder="最大输入不超过10个字" />
        </div>
      </div>
      <!-- 截面类型 -->
      <div class="jbBlock">
        <div class="jbLeft">
          <span>截面类型</span>
        </div>
        <div class="jbRight2">
          <div class="inputs">
            <el-select
              v-model="jmlx"
              @visible-change="oamClick2"
              placeholder=""
            >
              <el-option
                v-for="item in oam2"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <img v-show="!oam_show2" src="./img/xia.png" />
            <img v-show="oam_show2" src="./img/shang.png" />
          </div>
        </div>
      </div>
      <!-- 电压等级 -->
      <div class="jbBlock">
        <div class="jbLeft">
          <span>电压等级</span>
        </div>
        <div class="jbRight2">
          <div class="inputs">
            <el-select v-model="dydj" @visible-change="dyClick" placeholder="">
              <el-option
                v-for="item in dy"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <img v-show="!dy_show" src="./img/xia.png" />
            <img v-show="dy_show" src="./img/shang.png" />
          </div>
        </div>
      </div>
      <div class="jbBlock">
        <div class="jbLeft">
          <span>管廊高度</span>
        </div>
        <div class="jbRight2">
          <input v-model="glgd" placeholder="最大输入不超过10个字" />
        </div>
      </div>
      <div class="jbBlock">
        <div class="jbLeft">
          <span>管廊宽度</span>
        </div>
        <div class="jbRight2">
          <input v-model="glkd" placeholder="最大输入不超过10个字" />
        </div>
      </div>

      <div class="jbBlock">
        <div class="jbBtn" v-show="!showUpdate" @click="addClick">
          <span>新增</span>
        </div>
        <div class="jbBtn" v-show="showUpdate" @click="updateClick">
          <span>更新</span>
        </div>
      </div>
    </div>
    <!-- 解绑提示弹框-->
    <div class="zhezhao" v-show="showTSTK6">
      <div class="z_delete">
        <div class="z_d_block">
          <img class="imgs" src="./img/jj2.png" />
          <span>当前起始点为同一个点，无法保存；请核实后再进行该操作</span>
        </div>
        <div class="z_btn2">
          <div class="z_blocks" @click="closeTSTK6">
            <span>确认</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import time from "@/utils/currentDate";
export default {
  name: "zdyLeft",
  data() {
    return {
      //  ----------------------------------------- 运维单位
      oam: [
        {
          value: "国网雄县供电公司",
          label: "国网雄县供电公司",
        },
        {
          value: "",
          label: "全部",
        },
      ],
      ywdw: "",
      oam_show: false,
      sbmc: "", //管廊名称
      value1: "", //投运日期
      value2: "", //退运日期
      sjly: "", //数据来源
      getSjc: "", //存放oid
      showUpdate: false,
      qdsb: "", //存放起点ID
      qdsbmc: "", //存储起点名称
      qdsbjm: "", //存储起点截面类型
      qdsb_Loc: "", //存储起点位置
      zdsb: "", //存放终点ID
      zdsbmc: "", //存储终点名称
      zdsbjm: "", //存储终点截面类型
      zdsb_Loc: "", //存储终点位置
      showBtn: false,
      glgd: "", //管廊高度
      glkd: "", //管廊宽度
      // ---------------------------截面类型-------------------------------
      oam2: [
        {
          value: "3*2*1",
          label: "3*2*1",
        },
        {
          value: "1*1*1",
          label: "1*1*1",
        },
        {
          value: "1*1*0",
          label: "1*1*0",
        },
        {
          value: "",
          label: "全部",
        },
      ],
      jmlx: "",
      oam_show2: false,

      // 电压等级
      dy: [
        {
          value: "交流1000kV",
          label: "1000kV",
        },
        {
          value: "交流500kV",
          label: "500kV",
        },
        {
          value: "交流220kV",
          label: "220kV",
        },
        {
          value: "交流110kV",
          label: "110kV",
        },
        {
          value: "交流35kV",
          label: "35kV",
        },
        {
          value: "交流10kV",
          label: "10kV",
        },
        {
          value: "交流0.4kV",
          label: "0.4kV",
        },
        {
          value: "",
          label: "全部",
        },
      ],
      dydj: "",
      dy_show: "",
      cfQD: "",
      cfZD: "",
      showTSTK6: false,
    };
  },
  mounted() {
    let that = this;
    that.$bus.$on("qdId", (e) => {
      that.cfQD = e.oid;
      that.qdsb = e.oid;
      that.qdsbmc = e.sbmc;
      that.qdsbjm = e.jmlx;
      that.qdsb_Loc = e.x + "," + e.y;
    });
    that.$bus.$on("zdId", (e) => {
      that.cfZD = e.oid;
      that.zdsb = e.oid;
      that.zdsbmc = e.sbmc;
      that.zdsbjm = e.jmlx;
      that.zdsb_Loc = e.x + "," + e.y;
    });
  },
  deactivated() {
    this.showUpdate = false;
    this.cfQD = "";
    this.cfZD = "";
  },
  methods: {
    closeTSTK6() {
      this.showTSTK6 = false;
    },
    oamClick(e) {
      this.oam_show = e;
    },
    oamClick2(e) {
      this.oam_show2 = e;
    },
    dyClick(e) {
      this.dy_show = e;
    },
    addClick() {
      let times = time.getCurrentDate();
      let sjc =
        times.year +
        "-" +
        times.month +
        "-" +
        times.date +
        " " +
        times.hours +
        ":" +
        times.minutes +
        ":" +
        times.seconds;
      let sjc2 = Date.parse(sjc) / 1000;
      this.getSjc = "zdy" + sjc2;
      // 发送消息
      let v = {
        TwinType: "CablePGS",
        ModifyType: "New",
        Data: {
          oid: this.getSjc,
          sbmc: this.sbmc,
          tyrq: this.value1,
          tuiyrq: this.value2,
          ywdw: this.ywdw,
          jmlx: this.jmlx,
          dydj: this.dydj,
          glgd: this.glgd,
          glkd: this.glkd,
          ssdt: window.xianMing,
          fbzt: "已发布",
          sfxzdw: 1,
          zdycj: 1,
          qdsb: "",
          qdsbmc: "",
          qdsbjm: "",
          qdsb_Loc: "",
          zdsb: "",
          zdsbmc: "",
          zdsbjm: "",
          zdsb_Loc: "",
        },
      };
      let data = {
        functionName: "CustomGeneration",
        backFunctionName: "addSuccess",
        functionParameters: [
          {
            key: "CustomGeneration",
            value: JSON.stringify(v),
          },
        ],
      };

      ue.interface.broadcast("PSAPI", JSON.stringify(data));
      window.ue.interface.addSuccess = this.addSuccess;
    },
    addSuccess(e) {
      this.showUpdate = true;
      this.$emit("showZR");
    },
    updateClick() {
      let v = {
        TwinType: "CablePGS",
        ModifyType: "Update",
        Data: {
          oid: this.getSjc,
          sbmc: this.sbmc,
          tyrq: this.value1,
          tuiyrq: this.value2,
          ywdw: this.ywdw,
          sjly: this.sjly,
          jmlx: this.jmlx,
          dydj: this.dydj,
          glgd: this.glgd,
          glkd: this.glkd,
          ssdt: window.xianMing,
          fbzt: "已发布",
          sfxzdw: 1,
          zdycj: 1,
          qdsb: this.qdsb,
          zdsb: this.zdsb,
          qdsbmc: this.qdsbmc,
          qdsbjm: this.qdsbjm,
          qdsb_Loc: this.qdsb_Loc,
          zdsbmc: this.zdsbmc,
          zdsbjm: this.zdsbjm,
          zdsb_Loc: this.zdsb_Loc,
        },
      };
      let data = {
        functionName: "CustomGeneration",
        backFunctionName: "updateSuccess",
        functionParameters: [
          {
            key: "CustomGeneration",
            value: JSON.stringify(v),
          },
        ],
      };
      if (this.cfQD != this.cfZD) {
        ue.interface.broadcast("PSAPI", JSON.stringify(data));
      } else {
        this.showTSTK6 = true;
      }
      window.ue.interface.updateSuccess = this.updateSuccess;
    },
    updateSuccess(e) {},
  },
};
</script>
<style>
/* 下拉框样式自定义 */
.el-select {
  width: 100% !important;
  height: 100% !important;
}
.inputs .el-select > .el-input > .el-input__inner {
  height: 32px !important;
  border-radius: 0 !important;
  background-color: transparent !important;
  border: 0 !important;
  font-family: SourceHanSansSC-Regular !important;
  font-size: 14px !important;
  font-weight: normal !important;
  line-height: 32px !important;
  margin-left: 4px;
  color: #ffffff !important;
}
.el-scrollbar__wrap {
  margin: 0 !important;
}
.el-scrollbar__wrap::-webkit-scrollbar {
  display: none; /*隐藏滚动条*/
}
</style>
<style scoped>
.zdyLeft {
  width: 346px;
  height: 576px;
  position: fixed;
  left: 11px;
  top: 125px;
}

.jcxx {
  width: 100%;
  height: 100%;
  background: url("img/jbg.png") no-repeat !important;
  background-size: 100% 100% !important;
  position: relative;
}

.j_titles {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 40px;
  background: url("img/jtitle.png") no-repeat !important;
  background-size: 100% 100% !important;
  display: flex;
  align-items: center;
}
.j_titles > span {
  font-family: Source Han Sans SC;
  font-size: 20px;
  font-weight: normal;
  color: #ffffff;
  margin-left: 18px;
}
</style>
<style scoped>
.kong {
  width: 100%;
  height: 54px;
}
.jbBlock {
  width: 100%;
  height: 34px;
  display: flex;
  margin-bottom: 18px;
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
  width: 97px;
  height: 100%;
  display: flex;
  align-items: center;
}
.jbBlock > .jbLeft > span {
  font-family: Source Han Sans SC;
  font-size: 14px;
  font-weight: normal;
  color: #ffffff;
  margin-left: 21px;
}
.jbBlock > .jbRight {
  width: 228px;
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
  width: 228px;
  height: 100%;
  background: url("img/jbInput2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
</style>
<style scoped>
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
.zhezhao {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(1, 11, 23, 0.6);
}
</style>
<style scoped>
.z_delete {
  width: 348px;
  height: 133px;
  background: url("img/de.png") no-repeat;
  background-size: 100% 100%;
  position: relative;
}
.z_d_block {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
}
.z_d_block > img {
  width: 22px;
  height: 20px;
  margin-left: 19px;
  margin-right: 4px;
}
.z_d_block > span {
  font-family: SourceHanSansSC-Regular;
  font-size: 18px;
  font-weight: normal;
  color: #ffffff;
}
.z_tankuang {
  width: 348px;
  height: 174px;
  background: url("img/tk.png") no-repeat;
  background-size: 100% 100%;
  position: relative;
}
.z_tankuang2 {
  height: 218px !important;
  background: url("img/tk2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.z_cha {
  width: 22px;
  height: 22px;
  position: absolute;
  top: 24px;
  right: 10px;
  background: url("img/cha.png") no-repeat !important;
  background-size: 100% 100% !important;
  cursor: pointer;
}
.z_tankuang > .z_title {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  margin-top: 18px;
}
.z_tankuang > .z_title > span {
  font-family: YouSheBiaoTiHei;
  font-size: 26px;
  font-weight: normal;
  letter-spacing: 4px;
  color: #e8efff;
  margin-left: 30px;
}
.z_tankuang > .z_blockss {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
}
.z_tankuang > .z_blockss > span {
  font-family: AlibabaPuHuiTi_2_55_Regular;
  font-size: 13px;
  font-weight: normal;
  color: #ffe856;
  margin-left: 26px;
}
.z_tankuang > .z_input {
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.z_tankuang > .z_input > .lefts {
  width: 55px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 26px;
  margin-right: 13px;
}
.z_tankuang > .z_input > .lefts > span {
  font-family: AlibabaPuHuiTi_2_55_Regular;
  font-size: 13px;
  font-weight: normal;
  color: #ffffff;
}
.z_tankuang > .z_input > .rights {
  width: 216px;
  height: 32px;
  background: url("img/inputs.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.z_btn {
  width: 174px;
  height: 33px;
  position: absolute;
  right: 17px;
  bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.z_btn > .z_blocks {
  width: 81px;
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: url("img/tbn.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.z_btn > .z_blocks > span {
  font-family: SourceHanSansSC-Regular;
  font-size: 16px;
  font-weight: normal;
  color: #e2e2e2;
}

.z_btn2 {
  width: 174px;
  height: 33px;
  position: absolute;
  right: 17px;
  bottom: 17px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.z_btn2 > .z_blocks {
  width: 81px;
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: url("img/tbn.png") no-repeat !important;
  background-size: 100% 100% !important;
  margin-left: 10px;
}
.z_btn2 > .z_blocks > span {
  font-family: SourceHanSansSC-Regular;
  font-size: 16px;
  font-weight: normal;
  color: #e2e2e2;
}
.addUpdTK {
  width: 347px;
  height: 300px;
  background: url("img/adtk.png") no-repeat !important;
  background-size: 100% 100% !important;
  position: absolute;
}
.tk_title {
  width: 100%;
  height: 40px;
  margin-top: 18px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  z-index: 1;
}
.tk_title > span {
  margin-left: 31px;
  font-family: YouSheBiaoTiHei;
  font-size: 26px;
  font-weight: normal;
  letter-spacing: 4px;
  color: #e8efff;
  z-index: 1;
}

.tk_blocks {
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 12px;
}
.tk_blocks > .rights {
  width: 216px;
  height: 32px;
  margin-right: 38px;
  margin-left: 16px;
}
.tk_blocks > .rights > .r1 {
  width: 100%;
  height: 100%;
  background: url("img/r1.png") no-repeat !important;
  background-size: 100% 100% !important;
  display: flex;
  align-items: center;
}
.tk_blocks > .rights > .r1 > span {
  font-family: AlibabaPuHuiTi_2_55_Regular;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 0px;
  color: #ffffff;
  margin-left: 10px;
}
.tk_blocks > .rights > .r2 {
  width: 100%;
  height: 100%;
  position: relative;
  background: url("img/r2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.tk_blocks > span {
  font-family: AlibabaPuHuiTi_2_55_Regular;
  font-size: 13px;
  font-weight: normal;
  letter-spacing: 0px;
  color: #ffffff;
}
</style>

<style scoped>
.inputs {
  width: 100%;
  height: 100%;
  /* background: url("img/ip.png") no-repeat !important;
  background-size: 100% 100% !important; */
  position: relative;
  /* background: rgba(25, 61, 112, 0.8); */
  box-sizing: border-box;
  /* border: 1px solid #3876b6; */
}
.inputs > img {
  position: absolute;
  top: 12px;
  right: 8px;
  width: 14px;
  height: 8px;
  z-index: 1;
}
</style>
<style>
/* 下拉框样式自定义 */
.el-select {
  width: 100% !important;
  height: 100% !important;
}
.inputs .el-select > .el-input > .el-input__inner {
  height: 32px !important;
  border-radius: 0 !important;
  background-color: transparent !important;
  border: 0 !important;
  font-family: SourceHanSansSC-Regular !important;
  font-size: 14px !important;
  font-weight: normal !important;
  line-height: 32px !important;
  margin-left: 4px;
  color: #ffffff !important;
  z-index: 9;
}
.el-scrollbar__wrap {
  margin: 0 !important;
}
</style>
<style scoped>
.top-scroll {
  width: 100%;
  overflow-x: auto;
}
.top-scroll-content {
  /* 高度不设置的话滚动条出不来 */
  height: 6px;
}
</style>
<style scoped>
.z_delete {
  width: 348px;
  height: 133px;
  background: url("img/de.png") no-repeat;
  background-size: 100% 100%;
  position: relative;
}
.z_d_block {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
}
.z_d_block > img {
  width: 22px;
  height: 20px;
  margin-left: 19px;
  margin-right: 4px;
}
.z_d_block > span {
  font-family: SourceHanSansSC-Regular;
  font-size: 18px;
  font-weight: normal;
  color: #ffffff;
}
.z_tankuang {
  width: 348px;
  height: 174px;
  background: url("img/tk.png") no-repeat;
  background-size: 100% 100%;
  position: relative;
}
.z_tankuang2 {
  height: 218px !important;
  background: url("img/tk2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.z_tankuang > .z_cha {
  width: 22px;
  height: 22px;
  position: absolute;
  top: 24px;
  right: 10px;
  background: url("img/cha.png") no-repeat !important;
  background-size: 100% 100% !important;
  cursor: pointer;
}
.z_tankuang > .z_title {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  margin-top: 18px;
}
.z_tankuang > .z_title > span {
  font-family: YouSheBiaoTiHei;
  font-size: 26px;
  font-weight: normal;
  letter-spacing: 4px;
  color: #e8efff;
  margin-left: 30px;
}
.z_tankuang > .z_blockss {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
}
.z_tankuang > .z_blockss > span {
  font-family: AlibabaPuHuiTi_2_55_Regular;
  font-size: 13px;
  font-weight: normal;
  color: #ffe856;
  margin-left: 26px;
}
.z_tankuang > .z_input {
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.z_tankuang > .z_input > .lefts {
  width: 55px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 26px;
  margin-right: 13px;
}
.z_tankuang > .z_input > .lefts > span {
  font-family: AlibabaPuHuiTi_2_55_Regular;
  font-size: 13px;
  font-weight: normal;
  color: #ffffff;
}
.z_tankuang > .z_input > .rights {
  width: 216px;
  height: 32px;
  background: url("img/inputs.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.z_btn {
  width: 174px;
  height: 33px;
  position: absolute;
  right: 17px;
  bottom: 17px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.z_btn > .z_blocks {
  width: 81px;
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: url("img/tbn.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.z_btn > .z_blocks > span {
  font-family: SourceHanSansSC-Regular;
  font-size: 16px;
  font-weight: normal;
  color: #e2e2e2;
}

.z_btn2 {
  width: 174px;
  height: 33px;
  position: absolute;
  right: 17px;
  bottom: 17px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.z_btn2 > .z_blocks {
  width: 81px;
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: url("img/tbn.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.z_btn2 > .z_blocks > span {
  font-family: SourceHanSansSC-Regular;
  font-size: 16px;
  font-weight: normal;
  color: #e2e2e2;
}
</style>
