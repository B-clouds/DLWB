<template>
  <div class="wjdz">
    <div class="leftBtn">
      <div
        class="leftBlock"
        @click="btnClick(0)"
        :class="currentIndex == 0 ? 'leftBlock2' : ''"
      >
        <span>网架线路</span>
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
    <!-- 显示的线路 -->
    <div class="xlBlock" v-show="showxlTk">
      <div class="xlBlockItem">
        <div
          class="xlItmes"
          @click="xlClick(0)"
          :class="xlIndex == 1 ? 'xlItmes2' : ''"
        >
          <span style="color: rgb(255, 0, 0)">500kV</span>
        </div>
        <div
          class="xlItmes"
          @click="xlClick(1)"
          :class="xlIndex1 == 1 ? 'xlItmes2' : ''"
        >
          <span style="color: rgb(192, 0, 192)">220kV</span>
        </div>
      </div>
      <div class="xlBlockItem">
        <div
          class="xlItmes"
          @click="xlClick(2)"
          :class="xlIndex2 == 1 ? 'xlItmes2' : ''"
        >
          <span style="color: rgb(0, 128, 0)">110kV</span>
        </div>
        <div
          class="xlItmes"
          @click="xlClick(3)"
          :class="xlIndex3 == 1 ? 'xlItmes2' : ''"
        >
          <span style="color: rgb(255, 204, 0)">35kV</span>
        </div>
      </div>
      <div class="xlBlockItem">
        <div
          class="xlItmes"
          @click="xlClick(4)"
          :class="xlIndex4 == 1 ? 'xlItmes2' : ''"
        >
          <span style="color: rgb(185, 72, 66)">10kV</span>
        </div>
        <div
          class="xlItmes"
          @click="xlClick(5)"
          :class="xlIndex5 == 1 ? 'xlItmes2' : ''"
          v-show="currentIndex != 1"
        >
          <span style="color: #76c9f7">0.4kV</span>
        </div>
      </div>
    </div>
    <!-- -------------------------------- 网架线路加载loading ---------------------------- -->
    <div class="zhezhao" v-show="showZheZhao">
      <div class="iconss"></div>
      <div class="bList">
        <div v-if="list.length > 1">
          <div class="bListItem" v-for="(item, index) in list" :key="index">
            <span>{{ item }}</span>
          </div>
        </div>
        <div v-if="list.length <= 1">
          <div class="bListItem" v-for="(item, indey) in list" :key="indey">
            <span class="blSpan">{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- -------------------------------- 底图加载loading -------------------------------- -->
    <div class="zhezhao" v-show="showZheZhao2">
      <div class="iconss"></div>
      <div class="spans"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "wjdz",
  data() {
    return {
      // 左侧按钮Index
      currentIndex: -1,
      // 左侧弹框Index
      xlIndex: -1,
      xlIndex1: -1,
      xlIndex2: -1,
      xlIndex3: -1,
      xlIndex4: -1,
      xlIndex5: -1,
      lindex1: 0,
      lindex2: 0,
      lindex3: 0,
      lindex4: 0,
      lindex5: 0,
      lindex6: 0,
      l2index1: 0,
      l2index2: 0,
      l2index3: 0,
      l2index4: 0,
      l2index5: 0,
      l2index6: 0,
      // 显示隐藏弹框
      showxlTk: false,
      // 是否显示网架线路加载loading
      showZheZhao: false,
      // 是否显示底图加载loading
      showZheZhao2: false,
      // 存放加载信息
      list: ["数据请求中"],
      // 右侧按钮Index
      dtIndex: -1,
    };
  },

  mounted() {
    let that = this;
    that.$bus.$on("closeLoading", (e) => {
      if (e.type == "false") {
        that.list = e.obj;
      } else {
        that.showZheZhao = false;
      }
    });
    that.$bus.$on("closeLoading2", (e) => {
      that.showZheZhao2 = false;
    });
  },
  activated() {
    console.log("====进入页面");
    this.getSelectKv();
    this.getSelectKvs();
  },
  deactivated() {
    this.show = false;
    this.showZheZhao = false;
    this.showxlTk = false;
    this.currentIndex = -1;
    this.xlIndex = -1;
    this.xlIndex1 = -1;
    this.xlIndex2 = -1;
    this.xlIndex3 = -1;
    this.xlIndex4 = -1;
    this.xlIndex5 = -1;
    this.lindex1 = 0;
    this.lindex2 = 0;
    this.lindex3 = 0;
    this.lindex4 = 0;
    this.lindex5 = 0;
    this.lindex6 = 0;
    this.l2index1 = 0;
    this.l2index2 = 0;
    this.l2index3 = 0;
    this.l2index4 = 0;
    this.l2index5 = 0;
    this.l2index6 = 0;
  },
  methods: {
    btnClick(e) {
      if (this.currentIndex == e) {
        this.currentIndex = -1;
        this.showxlTk = false;
      } else {
        this.currentIndex = e;
        this.showxlTk = true;

        if (e == 0) {
          this.xlIndex = -1;
          this.xlIndex1 = -1;
          this.xlIndex2 = -1;
          this.xlIndex3 = -1;
          this.xlIndex4 = -1;
          this.xlIndex5 = -1;
          this.lindex1 = 0;
          this.lindex2 = 0;
          this.lindex3 = 0;
          this.lindex4 = 0;
          this.lindex5 = 0;
          this.lindex6 = 0;
          this.l2index1 = 0;
          this.l2index2 = 0;
          this.l2index3 = 0;
          this.l2index4 = 0;
          this.l2index5 = 0;
          this.l2index6 = 0;
          this.getSelectKv();
        } else {
          this.xlIndex = -1;
          this.xlIndex1 = -1;
          this.xlIndex2 = -1;
          this.xlIndex3 = -1;
          this.xlIndex4 = -1;
          this.xlIndex5 = -1;
          this.lindex1 = 0;
          this.lindex2 = 0;
          this.lindex3 = 0;
          this.lindex4 = 0;
          this.lindex5 = 0;
          this.lindex6 = 0;
          this.l2index1 = 0;
          this.l2index2 = 0;
          this.l2index3 = 0;
          this.l2index4 = 0;
          this.l2index5 = 0;
          this.l2index6 = 0;
          this.getSelectKvs();
        }
      }
    },
    xlClick(e) {
      if (e == 0) {
        if (this.xlIndex != -1) {
          this.xlIndex = -1;
        } else {
          this.xlIndex = 1;
          if (this.lindex1 == 0) {
            this.list = ["数据请求中"];
            if (this.l2index1 == 0) {
              this.showZheZhao = true;
              this.l2index1 = 1;
            }
          }
        }

        let show;
        if (this.xlIndex == 1) {
          show = true;
        } else {
          show = false;
        }
        let v = {
          PowerLevel: "交流500kV",
          value: show,
          data: [
            {
              key: "fbzt",
              value: "已发布",
            },
            {
              key: "dydj",
              value: "交流500kV",
            },
            {
              key: "ssdt",
              value: window.xianMing,
            },
          ],
        };
        let functionName;
        if (this.currentIndex == 0) {
          functionName = "SwitchPowerLevel";
        } else {
          functionName = "SwitchHStationPowerLevel";
        }
        let data = {
          functionName: functionName,
          backFunctionName: "",
          functionParameters: [
            {
              key: functionName,
              value: JSON.stringify(v),
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(data));
      } else if (e == 1) {
        if (this.xlIndex1 == 1) {
          this.xlIndex1 = 0;
        } else {
          this.xlIndex1 = 1;
          if (this.lindex2 == 0) {
            this.list = ["数据请求中"];
            if (this.l2index2 == 0) {
              this.showZheZhao = true;
              this.l2index2 = 1;
            }
          }
        }
        let show;
        if (this.xlIndex1 == 1) {
          show = true;
        } else {
          show = false;
        }
        let v = {
          PowerLevel: "交流220kV",
          value: show,
          data: [
            {
              key: "fbzt",
              value: "已发布",
            },
            {
              key: "dydj",
              value: "交流220kV",
            },
            {
              key: "ssdt",
              value: window.xianMing,
            },
          ],
        };
        let functionName;
        if (this.currentIndex == 0) {
          functionName = "SwitchPowerLevel";
        } else {
          functionName = "SwitchHStationPowerLevel";
        }
        let data = {
          functionName: functionName,
          backFunctionName: "",
          functionParameters: [
            {
              key: functionName,
              value: JSON.stringify(v),
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(data));
      } else if (e == 2) {
        if (this.xlIndex2 == 1) {
          this.xlIndex2 = 0;
        } else {
          this.xlIndex2 = 1;
          if (this.lindex3 == 0) {
            this.list = ["数据请求中"];
            if (this.l2index3 == 0) {
              this.showZheZhao = true;
              this.l2index3 = 1;
            }
          }
        }
        let show;
        if (this.xlIndex2 == 1) {
          show = true;
        } else {
          show = false;
        }
        let v = {
          PowerLevel: "交流110kV",
          value: show,
          data: [
            {
              key: "fbzt",
              value: "已发布",
            },
            {
              key: "dydj",
              value: "交流110kV",
            },
            {
              key: "ssdt",
              value: window.xianMing,
            },
          ],
        };
        let functionName;
        if (this.currentIndex == 0) {
          functionName = "SwitchPowerLevel";
        } else {
          functionName = "SwitchHStationPowerLevel";
        }
        let data = {
          functionName: functionName,
          backFunctionName: "",
          functionParameters: [
            {
              key: functionName,
              value: JSON.stringify(v),
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(data));
      } else if (e == 3) {
        if (this.xlIndex3 == 1) {
          this.xlIndex3 = 0;
        } else {
          this.xlIndex3 = 1;
          if (this.lindex4 == 0) {
            this.list = ["数据请求中"];
            if (this.l2index4 == 0) {
              this.showZheZhao = true;
              this.l2index4 = 1;
            }
          }
        }
        let show;
        if (this.xlIndex3 == 1) {
          show = true;
        } else {
          show = false;
        }
        let v = {
          PowerLevel: "交流35kV",
          value: show,
          data: [
            {
              key: "fbzt",
              value: "已发布",
            },
            {
              key: "dydj",
              value: "交流35kV",
            },
            {
              key: "ssdt",
              value: window.xianMing,
            },
          ],
        };
        let functionName;
        if (this.currentIndex == 0) {
          functionName = "SwitchPowerLevel";
        } else {
          functionName = "SwitchHStationPowerLevel";
        }
        let data = {
          functionName: functionName,
          backFunctionName: "",
          functionParameters: [
            {
              key: functionName,
              value: JSON.stringify(v),
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(data));
      } else if (e == 4) {
        if (this.xlIndex4 == 1) {
          this.xlIndex4 = 0;
        } else {
          this.xlIndex4 = 1;
          if (this.lindex5 == 0) {
            this.list = ["数据请求中"];
            if (this.l2index5 == 0) {
              this.showZheZhao = true;
              this.l2index5 = 1;
            }
          }
        }
        let show;
        if (this.xlIndex4 == 1) {
          show = true;
        } else {
          show = false;
        }
        let v = {
          PowerLevel: "交流10kV",
          value: show,
          data: [
            {
              key: "fbzt",
              value: "已发布",
            },
            {
              key: "dydj",
              value: "交流10kV",
            },
            {
              key: "ssdt",
              value: window.xianMing,
            },
          ],
        };
        let functionName;
        if (this.currentIndex == 0) {
          functionName = "SwitchPowerLevel";
        } else {
          functionName = "SwitchHStationPowerLevel";
        }
        let data = {
          functionName: functionName,
          backFunctionName: "",
          functionParameters: [
            {
              key: functionName,
              value: JSON.stringify(v),
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(data));
      } else if (e == 5) {
        if (this.xlIndex5 == 1) {
          this.xlIndex5 = 0;
        } else {
          this.xlIndex5 = 1;
          if (this.lindex6 == 0) {
            this.list = ["数据请求中"];
            if (this.l2index6 == 0) {
              this.showZheZhao = true;
              this.l2index6 = 1;
            }
          }
        }
        let show;
        if (this.xlIndex5 == 1) {
          show = true;
        } else {
          show = false;
        }
        let v = {
          PowerLevel: "交流0.4kV",
          value: show,
          data: [
            {
              key: "fbzt",
              value: "已发布",
            },
            {
              key: "dydj",
              value: "交流0.4kV",
            },
            {
              key: "ssdt",
              value: window.xianMing,
            },
          ],
        };
        let functionName;
        if (this.currentIndex == 0) {
          functionName = "SwitchPowerLevel";
        } else {
          functionName = "SwitchHStationPowerLevel";
        }
        let data = {
          functionName: functionName,
          backFunctionName: "",
          functionParameters: [
            {
              key: functionName,
              value: JSON.stringify(v),
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(data));
      }
    },
    // 获取加载电站线路
    getSelectKvs() {
      console.log("---------------------1-----");

      let data = {
        functionName: "GetSelectHStationKv",
        backFunctionName: "BackGetSelectKvs",
        functionParameters: [
          {
            key: "GetSelectHStationKv",
            value: "",
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
      window.ue.interface.BackGetSelectKvs = this.BackGetSelectKvs;
    },
    BackGetSelectKvs(e) {
      let data = JSON.parse(e).value;
      for (let i = 0; i < data.length; i++) {
        if (data[i] == "交流500kV") {
          this.xlIndex = 1;
          this.lindex1 = 1;
        }
        if (data[i] == "交流220kV") {
          this.xlIndex1 = 1;
          this.lindex2 = 1;
        }
        if (data[i] == "交流110kV") {
          this.xlIndex2 = 1;
          this.lindex3 = 1;
        }
        if (data[i] == "交流35kV") {
          this.xlIndex3 = 1;
          this.lindex4 = 1;
        }
        if (data[i] == "交流10kV") {
          this.xlIndex4 = 1;
          this.lindex5 = 1;
        }
        if (data[i] == "交流0.4kV") {
          this.xlIndex5 = 1;
          this.lindex6 = 1;
        }
      }
    },
    // 获取加载的网架线路
    getSelectKv() {
      console.log("--------------------------");
      let data = {
        functionName: "GetSelectKv",
        backFunctionName: "BackGetSelectKv",
        functionParameters: [
          {
            key: "GetSelectKv",
            value: "",
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
      window.ue.interface.BackGetSelectKv = this.BackGetSelectKv;
      console.log(data, "------------------------");
    },
    // 网架线路回调
    BackGetSelectKv(e) {
      let data = JSON.parse(e).value;
      for (let i = 0; i < data.length; i++) {
        if (data[i] == "交流500kV") {
          this.xlIndex = 1;
          this.lindex1 = 1;
        }
        if (data[i] == "交流220kV") {
          this.xlIndex1 = 1;
          this.lindex2 = 1;
        }
        if (data[i] == "交流110kV") {
          this.xlIndex2 = 1;
          this.lindex3 = 1;
        }
        if (data[i] == "交流35kV") {
          this.xlIndex3 = 1;
          this.lindex4 = 1;
        }
        if (data[i] == "交流10kV") {
          this.xlIndex4 = 1;
          this.lindex5 = 1;
        }
        if (data[i] == "交流0.4kV") {
          this.xlIndex5 = 1;
          this.lindex6 = 1;
        }
      }
    },
  },
};
</script>

<style scoped>
.btnImg {
  width: 52px;
  height: 47px;
  position: absolute;
  left: 157.5px;
  top: 0px;
  background: url("img/btnImg.png") no-repeat;
  background-size: 100% 100%;
}
.leftBtn {
  width: 366px;
  height: 47px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  left: 777px;
  bottom: 20px;
}

.rightBtn {
  width: 366px;
  height: 47px;
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
  font-size: 24px;
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
  font-size: 24px !important;
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
.xlBlock {
  width: 279px;
  height: 156px;
  position: fixed;
  left: 820px;
  bottom: 78px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.xlBlockItem {
  width: 100%;
  height: 46px;
  display: flex;
  justify-content: space-between;
}
.xlBlockItem > .xlItmes {
  width: 131px;
  height: 100%;
  display: flex;
  align-items: center;
  background: url("img/xlBg.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.xlBlockItem > .xlItmes > span {
  font-family: SourceHanSansCN-Regular-Regular;
  font-size: 20px;
  font-weight: normal;
  line-height: 20px;
  letter-spacing: 1px;
}
.xlBlockItem > .xlItmes2 {
  background: url("img/xlBg2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
</style>
<style scoped>
.zhezhao {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: url("img/bg2.png") no-repeat !important;
  background-size: 100% 100% !important; */
  background: rgba(1, 11, 23, 0.6);
}

.spans {
  position: absolute;
  left: 880px;
  top: 628px;
  width: 180px;
  height: 60px;
  background: url("img/span.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.iconss {
  width: 158px;
  height: 158px;
  position: absolute;
  left: 904px;
  top: 412px;
  background: url("img/icon.png") no-repeat !important;
  background-size: 100% 100% !important;
  animation: myRotate 3s infinite;
}

.bList {
  width: 100%;
  height: 240px;
  position: absolute;
  left: 0;
  top: 622px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.bListItem {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
}
.blSpan {
  margin-left: 48% !important;
}
.bListItem > span {
  font-family: SourceHanSansSC-Regular;
  font-size: 20px;
  font-weight: normal;
  color: #ffffff;
  margin-left: 37%;
}
.blocks {
  width: 100%;
  height: 25px;
  display: flex;
  align-items: center;
  margin-top: 12px;
}
.blocks > .icon {
  width: 18px;
  height: 18px;
  margin-left: 10px;
  margin-right: 10px;
  background: url("img/x1.png") no-repeat;
  background-size: 100% 100%;
}
.icon2 {
  background: url("img/x2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.blocks > span {
  font-family: SourceHanSansSC-Bold;
  font-size: 18px;
  font-weight: bold;
}
</style>
