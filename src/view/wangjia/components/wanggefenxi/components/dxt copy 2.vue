<template>
  <div>
    <div class="dxt">
      <div class="zsqy">
        <pdf
          :src="src"
          :page="currentPage"
          @num-pages="pageCount = $event"
          @page-loaded="currentPage = $event"
          @loaded="loadPdfHandler"
          class="setPdfs"
        >
        </pdf>
      </div>
      <div class="leftBtn">
        <div
          class="leftBlock"
          @click="btnClick(0)"
          :class="currentIndex == 0 ? 'leftBlock2' : ''"
        >
          <span>规划</span>
        </div>
        <div class="btnImg"></div>
        <div
          class="rightBlock"
          @click="btnClick(1)"
          :class="currentIndex == 1 ? 'rightBlock2' : ''"
        >
          <span>网架电站</span>
        </div>
      </div>
      <div class="jbBlock">
        <div class="jbLeft">
          <span>时间</span>
        </div>
        <div class="jbRight2">
          <div class="inputs">
            <el-select
              v-model="hlsl_value"
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
      <div class="dr">
        <span>导入</span>
      </div>
    </div>
    <div class="fh_mr" @click="fhMrClick"></div>
  </div>
</template>

<script>
import pdf from "vue-pdf";
export default {
  name: "dxt",
  components: {
    pdf,
  },
  data() {
    return {
      currentIndex: 0,
      hlsl: [
        {
          value: "2023",
          label: "2023",
        },
      ],
      hlsl_value: "2023",
      hlsl_show: "",
      downloadUrl: "",

      currentPage: 0, // pdf文件页码
      pageCount: 0, // pdf文件总页数
      fileType: "pdf", // 文件类型
      src: "", // pdf文件地址
    };
  },
  created() {
    // 有时PDF文件地址会出现跨域的情况,这里最好处理一下
    this.src = pdf.createLoadingTask("https://cw.picimos.com/site/guihua.pdf");
  },

  mounted() {
    // this.downloadUrl =
    //   "http://beta.picimos.com:8097/%E7%99%BD%E7%A0%81%E6%9D%91%E8%A7%84%E5%88%92%E5%9B%BE.pdf";
  },
  methods: {
    // pdf加载时
    loadPdfHandler(e) {
      this.currentPage = 1; // 加载的时候先加载第一页
    },
    btnClick(e) {
      this.currentIndex = e;
      if (e == 0) {
        this.src = "https://cw.picimos.com/site/guihua.pdf";
      } else {
        this.src = "https://cw.picimos.com/site/xianzhuang.pdf";
      }
    },
    hlslClick(e) {
      this.hlsl_show = e;
    },
    fhMrClick() {
      this.$emit("geshihua");
    },
  },
};
</script>

<style scoped>
.setPdfs {
  width: 100%;
}
.dxt {
  position: absolute;
  left: 242px;
  top: 150px;
  width: 1370px;
  height: 752px;
  background: url("img/bjs.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.zsqy {
  width: 1286px;
  height: 637px;
  position: relative;
  left: 44px;
  top: 73px;
  background: url("img/bjs2.png") no-repeat !important;
  background-size: 100% 100% !important;
  overflow: auto;
}

.btnImg {
  width: 52px;
  height: 44px;
  position: absolute;
  left: 157.5px;
  top: 0px;
  background: url("img/btnImg.png") no-repeat;
  background-size: 100% 100%;
}
.leftBtn {
  width: 366px;
  height: 41px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 44px;
  top: 18px;
}

.rightBtn {
  width: 366px;
  height: 41px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  right: 20px !important;
  bottom: 20px !important;
}
.leftBtn > .leftBlock,
.rightBtn > .leftBlock {
  width: 163px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("img/leftBtn.png") no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
}
.leftBtn > .leftBlock > span,
.rightBtn > .leftBlock > span {
  font-family: PangMenZhengDao;
  font-size: 22px;
  font-weight: normal;
  text-align: center;
  letter-spacing: 0em;
  color: #fafcff;
}
.leftBlock2 {
  background: url("img/leftBtn2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.leftBlock2 > span {
  font-family: PangMenZhengDao !important;
  font-size: 22px !important;
  font-weight: normal !important;
  letter-spacing: 0em !important;
  color: #6bf0ff !important;
  text-shadow: 0px 0px 10px 0px rgba(17, 153, 168, 0.6) !important;
}
.leftBtn > .rightBlock,
.rightBtn > .rightBlock {
  width: 163px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("img/rightBtn.png") no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
}
.leftBtn > .rightBlock > span,
.rightBtn > .rightBlock > span {
  font-family: PangMenZhengDao;
  font-size: 24px;
  font-weight: normal;
  text-align: center;
  letter-spacing: 0em;
  color: #fafcff;
}
.rightBlock2 {
  background: url("img/rightBtn2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.rightBlock2 > span {
  font-family: PangMenZhengDao !important;
  font-size: 24px !important;
  font-weight: normal !important;
  letter-spacing: 0em !important;
  color: #6bf0ff !important;
  text-shadow: 0px 0px 10px 0px rgba(17, 153, 168, 0.6) !important;
}
</style>
<style scoped>
.dr {
  width: 73px;
  height: 34px;
  position: absolute;
  top: 19px;
  right: 38px;
  background: url("img/dr.png") no-repeat !important;
  background-size: 100% 100% !important;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.dr > span {
  font-family: Source Han Sans SC;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: #ffffff;
}
</style>

<style scoped>
.jbBlock {
  width: 250px;
  height: 34px;
  display: flex;
  position: absolute;
  right: 130px;
  top: 19px;
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
  margin-right: 17px;
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
  width: 284px;
  height: 100%;
  background: url("img/jbInput2.png") no-repeat !important;
  background-size: 100% 100% !important;
}

.inputs {
  width: 100%;
  height: 100%;
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
.fh_mr {
  width: 71px;
  height: 31px;
  position: fixed;
  top: 46px;
  right: 25px;
  background: url("img/fh_mr.png") no-repeat !important;
  background-size: 100% 100% !important;
  cursor: pointer;
}
</style>
