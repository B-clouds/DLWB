<template>
  <div class="zdyLeft">
    <div class="jcxx">
      <div class="j_titles">
        <span>基本信息</span>
      </div>
      <div class="kong"></div>

      <div class="jbBlock">
        <div class="jbLeft">
          <span>设备编码</span>
        </div>
        <div class="jbRight2">
          <input v-model="sbbm" placeholder="最大输入不超过10个字" />
        </div>
      </div>
      <div class="jbBlock">
        <div class="jbLeft">
          <span>设备名称</span>
        </div>
        <div class="jbRight2">
          <input v-model="sbmc" placeholder="最大输入不超过10个字" />
        </div>
      </div>
      <div class="jbBlock">
        <div class="jbLeft">
          <span>装机容量</span>
        </div>
        <div class="jbRight2">
          <input v-model="zjrl" placeholder="最大输入不超过10个字" />
        </div>
      </div>
      <div class="jbBlock">
        <div class="jbLeft">
          <span>额定功率</span>
        </div>
        <div class="jbRight2">
          <input v-model="edgl" placeholder="最大输入不超过10个字" />
        </div>
      </div>
      <div class="jbBlock">
        <div class="jbLeft">
          <span>设备尺寸</span>
        </div>
        <div class="jbRight2">
          <input v-model="sbcc" placeholder="最大输入不超过10个字" />
        </div>
      </div>
      <div class="jbBlock">
        <div class="jbLeft">
          <span>电压范围</span>
        </div>
        <div class="jbRight2">
          <input v-model="dydj" placeholder="最大输入不超过10个字" />
        </div>
      </div>
      <div class="jbBlock">
        <div class="jbLeft">
          <span>最大电流</span>
        </div>
        <div class="jbRight2">
          <input v-model="zddl" placeholder="最大输入不超过10个字" />
        </div>
      </div>
      <div class="jbBlock">
        <div class="jbLeft">
          <span>接线方式</span>
        </div>
        <div class="jbRight2">
          <input v-model="jxfs" placeholder="最大输入不超过10个字" />
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
          <span>设备高度</span>
        </div>
        <div class="jbRight2">
          <input v-model="sbgd" placeholder="最大输入不超过10个字" />
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
  </div>
</template>

<script>
import time from "@/utils/currentDate";
export default {
  name: "zdyLeft",
  data() {
    return {
      // ------------------------站房类型------------------
      zfType: [
        {
          value: "变电站",
          label: "变电站",
        },
        {
          value: "",
          label: "全部",
        },
      ],
      zfType_value: "",
      zfType_show: false,
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
      oam_value: "",
      oam_show: false,
      // ------------------------------电压--------------------------
      dianya: [
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
      dy_value: "",
      dy_show: "",
      // -------------------------------模型状态----------------------------------
      mx: [
        {
          value: "已创建",
          label: "已创建",
        },
        {
          value: "未创建",
          label: "未创建",
        },
        {
          value: "已发布",
          label: "已发布",
        },
      ],
      fbzt: "",
      mx_show: "",
      showUpdate: false,
      getSjc: "",
      sbbm: "",
      sbmc: "",
      zjrl: "",
      edgl: "",
      sbcc: "",
      dydj: "",
      zddl: "",
      jxfs: "",
      tyrq: "",
      tuiyrq: "",
      fbzt: "",
      sbgd: "",
      value1: "",
      value2: "",
      wwsblx: "储能箱",
    };
  },
  methods: {
    // 监听点击新增按钮
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
      let v = {
        TwinType: "MStation",
        ModifyType: "New",
        Data: {
          mxid: "CNX_01",
          oid: this.getSjc,
          ssdt: window.xianMing,
          sbbm: this.sbbm,
          sbmc: this.sbmc,
          zjrl: this.zjrl,
          edgl: this.edgl,
          sbcc: this.sbcc,
          dydj: this.dydj,
          zddl: this.zddl,
          jxfs: this.jxfs,
          tyrq: this.value1,
          tuiyrq: this.value2,
          fbzt: "已发布",
          sbgd: this.sbgd,
          sfxzdw: 1,
          MStationGroup: "",
          wwsblx: this.wwsblx,
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
      this.selectList = [];
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
      window.ue.interface.addSuccess = this.addSuccess;
      this.$emit("showKJ", 0);
    },
    addSuccess(e) {
      this.showUpdate = true;
      this.$emit("showKJ", 0);
      this.$bus.$emit("getKongJian", e);
      let that = this;
    },
    // 查询所有数据
    getDataList() {
      let v = {
        ModifyType: "Query",
        Oid: this.sjc,
      };
      let data = {
        functionName: "ModifyMStationGroupData",
        backFunctionName: "getArrDate",
        functionParameters: [
          {
            key: "ModifyMStationGroupData",
            value: JSON.stringify(v),
          },
        ],
      };
      this.selectList = [];
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
      window.ue.interface.getArrDate = this.getArrDate;
    },
    // 查询所有数据
    getArrDate(e) {
      let v = {
        TwinType: "MStation",
        ModifyType: "Update",
        Data: {
          mxid: "CNX_01",
          oid: this.getSjc,
          ssdt: window.xianMing,
          sbbm: this.sbbm,
          sbmc: this.sbmc,
          zjrl: this.zjrl,
          edgl: this.edgl,
          sbcc: this.sbcc,
          dydj: this.dydj,
          zddl: this.zddl,
          jxfs: this.jxfs,
          tyrq: this.value1,
          tuiyrq: this.value2,
          fbzt: "已发布",
          sbgd: this.sbgd,
          sfxzdw: 1,
          MStationGroup: e,
          wwsblx: this.wwsblx,
        },
      };
      let data = {
        functionName: "CustomGeneration",
        backFunctionName: "updSuccess",
        functionParameters: [
          {
            key: "CustomGeneration",
            value: JSON.stringify(v),
          },
        ],
      };
      this.selectList = [];
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
      window.ue.interface.updSuccess = this.updSuccess;
    },
    updateClick() {
      this.getDataList();
    },

    updSuccess() {
      this.$bus.$emit("getKongJian", e);
    },

    zfTypeClick(e) {
      this.zfType_show = e;
    },
    oamClick(e) {
      this.oam_show = e;
    },
    dyClick(e) {
      this.dy_show = e;
    },
    mxClick(e) {
      this.mx_show = e;
    },
    goNeiJing() {
      this.$emit("goNeiJing");
    },
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
  height: 978px;
  position: fixed;
  left: 11px;
  top: 125px;
}

.jcxx {
  width: 100%;
  height: 787px;
  background: url("img/jbg.png") no-repeat !important;
  background-size: 100% 100% !important;
  position: relative;
  margin-top: 120px;
}
.jcxx2 {
  width: 100%;
  height: 102px;
  background: url("img/jbg.png") no-repeat !important;
  background-size: 100% 100% !important;
  position: relative;
  margin-bottom: 18px;
}
.tou {
  width: 100%;
  height: 4px;
  opacity: 1;
  background: #237dde;
}
.t_titles {
  width: 100%;
  height: 46px;
  display: flex;
  align-items: center;
}
.t_titles > span {
  font-family: Source Han Sans SC;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  margin-left: 22px;
}
.t_input {
  width: 303px;
  height: 34px;
  margin-left: 22px;
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
.jbBtn2 {
  position: absolute;
  top: 1px;
  right: 114px !important;
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
