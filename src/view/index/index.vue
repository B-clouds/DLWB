<template>
  <div class="container">
    <!-- <transition name="transitionLeft">
      <indexLeft v-if="show" />
    </transition> -->
    <div class="fanhuiDH" @click="fanhuiClick"></div>
    <!-- ---------------------------------------------左下角按钮----------------------------------------- -->
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
    <!------------------------------------------------------ 右下角按钮 ------------------------------------------ -->
    <div class="rightBtn">
      <div
        class="leftBlock"
        @click="rbtnClick(0)"
        :class="dtIndex == 0 ? 'leftBlock2' : ''"
      >
        <span>行政区划</span>
      </div>
      <div class="btnImg"></div>
      <div
        class="rightBlock"
        @click="rbtnClick(1)"
        :class="dtIndex == 1 ? 'rightBlock2' : ''"
      >
        <span>底图加载</span>
      </div>
    </div>
    <!-- 雄安 行政区划 -->
    <div class="qhTK" v-show="showQH && !isShowZD">
      <div
        class="dkBlocks"
        @click="qhClick(0)"
        :class="showRCX ? 'dkBlocks2' : ''"
      >
        <span>容城县</span>
      </div>
      <div
        class="dkBlocks"
        @click="qhClick(1)"
        :class="showXX ? 'dkBlocks2' : ''"
      >
        <span>雄县</span>
      </div>
      <div
        class="dkBlocks"
        @click="qhClick(2)"
        :class="showAXX ? 'dkBlocks2' : ''"
      >
        <span>安新县</span>
      </div>
    </div>
    <!-- 正定 行政区划 -->
    <div class="qhTK" v-show="showQH && isShowZD">
      <div
        class="dkBlocks"
        @click="zqhClick(0)"
        :class="showDQY ? 'dkBlocks2' : ''"
      >
        <span>东曲阳</span>
      </div>
      <div
        class="dkBlocks"
        @click="zqhClick(1)"
        :class="showNQY ? 'dkBlocks2' : ''"
      >
        <span>南曲阳</span>
      </div>
      <div
        class="dkBlocks"
        @click="zqhClick(2)"
        :class="showZJZ ? 'dkBlocks2' : ''"
      >
        <span>周家庄</span>
      </div>
      <div
        class="dkBlocks"
        @click="zqhClick(3)"
        :class="showNBD ? 'dkBlocks2' : ''"
      >
        <span>南白店</span>
      </div>
    </div>
    <!-- 底图弹框 -->
    <div class="dtTk" v-show="showDT">
      <div class="dkBlocks" :class="showYXDT ? 'dkBlocks2' : ''">
        <span>影像底图</span>
      </div>
      <div
        class="dkBlocks"
        @click="dkClick(1)"
        :class="showSWDT ? 'dkBlocks2' : ''"
      >
        <span>三维底图</span>
      </div>
      <div
        class="dkBlocks"
        @click="dkClick(2)"
        :class="showHJDT ? 'dkBlocks2' : ''"
      >
        <span>环境底图</span>
      </div>
      <div
        class="dkBlocks"
        @click="dkClick(3)"
        :class="showDBJZ ? 'dkBlocks2' : ''"
      >
        <span>地表建筑</span>
      </div>
      <div
        class="dkBlocks"
        @click="dkClick(4)"
        :class="showQXSY ? 'dkBlocks2' : ''"
      >
        <span>倾斜摄影</span>
      </div>
    </div>

    <!-- 底图选择错误，弹框 -->
    <div class="zhezhao" v-show="showTk">
      <div class="z_delete">
        <div class="z_d_block">
          <img class="imgs" src="./img/jj2.png" />
          <span>请先选择{{ dituSpan }}图标，并加载完成后再进行该操作。</span>
        </div>
        <div class="z_btn2">
          <div class="z_blocks" @click="deleteClicks">
            <span>确认</span>
          </div>
        </div>
      </div>
    </div>
    <!-- -------------------------------------------------- 右上角按钮 ------------------------------------------ -->
    <div class="gjbBlock" @click="gjbClick"></div>
    <div class="gjbItem" v-show="showGJB">
      <div
        class="itemItem"
        @click="gjClick(0)"
        :class="gjbIndex == 0 ? 'itemItem2' : ''"
      >
        <span>测量面积</span>
      </div>
      <div
        class="itemItem"
        @click="gjClick(1)"
        :class="gjbIndex == 1 ? 'itemItem2' : ''"
      >
        <span>测量距离</span>
      </div>
      <div
        class="itemItem"
        @click="gjClick(2)"
        :class="gjbIndex == 2 ? 'itemItem2' : ''"
      >
        <span>测量角度</span>
      </div>
    </div>
    <!-- 大营所 -->
    <div class="dys" :class="dysShow ? 'dys2' : ''" @click="dysClick"></div>
    <!-- 漫游按钮 -->
    <div class="myan" @click="myClick"></div>
    <!-- 开关柜显隐 -->
    <div class="kggxy" @click="kggClick" :class="showKGG ? 'kggxy2' : ''"></div>
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
    <!---------------------------------------- 绿能灌溉 ------------------------------------>
    <div
      class="lngg"
      @click="lnggClick"
      :class="zdIndex == 1 ? 'lngg2' : ''"
      v-show="isShowZD"
    ></div>
  </div>
</template>

<script>
export default {
  name: "index",
  components: {},
  data() {
    return {
      show: false,
      // 左侧按钮Index
      currentIndex: 0,
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
      // 是否显示网架线路加载loading
      showZheZhao: false,
      // 是否显示底图加载loading
      showZheZhao2: false,
      // 存放加载信息
      list: ["数据请求中"],
      // 右侧按钮Index
      dtIndex: -1,
      // 是否显示行政区划弹框
      showQH: false,
      // 是否显示容城县
      showRCX: true,
      // 是否显示雄县
      showXX: true,
      // 是否显示安新县
      showAXX: true,
      // 是否显示东曲阳
      showDQY: true,
      // 是否显示南曲阳
      showNQY: true,
      // 是否显示周家庄
      showZJZ: true,
      // 是否显示南白店
      showNBD: true,
      // 是否显示地图弹框
      showDT: false,
      // 是否选中影像底图
      showYXDT: true,
      // 是否选中三维底图
      showSWDT: false,
      // 是否选中环境地图
      showHJDT: false,
      // 是否选中地表建筑
      showDBJZ: false,
      // 是否选中切斜摄影
      showQXSY: false,
      // 是否显示弹框
      showTk: false,
      // 弹框显示内容
      dituSpan: "",
      // 是否显示工具包
      showGJB: false,
      // 工具下标
      gjbIndex: -1,
      // 显示隐藏弹框
      showxlTk: true,

      // 是否是正定县
      isShowZD: false,
      zdIndex: 0,
      showKGG: false,
      showMY: false,
      dysShow: false,
    };
  },
  created() {},
  mounted() {
    let that = this;
    // 监听页面离开。加载动画
    that.$bus.$on("routerJump", (e) => {
      if (e != 0) {
        that.show = false;
      }
    });
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

    that.$bus.$on("showRongcheng", (e) => {
      that.showDQY = e.DQY;
      that.showNQY = e.NQY;
      that.showZJZ = e.ZJZ;
      that.showNBD = e.NBD;
      that.showRCX = e.RCX;
      that.showXX = e.XX;
      that.showAXX = e.AXX;
      that.showSWDT = e.SWDT;
      that.showHJDT = e.HJDT;
      that.showDBJZ = e.DBJZ;
      that.showQXSY = e.QXSY;
    });
    that.$bus.$on("chushihuaSY", (e) => {
      this.showRCX = true;
      this.showXX = true;
      this.showAXX = true;
      this.showDQY = true;
      this.showNQY = true;
      this.showZJZ = true;
      this.showNBD = true;
      let xm;
      let v;
      xm = window.xianMing;
      if (xm == "GWZDX") {
        this.isShowZD = true;
      } else {
        this.isShowZD = false;
      }
    });
  },
  activated() {
    this.show = true;
    this.$bus.$emit("setShiJiao", 1);
    this.$bus.$emit("setYeJian", 0);

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
    let that = this;
    let xm;
    xm = window.xianMing;
    if (xm == "GWZDX") {
      this.isShowZD = true;
    } else {
      this.isShowZD = false;
    }
    // setTimeout(() => {
    //   let data = {
    //     functionName: "GetXZQH_DTJZ",
    //     backFunctionName: "GetXZQH_DTJZs",
    //     functionParameters: [],
    //   };
    //   ue.interface.broadcast("PSAPI", JSON.stringify(data));
    //   window.ue.interface.GetXZQH_DTJZs = that.GetXZQH_DTJZs;
    // }, 500);
    let data = {
      functionName: "GetXZQH_DTJZ",
      functionParameters: [],
    };
    ue.interface.broadcast("PSAPI", JSON.stringify(data));
  },
  deactivated() {
    this.show = false;
    this.showZheZhao = false;
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
    this.isShowZD = false;
    this.showQH = false;
    this.showDT = false;
    this.dtIndex = -1;

    // this.showYXDT = false;
    // this.showSWDT = false;
    // this.showHJDT = false;
    // this.showDBJZ = false;
    // this.showQXSY = false;
    // this.getSelectKv();
    // this.dtGoUe(0);
  },
  methods: {
    // GetXZQH_DTJZs(e) {

    //   let datas = JSON.parse(e).value;
    //   this.showDQY = datas.DQY;
    //   this.showNQY = datas.NQY;
    //   this.showZJZ = datas.ZJZ;
    //   this.showNBD = datas.NBD;
    //   this.showRCX = datas.RCX;
    //   this.showXX = datas.XX;
    //   this.showAXX = datas.AXX;

    // },
    dysClick() {
      if (this.dysShow) {
        this.dysShow = false;
      } else {
        this.dysShow = true;
      }

      let v = { ChooseID: "0", ChooseType: this.dysShow };
      let data = {
        functionName: "TestFunc",
        functionParameters: [
          {
            key: "TestFunc",
            value: JSON.stringify(v),
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
    },
    myClick() {
      let v = { ChooseType: "RDMY", value: "true" };
      let data = {
        functionName: "Sundry",
        functionParameters: [
          {
            key: "Sundry",
            value: JSON.stringify(v),
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
    },
    kggClick() {
      if (this.showKGG) {
        this.showKGG = false;
        let v = { ChooseType: "ShowPDZ", value: this.showKGG };
        let data = {
          functionName: "Sundry",
          functionParameters: [
            {
              key: "Sundry",
              value: JSON.stringify(v),
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(data));
      } else {
        this.showKGG = true;
        let v = { ChooseType: "ShowPDZ", value: this.showKGG };
        let data = {
          functionName: "Sundry",
          functionParameters: [
            {
              key: "Sundry",
              value: JSON.stringify(v),
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(data));
      }
    },
    fanhuiClick() {
      let datas = {
        functionName: "NavigationPage",
        functionParameters: [
          {
            key: "shijiaoXZ",
            value: "MRSJ",
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(datas));
      let data = {
        functionName: "fanhuiDaoHang",
        backFunctionName: "",
        functionParameters: [],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
      let v = { ChooseType: "ShowCompass", value: false };
      let data2 = {
        functionName: "Sundry",
        functionParameters: [
          {
            key: "Sundry",
            value: JSON.stringify(v),
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data2));
      let v2 = {
        ChooseType: "ShowFastPositionButton",
        SelectType: false,
      };
      let data3 = {
        functionName: "QuickPosition",
        functionParameters: [
          {
            key: "QuickPosition",
            value: JSON.stringify(v2),
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data3));

      this.showSWDT = false;
      this.showHJDT = false;
      this.showDBJZ = false;
      this.showQXSY = false;
      this.getSelectKv();
      this.dtGoUe(0);
      this.$router.push({
        path: "/daohang",
      });
    },
    btnClick(e) {
      if (this.currentIndex == e) {
        this.currentIndex = -1;
        this.showxlTk = false;
      } else {
        this.currentIndex = e;
        this.showxlTk = true;
        this.showDT = false;
        this.showQH = false;
        this.dtIndex = -1;
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
      this.showRCX = false;
      this.showXX = false;
      this.showAXX = false;
      this.showDQY = false;
      this.showNQY = false;
      this.showNBD = false;
      this.showZJZ = false;
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
    rbtnClick(e) {
      if (this.dtIndex == e) {
        this.dtIndex = -1;
        this.showDT = false;
        this.showQH = false;
      } else {
        this.dtIndex = e;
        if (e == 1) {
          this.showDT = true;
          this.showQH = false;
          this.showxlTk = false;
          this.currentIndex = -1;
        } else {
          this.showDT = false;
          this.showQH = true;
          this.currentIndex = -1;
          this.showxlTk = false;
        }
      }
    },
    closeDT() {
      this.showSWDT = false;
      this.showHJDT = false;
      this.showDBJZ = false;
      this.showQXSY = false;
    },
    // 行政区划选择
    qhClick(e) {
      if (e == 0) {
        this.showRCX = !this.showRCX;
      } else if (e == 1) {
        this.showXX = !this.showXX;
      } else if (e == 2) {
        this.showAXX = !this.showAXX;
      }
      let v = [
        { key: "RCX", value: this.showRCX },
        { key: "XX", value: this.showXX },
        { key: "AXX", value: this.showAXX },
      ];
      let data = {
        functionName: "NavigationPage",
        functionParameters: [
          {
            key: "3DXZQH",
            value: v,
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
    },
    // 正定-行政区划选择
    zqhClick(e) {
      if (e == 0) {
        this.showDQY = !this.showDQY;
      } else if (e == 1) {
        this.showNQY = !this.showNQY;
      } else if (e == 2) {
        this.showZJZ = !this.showZJZ;
      } else if (e == 3) {
        this.showNBD = !this.showNBD;
      }
      let v = [
        { key: "DQY", value: this.showDQY },
        { key: "NQY", value: this.showNQY },
        { key: "ZJZ", value: this.showZJZ },
        { key: "NBD", value: this.showNBD },
      ];
      let data = {
        functionName: "NavigationPage",
        functionParameters: [
          {
            key: "3DXZQH",
            value: v,
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
    },
    dkClick(e) {
      if (e == 1) {
        if (this.showSWDT) {
          this.closeDT();
          this.showZheZhao2 = true;
          this.dtGoUe(1);
        } else {
          this.showSWDT = true;
          this.showZheZhao2 = true;
          this.dtGoUe(1);
        }
      } else if (e == 2) {
        if (this.showHJDT) {
          this.showHJDT = false;
          this.showDBJZ = false;
          this.showQXSY = false;
          this.showZheZhao2 = true;
          this.dtGoUe(2);
        } else {
          if (this.showSWDT) {
            this.showHJDT = true;
            this.showZheZhao2 = true;

            this.dtGoUe(2);
          } else {
            // 进行弹框提示，应该先选择三维地图
            this.showTk = true;
            this.dituSpan = "三维底图";
          }
        }
      } else if (e == 3) {
        if (this.showDBJZ) {
          this.showDBJZ = false;
          this.showQXSY = false;
          this.showZheZhao2 = true;
          this.dtGoUe(3);
        } else {
          if (this.showHJDT) {
            this.showDBJZ = true;
            this.showZheZhao2 = true;

            this.dtGoUe(3);
          } else {
            // 进行弹框提示，应该先选择环境地图
            this.showTk = true;
            this.dituSpan = "环境底图";
          }
        }
      } else if (e == 4) {
        if (this.showQXSY) {
          this.showQXSY = false;
          this.showZheZhao2 = true;
          this.dtGoUe(4);
        } else {
          if (this.showDBJZ) {
            this.showQXSY = true;
            this.showZheZhao2 = true;

            this.dtGoUe(4);
          } else {
            // 进行弹框提示，应该先选择地标建筑
            this.showTk = true;
            this.dituSpan = "地标建筑";
          }
        }
      }
    },
    dtGoUe(e) {
      let v;
      if (e == 0) {
      } else if (e == 1) {
        v = [{ key: "SWDT", value: this.showSWDT }];
      } else if (e == 2) {
        v = [{ key: "HJDT", value: this.showHJDT }];
      } else if (e == 3) {
        v = [{ key: "DBJZ", value: this.showDBJZ }];
      } else if (e == 4) {
        v = [{ key: "QXSY", value: this.showQXSY }];
      }

      let data = {
        functionName: "NavigationPage",
        functionParameters: [
          {
            key: "DTJZ",
            value: v,
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
    },
    lnggClick() {
      if (this.zdIndex == 0) {
        this.zdIndex = 1;
        let data = {
          functionName: "selectLvNeng",
          functionParameters: [
            {
              key: "selectLvNeng",
              value: true,
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(data));
      } else {
        this.zdIndex = 0;
        let data = {
          functionName: "selectLvNeng",
          functionParameters: [
            {
              key: "selectLvNeng",
              value: false,
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(data));
      }
    },
    deleteClicks() {
      this.showTk = false;
    },
    gjbClick() {
      this.showGJB = !this.showGJB;
    },
    gjClick(e) {
      if (e == this.gjbIndex) {
        this.gjbIndex = -1;
        let gj;

        if (e == 0) {
          gj = "CLMJ";
          let data = {
            functionName: "NavigationPage",
            functionParameters: [
              {
                key: "gongjubao",
                value: gj,
              },
              {
                key: "isSelect",
                value: false,
              },
            ],
          };
          ue.interface.broadcast("PSAPI", JSON.stringify(data));
        } else if (e == 1) {
          gj = "CLJL";
          let data = {
            functionName: "NavigationPage",
            functionParameters: [
              {
                key: "gongjubao",
                value: gj,
              },
              {
                key: "isSelect",
                value: false,
              },
            ],
          };
          ue.interface.broadcast("PSAPI", JSON.stringify(data));
        } else if (e == 2) {
          gj = "CLJD";
          let data = {
            functionName: "NavigationPage",
            functionParameters: [
              {
                key: "gongjubao",
                value: gj,
              },
              {
                key: "isSelect",
                value: false,
              },
            ],
          };
          ue.interface.broadcast("PSAPI", JSON.stringify(data));
        }
      } else {
        this.gjbIndex = e;
        let gj;
        if (e == 0) {
          gj = "CLMJ";
          let data = {
            functionName: "NavigationPage",
            functionParameters: [
              {
                key: "gongjubao",
                value: gj,
              },
              {
                key: "isSelect",
                value: true,
              },
            ],
          };
          ue.interface.broadcast("PSAPI", JSON.stringify(data));
        } else if (e == 1) {
          gj = "CLJL";
          let data = {
            functionName: "NavigationPage",
            functionParameters: [
              {
                key: "gongjubao",
                value: gj,
              },
              {
                key: "isSelect",
                value: true,
              },
            ],
          };
          ue.interface.broadcast("PSAPI", JSON.stringify(data));
        } else if (e == 2) {
          gj = "CLJD";
          let data = {
            functionName: "NavigationPage",
            functionParameters: [
              {
                key: "gongjubao",
                value: gj,
              },
              {
                key: "isSelect",
                value: true,
              },
            ],
          };
          ue.interface.broadcast("PSAPI", JSON.stringify(data));
        }
      }
    },
    // 获取加载电站线路
    getSelectKvs() {
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
.container {
  width: 100%;
  height: 100%;
}
.btnImg {
  width: 52px;
  height: 47px;
  position: absolute;
  left: 157.5px;
  top: 0px;
  background: url("img/btnImg.png") no-repeat;
  background-size: 100% 100%;
}
.fanhuiDH {
  width: 110px;
  height: 31px;
  position: fixed;
  left: 10px;
  top: 47px;
  background: url("img/fanhui.png") no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
  z-index: 999;
}
.leftBtn {
  width: 366px;
  height: 47px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  left: 20px;
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
  left: 65px;
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
.qhTK {
  width: 110px;
  height: 165px;
  position: fixed;
  bottom: 83px;
  right: 236px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.qhTK > .dkBlocks {
  width: 110px;
  height: 46px;
  background: url("img/xlBg.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.qhTK > .dkBlocks > span {
  font-family: SourceHanSansCN-Regular-Regular;
  font-size: 16px;
  font-weight: normal;
  letter-spacing: 1px;
  color: #e7f3ff;
}
.qhTK > .dkBlocks2 {
  background: url("img/xlBg2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.dtTk {
  position: fixed;
  width: 110px;
  height: 284px;
  right: 60px;
  bottom: 83px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.dtTk > .dkBlocks {
  width: 110px;
  height: 46px;
  background: url("img/xlBg.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.dtTk > .dkBlocks > span {
  font-family: SourceHanSansCN-Regular-Regular;
  font-size: 16px;
  font-weight: normal;
  letter-spacing: 1px;
  color: #e7f3ff;
}
.dtTk > .dkBlocks2 {
  background: url("img/xlBg2.png") no-repeat !important;
  background-size: 100% 100% !important;
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
<style scoped>
.gjbBlock {
  width: 43px;
  height: 60px;
  position: fixed;
  right: 10px;
  top: 47px;
  background: url("img/gjb.png") no-repeat;
  background-size: 100% 100%;
}
.gjbItem {
  width: 95px;
  height: 133px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 116px;
  right: 10px;
}
.gjbItem > .itemItem {
  width: 100%;
  height: 37px;
  background: url("img/xlBg.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.gjbItem > .itemItem > span {
  font-family: SourceHanSansCN-Regular-Regular;
  font-size: 16px;
  font-weight: normal;
  letter-spacing: 1px;
  color: #e7f3ff;
}
.gjbItem > .itemItem2 {
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
.lngg {
  width: 177px;
  height: 64px;
  position: absolute;
  left: 872px;
  bottom: 20px;
  background: url("img/ln.png") no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
}
.lngg:hover {
  background: url("img/ln2.png") no-repeat;
  background-size: 100% 100%;
}
.lngg2 {
  background: url("img/ln2.png") no-repeat;
  background-size: 100% 100%;
}
</style>
<style scoped>
.kggxy {
  width: 37px;
  height: 37px;
  position: absolute;
  top: 50px;
  right: 67px;
  background: url("img/kg.png") no-repeat;
  background-size: 100% 100%;
}
.kggxy2 {
  background: url("img/kg1.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.myan {
  width: 37px;
  height: 37px;
  position: absolute;
  top: 50px;
  right: 112px;
  background: url("img/my.png") no-repeat;
  background-size: 100% 100%;
}
.myan:hover {
  background: url("img/my1.png") no-repeat !important;
  background-size: 100% 100% !important;
}

.dys {
  width: 37px;
  height: 37px;
  position: absolute;
  top: 50px;
  right: 162px;
  background: url("img/ys.png") no-repeat;
  background-size: 100% 100%;
}
.dys2 {
  background: url("img/ys1.png") no-repeat;
  background-size: 100% 100%;
}
</style>
