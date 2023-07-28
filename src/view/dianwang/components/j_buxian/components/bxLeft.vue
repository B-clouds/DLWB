<template>
  <div class="zdyLeft">
    <div class="jcxx">
      <div class="j_titles">
        <span>导线基本信息</span>
      </div>
      <div class="kong"></div>
      <div class="b_b_b">
        <div class="jbBlock">
          <div class="jbLeft">
            <span>导线名称</span>
          </div>
          <div class="jbRight2">
            <input v-model="sbmc" placeholder="最大输入不超过10个字" />
          </div>
        </div>
        <div class="jbBlock">
          <div class="jbLeft">
            <span>导线类型</span>
          </div>
          <div class="jbRight2">
            <div class="inputs">
              <el-select
                v-model="dxlx_value"
                @visible-change="dxlxClick"
                placeholder=""
              >
                <el-option
                  v-for="item in dxlx"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <img v-show="!dxlx_show" src="./img/xia.png" />
              <img v-show="dxlx_show" src="./img/shang.png" />
            </div>
          </div>
        </div>
        <div class="jbBlock">
          <div class="jbLeft">
            <span>所属线路</span>
          </div>
          <div class="jbRight2">
            <div class="inputs">
              <el-select
                v-model="ssxl_value"
                @visible-change="ssxlClick"
                placeholder=""
              >
                <el-option
                  v-for="item in ssxl"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <img v-show="!ssxl_show" src="./img/xia.png" />
              <img v-show="ssxl_show" src="./img/shang.png" />
            </div>
          </div>
        </div>

        <div class="jbBlock">
          <div class="jbLeft">
            <span>电压等级</span>
          </div>
          <div class="jbRight2">
            <div class="inputs">
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
          </div>
        </div>
        <div class="jbBlock">
          <div class="jbLeft">
            <span>起点类型</span>
          </div>
          <div class="jbRight">
            <span>{{ qsgtlx }}</span>
          </div>
        </div>

        <div class="jbBlock">
          <div class="jbLeft">
            <span>起点名称</span>
          </div>
          <div class="jbRight">
            <span>
              {{ qsgtmc }}
            </span>
          </div>
        </div>
        <div class="jbBlock">
          <div class="jbLeft">
            <span>起点位置</span>
          </div>
          <div class="jbRight">
            <span>
              {{ Str_qsgtLoc }}
            </span>
          </div>
        </div>
        <div class="jbBlock">
          <div class="jbLeft">
            <span>终点类型</span>
          </div>
          <div class="jbRight">
            <span>
              {{ zzgtlx }}
            </span>
          </div>
        </div>

        <div class="jbBlock">
          <div class="jbLeft">
            <span>终点名称</span>
          </div>
          <div class="jbRight">
            <span>
              {{ zzgtmc }}
            </span>
          </div>
        </div>
        <div class="jbBlock">
          <div class="jbLeft">
            <span>终点位置</span>
          </div>
          <div class="jbRight">
            <span>
              {{ Str_zzgtLoc }}
            </span>
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
            <span>所属地市</span>
          </div>
          <div class="jbRight2">
            <div class="inputs">
              <el-select
                v-model="ssds"
                @visible-change="hlslClick"
                placeholder=""
              >
                <el-option
                  v-for="item in hlsl"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <img v-show="!hlsl_show" src="./img/xia.png" />
              <img v-show="hlsl_show" src="./img/shang.png" />
            </div>
          </div>
        </div>
        <div class="jbBlock">
          <div class="jbLeft">
            <span>运维单位</span>
          </div>
          <div class="jbRight2">
            <div class="inputs">
              <el-select
                v-model="ywdw"
                @visible-change="oamClick"
                placeholder=""
              >
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
            <span>导线长度</span>
          </div>
          <div class="jbRight2">
            <input v-model="dxcd" placeholder="最大输入不超过10个字" />
          </div>
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
      city: [
        {
          value: "雄安",
          label: "雄安",
        },
        {
          value: "",
          label: "全部",
        },
      ],
      city_value: "",
      city_show: false,
      // ---------------------------导线类型-----------------------------
      dxlx: [
        {
          value: "",
          label: "/",
        },
      ],
      dxlx_value: "",
      dxlx_show: false,
      // ---------------------------------所属线路-------------------------
      ssxl: [
        {
          value: "",
          label: "/",
        },
      ],
      ssxl_value: "",
      ssxl_show: false,
      //  ----------------------------------------- 运维单位--------------------
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
      // ----------------------------起点类型-------------------------------
      qsgtlx: "杆塔",
      qsgt: "", //起点间隔ID
      // 起点名称
      qsgtmc: "",
      // 起点位置
      Str_qsgtLoc: "",
      // ------------------------------终点类型------------------------------
      zzgt: "", //终点间隔ID
      zzgtlx: "杆塔",
      // 终点名称
      zzgtmc: "",
      // 终点位置
      Str_zzgtLoc: "",
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
          value: "",
          label: "全部",
        },
      ],
      dy_value: "",
      dy_show: "",
      // ---------导线长度-----------
      dxcd: "",
      // ------------------------------回路数量--------------------------
      hlsl: [
        {
          value: "",
          label: "/",
        },
      ],
      ssds: "",
      hlsl_show: "",
      showUpdate: false,

      getSjc: "", //存放oid
      sbbm: "", //杆塔编码
      sbmc: "", //杆塔名称
      gg: "", //杆塔高度
      tyrq: "", //投运日期
      tuiyrq: "", //退运日期
      value1: "", //投运日期
      value2: "", //退运日期
    };
  },
  deactivated() {
    this.showUpdate = false;
  },
  mounted() {
    let that = this;
    that.$bus.$on("swqds", (e) => {
      that.qsgtmc = e.sbmc;
      that.Str_qsgtLoc = e.x + "," + e.y;
    });
    that.$bus.$on("swzds", (e) => {
      that.zzgtmc = e.sbmc;
      that.Str_zzgtLoc = e.x + "," + e.y;
    });
    that.$bus.$on("setQsgt", (e) => {
      that.qsgt = e.oid;
    });
    that.$bus.$on("setZzgt", (e) => {
      that.zzgt = e.oid;
    });
    that.$bus.$on("goUpdate", (e) => {
      that.updateClick();
    });
  },
  methods: {
    cityClick(e) {
      this.city_show = e;
    },
    oamClick(e) {
      this.oam_show = e;
    },
    dyClick(e) {
      this.dy_show = e;
    },
    hlslClick(e) {
      this.hlsl_show = e;
    },

    dxlxClick(e) {
      this.dxlx_show = e;
    },
    ssxlClick(e) {
      this.ssxl_show = e;
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
        TwinType: "Line",
        ModifyType: "New",
        Data: {
          oid: this.getSjc,
          sbmc: this.sbmc,
          dxlx: this.dxlx_value,
          ssxl: this.ssxl_value,
          dydj: this.dy_value,
          zzgt: this.zzgt,
          qsgt: this.qsgt,
          qsgtlx: this.qsgtlx,
          qsgtmc: this.qsgtmc,
          Str_qsgtLoc: this.Str_qsgtLoc,
          zzgtlx: this.zzgtlx,
          zzgtmc: this.zzgtmc,
          Str_zzgtLoc: this.Str_zzgtLoc,
          tyrq: this.value1,
          tuiyrq: this.value2,
          ywdw: this.ywdw,
          zdycj: 1,
          dxcd: this.dxcd,
          fbzt: "已发布",
          ssdt: window.xianMing,
          sfxzdw: 1,
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
    },
    addSuccess(e) {
      this.showUpdate = true;
      this.$emit("showKJ", true);
      let v2 = { ChooseType: "LineLinkEditer", value: "true" };
      let datas = {
        functionName: "Sundry",
        functionParameters: [
          {
            key: "Sundry",
            value: JSON.stringify(v2), //切换类型
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(datas));
    },
    updateClick() {
      // 发送消息
      let v = {
        TwinType: "Line",
        ModifyType: "Update",
        Data: {
          oid: this.getSjc,
          sbmc: this.sbmc,
          dxlx: this.dxlx_value,
          ssxl: this.ssxl_value,
          dydj: this.dy_value,
          zzgt: this.zzgt,
          qsgt: this.qsgt,
          qsgtlx: this.qsgtlx,
          qsgtmc: this.qsgtmc,
          Str_qsgtLoc: this.Str_qsgtLoc,
          zzgtlx: this.zzgtlx,
          zzgtmc: this.zzgtmc,
          Str_zzgtLoc: this.Str_zzgtLoc,
          tyrq: this.value1,
          tuiyrq: this.value2,
          ywdw: this.ywdw,
          zdycj: 1,
          dxcd: this.dxcd,
          fbzt: "已发布",
          ssdt: window.xianMing,
          sfxzdw: 1,
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
      this.selectList = [];

      ue.interface.broadcast("PSAPI", JSON.stringify(data));
      window.ue.interface.updateSuccess = this.updateSuccess;
    },
    updateSuccess(e) {
      this.$bus.$emit("getKongJian", e);
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
  height: 926px;
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
.b_b_b {
  width: 100%;
  height: 800px;
  overflow: scroll;
}
.b_b_b::-webkit-scrollbar {
  display: none;
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
