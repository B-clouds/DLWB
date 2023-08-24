<template>
  <div class="zdyLeft">
    <div class="jcxx">
      <div class="j_titles">
        <span>{{ titles }}基本信息</span>
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
      <!-- 设备尺寸-->
      <div class="jbBlock">
        <div class="jbLeft">
          <span>设备尺寸</span>
        </div>
        <div class="jbRight2">
          <input v-model="sscc" placeholder="最大输入不超过10个字" />
        </div>
      </div>
      <!-- 电压范围-->
      <div class="jbBlock">
        <div class="jbLeft">
          <span>电压范围</span>
        </div>
        <div class="jbRight2">
          <input v-model="dyfv" placeholder="最大输入不超过10个字" />
        </div>
      </div>
      <!-- 最大电流-->
      <div class="jbBlock">
        <div class="jbLeft">
          <span>最大电流</span>
        </div>
        <div class="jbRight2">
          <input v-model="zddl" placeholder="最大输入不超过10个字" />
        </div>
      </div>
      <!-- 接线方式-->
      <div class="jbBlock">
        <div class="jbLeft">
          <span>接线方式</span>
        </div>
        <div class="jbRight2">
          <input v-model="jxfs" placeholder="最大输入不超过10个字" />
        </div>
      </div>
      <!-- 投运日期-->
      <div class="jbBlock">
        <div class="jbLeft">
          <span>投运日期</span>
        </div>
        <div class="jbRight2">
          <input v-model="tyrq" placeholder="最大输入不超过10个字" />
        </div>
      </div>
      <!-- 退运日期-->
      <div class="jbBlock">
        <div class="jbLeft">
          <span>退运日期</span>
        </div>
        <div class="jbRight2">
          <input v-model="tuiyrq" placeholder="最大输入不超过10个字" />
        </div>
      </div>
      <!-- 模型状态-->
      <div class="jbBlock">
        <div class="jbLeft">
          <span>模型状态</span>
        </div>
        <div class="jbRight2">
          <div class="inputs">
            <el-select v-model="fbzt" @visible-change="dyClick" placeholder="">
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
        </div>
      </div>
      <!-- 设备高度-->
      <div class="jbBlock">
        <div class="jbLeft">
          <span>设备高度</span>
        </div>
        <div class="jbRight2">
          <input v-model="sbgd" placeholder="最大输入不超过10个字" />
        </div>
      </div>
      <div class="jbBlock">
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
      sbmc: "",
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
      fbzt: "",
      dy_show: "",
      sscc: "",
      sbbm: "", //设备编码
      zjrl: "", //装机容量
      edgl: "", //额定功率
      sbcc: "", //设备尺寸
      dyfv: "", //电压范围
      zddl: "", //最大电流
      jxfs: "", //接线方式
      tyrq: "", //投运日期
      tuiyrq: "", //退运日期
      sbgd: "", //设备高度
      cfObj: "",
      titles: "", //显示数据类型
    };
  },
  mounted() {
    let that = this;
    that.$bus.$on("hangObjWWSS", (e) => {
      that.cfObj = e;
      that.titles = e.wwsblx;
      that.sbbm = e.sbbm;
      that.sscc = e.sscc;
      that.sbmc = e.sbmc;
      that.zjrl = e.zjrl;
      that.edgl = e.edgl;
      that.sbcc = e.sbcc;
      that.dyfv = e.dyfv;
      that.zddl = e.zddl;
      that.jxfs = e.jxfs;
      that.tyrq = e.tyrq;
      that.tuiyrq = e.tuiyrq;
      that.fbzt = e.fbzt;
      that.sbgd = e.sbgd;
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
    updateClick() {
      let newData = this.cfObj;
      newData.sbbm = this.sbbm;
      newData.sbmc = this.sbmc;
      newData.zjrl = this.zjrl;
      newData.edgl = this.edgl;
      newData.sbcc = this.sbcc;
      newData.dyfv = this.dyfv;
      newData.zddl = this.zddl;
      newData.jxfs = this.jxfs;
      newData.tyrq = this.tyrq;
      newData.tuiyrq = this.tuiyrq;
      newData.fbzt = this.fbzt;
      newData.sbgd = this.sbgd;
      let v = {
        TwinType: "MStation",
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
      this.selectList = [];
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
  height: 800px;
  position: fixed;
  left: 11px;
  top: 125px;
}

.jcxx {
  width: 100%;
  height: 100%;
  padding: 10px;
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

.jbBlock1 > .jbBtn {
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
.jbBlock1 > .jbBtn > span {
  font-family: Source Han Sans SC;
  font-size: 16px;
  font-weight: normal;
  color: #e2e2e2;
}
.jbBlock1 > .jbLeft {
  width: 97px;
  height: 100%;
  display: flex;
  align-items: center;
}
.jbBlock1 > .jbLeft > span {
  font-family: Source Han Sans SC;
  font-size: 14px;
  font-weight: normal;
  color: #ffffff;
  margin-left: 21px;
}
.jbBlock1 > .jbRight {
  width: 228px;
  height: 100%;
  display: flex;
  align-items: center;
  background: url("img/jbInput.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.jbBlock1 > .jbRight > span {
  font-family: Source Han Sans SC;
  font-size: 14px;
  font-weight: normal;
  color: #ada9a9;
  margin-left: 11px;
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
.inputs1 > img {
  position: absolute;
  top: 10px;
  right: 8px;
  width: 14px;
  height: 8px;
}
</style>
