<template>
  <div class="zdyLeft">
    <div class="jcxx">
      <div class="j_titles">
        <span>电缆信息</span>
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
          <span>电缆名称</span>
        </div>
        <div class="jbRight2">
          <input v-model="sbmc" placeholder="最大输入不超过10个字" />
        </div>
      </div>
      <div class="jbBlock">
        <div class="jbLeft">
          <span>电压等级</span>
        </div>
        <div class="jbRight2">
          <input v-model="dydj" placeholder="最大输入不超过10个字" />
        </div>
      </div>
      <div class="jbBlock">
        <div class="jbLeft">
          <span>所属地市</span>
        </div>
        <div class="jbRight2">
          <input v-model="ssds" placeholder="最大输入不超过10个字" />
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
          <input v-model="tyrq" placeholder="最大输入不超过10个字" />
        </div>
      </div>
      <div class="jbBlock">
        <div class="jbLeft">
          <span>退运日期</span>
        </div>
        <div class="jbRight2">
          <input v-model="tuiyrq" placeholder="最大输入不超过10个字" />
        </div>
      </div>
      <div class="jbBlock">
        <div class="jbLeft">
          <span>模型状态</span>
        </div>
        <div class="jbRight2">
          <div class="inputs">
            <el-select v-model="fbzt" @visible-change="mxClick" placeholder="">
              <el-option
                v-for="item in mx"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <img v-show="!mx_show" src="./img/xia.png" />
            <img v-show="mx_show" src="./img/shang.png" />
          </div>
        </div>
      </div>
      <div class="jbBlock">
        <div class="jbLeft">
          <span>电缆长度</span>
        </div>
        <div class="jbRight2">
          <input v-model="cd" placeholder="最大输入不超过10个字" />
        </div>
      </div>
      <div class="jbBlock">
        <div class="jbBtn jbBtn2" @click="goNeiJing">
          <span>内景视角</span>
        </div>
        <div class="jbBtn" @click="updateClick">
          <span>更新</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "zdyLeft",
  data() {
    return {
      sbbm: "", //设备编码
      sbmc: "", //电缆名称
      dydj: "", //电压等级
      ssds: "", //所属地市
      tyrq: "", //投运日期
      tuiyrq: "", //退运日期
      cd: "", //电缆长度
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
      ywdw: "",
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
          value: "",
          label: "全部",
        },
      ],
      fbzt: "",
      mx_show: "",

      cfObj: {},
    };
  },
  mounted() {
    let that = this;
    that.$bus.$on("hangObjDLGL", (e) => {
      that.cfObj = e;
      that.sbbm = e.sbbm;
      that.sbmc = e.sbmc;
      that.dydj = e.dydj;
      that.ssds = e.ssds;
      that.ywdw = e.ywdw;
      that.tyrq = e.tyrq;
      that.tuiyrq = e.tuiyrq;
      that.fbzt = e.fbzt;
      that.cd = e.cd;
    });
  },
  methods: {
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
    updateClick() {
      // 编辑数据
      let newData = this.cfObj;
      newData.sbbm = this.sbbm;
      newData.sbmc = this.sbmc;
      newData.dydj = this.dydj;
      newData.ssds = this.ssds;
      newData.ywdw = this.ywdw;
      newData.tyrq = this.tyrq;
      newData.tuiyrq = this.tuiyrq;
      newData.fbzt = this.fbzt;
      newData.cd = this.cd;
      let v = {
        TwinType: "CableLine",
        ModifyType: "Update",
        Data: newData,
      };
      let data = {
        functionName: "CustomGeneration",
        functionParameters: [
          {
            key: "CustomGeneration",
            value: JSON.stringify(v),
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
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
  height: 648px;
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
