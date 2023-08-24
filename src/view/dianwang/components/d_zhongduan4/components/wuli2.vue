<template>
  <div class="zdyLeft">
    <div class="jcxx">
      <div class="j_titles">
        <span>基本信息</span>
      </div>
      <div class="kong"></div>
      <div class="jbBlock">
        <div class="jbLeft">
          <span>节点ID</span>
        </div>
        <div class="jbRight">
          <span>{{ oid }}</span>
        </div>
      </div>
      <div class="jbBlock">
        <div class="jbLeft">
          <span>节点名称</span>
        </div>
        <div class="jbRight2">
          <input v-model="sbmc" placeholder="最大输入不超过10个字" />
        </div>
      </div>
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
        <div class="jbBtn">
          <span>保存</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "wuli",
  data() {
    return {
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
      // --------------------------- 运维单位-------------------------------
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

      oid: "",
      sbmc: "",
      glgd: "",
      glkd: "",
    };
  },
  mounted() {
    let that = this;
    that.$bus.$on("hangObjssss", (e) => {
      that.oid = e.oid;
      that.jmlx = e.jmlx;
      that.glkd = e.glkd;
      that.glgd = e.glgd;
      that.ywdw = e.ywdw;
      that.sbmc = e.sbmc;
    });
  },
  activated() {},
  methods: {
    oamClick(e) {
      this.oam_show = e;
    },
    oamClick2(e) {
      this.oam_show2 = e;
    },
    goNeiJing() {
      this.$emit("goNeiJing");
    },
  },
};
</script>

<style scoped>
.wuli {
  width: 451.38px;
  height: 800px;
  position: fixed;
  left: 20px;
  top: 75.33px;
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
  height: 442px;
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
.jbBtn2 {
  position: absolute;
  top: 1px;
  right: 114px !important;
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
