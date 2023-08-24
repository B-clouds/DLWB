<template>
  <div class="ssfx" v-if="show">
    <div class="leftBtn">
      <div
        class="leftBlock"
        @click="rbtnClick(0)"
        :class="currentIndex2 == 0 ? 'leftBlock2' : ''"
      >
        <span>设施分类</span>
      </div>
      <div class="btnImg"></div>
      <div
        class="rightBlock"
        @click="rbtnClick(1)"
        :class="currentIndex2 == 1 ? 'rightBlock2' : ''"
      >
        <span>行政区划</span>
      </div>
    </div>
    <!-- 显示设施分类弹框 -->
    <div class="xlBlock xlBlock2" v-show="showSS">
      <div class="xlBlockItem">
        <div
          class="xlItmes"
          @click="ssClick(0)"
          :class="ssIndex == 0 ? 'xlItmes2' : ''"
        >
          <span style="color: #ffffff">电站</span>
        </div>
        <div
          class="xlItmes"
          @click="ssClick(1)"
          :class="ssIndex == 1 ? 'xlItmes2' : ''"
        >
          <span style="color: #ffffff">线路</span>
        </div>
      </div>
      <div class="xlBlockItem">
        <div
          class="xlItmes"
          @click="ssClick(2)"
          :class="ssIndex == 2 ? 'xlItmes2' : ''"
        >
          <span style="color: #ffffff">变压器</span>
        </div>
        <div
          class="xlItmes"
          @click="ssClick(3)"
          :class="ssIndex == 3 ? 'xlItmes2' : ''"
        >
          <span style="color: #ffffff">杆塔</span>
        </div>
      </div>
      <div class="xlBlockItem">
        <div
          class="xlItmes"
          @click="ssClick(4)"
          :class="ssIndex == 4 ? 'xlItmes2' : ''"
        >
          <span style="color: #ffffff">微网</span>
        </div>
      </div>
    </div>
    <!-- 行政区划弹框 -->
    <div class="qhTK" v-show="showQH">
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
    <div class="rightBtn">
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
    <div class="xlBlock" v-show="showXL">
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
    <!-- ---------------------------------- 网架弹框 ------------------------------------- -->
    <div class="zhezhao2" v-show="showTk1">
      <div class="zBlocs">
        <div class="closezB" @click="closeMbclick"></div>
        <div class="titles">
          <span>场景创建提醒</span>
        </div>
        <div class="icons"></div>
        <div class="titleItem">
          <span>目前网架场景中{{ txtSpan }}尚有</span>
          <span class="span1" v-for="(item, index) in kvList" :key="index"
            >{{ item }},</span
          >
          <span>未加载，是否需要加载？</span>
        </div>
        <div class="mbBtn mbBtn2" @click="closeMbclick2">
          <span>确定</span>
        </div>
        <div class="mbBtn" @click="tuichu2">
          <span>取消</span>
        </div>
      </div>
    </div>
    <div class="zhezhao2" v-show="showTk2">
      <div class="zBlocs">
        <div class="closezB" @click="closeMbclick3"></div>
        <div class="titles">
          <span>场景创建提醒</span>
        </div>
        <div class="icons"></div>
        <div class="titleItem">
          <span>目前网架场景中{{ txtSpan }}尚有</span>
          <span class="span1" v-for="(item, index) in kvList" :key="index"
            >{{ item }},</span
          >
          <span>未加载，需要进行加载。</span>
        </div>

        <div class="mbBtn" @click="tuichu3">
          <span>确定</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ssfx",
  data() {
    return {
      // 所有电站全部未加载时的弹框
      showTk1: false,
      showTk2: false,
      show: false,
      // 左侧按钮Index
      currentIndex2: -1,
      // 是否显示设施分类弹框
      showSS: false,
      ssIndex: -1,
      // 是否显示行政区划弹框
      showQH: false,
      // 右侧侧按钮Index
      currentIndex: -1,
      // 是否显示线路弹框
      showXL: false,
      // 右侧弹框Index
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
      // 是否显示容城县
      showRCX: false,
      // 是否显示雄县
      showXX: false,
      // 是否显示安新县
      showAXX: false,
      //  是否显示遮罩层
      showZheZhao: false,
      // 存放加载信息
      list: ["数据请求中"],
      kvList: ["220kV", "110kV", "35kV", "10kV"],
      // 存放弹框显示文本
      txtSpan: "电站模型",
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
  },
  watch: {
    showZheZhao(e) {
      if (e == true) {
      } else {
      }
    },
  },
  activated() {
    this.show = true;
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
    this.xlIndex = -1;
    this.xlIndex1 = -1;
    this.xlIndex2 = -1;
    this.xlIndex3 = -1;
    this.xlIndex4 = -1;
    this.xlIndex5 = -1;
    this.ssIndex = -1;
    this.getSelectKv();
    this.currentIndex2 = -1;
    this.showXL = false;
    this.currentIndex = -1;
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
    this.getSelectKv();
  },
  methods: {
    btnClick(e) {
      if (this.currentIndex == e) {
        this.currentIndex = -1;
        this.showXL = false;
      } else {
        this.currentIndex = e;
        this.showXL = true;
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
    // 线路选择
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
    // 左侧按钮点击
    rbtnClick(e) {
      if (this.currentIndex2 == e) {
        this.currentIndex2 = -1;
        this.showSS = false;
        this.showQH = false;
      } else {
        this.currentIndex2 = e;
        if (e == 1) {
          this.showSS = false;
          this.showQH = true;
        } else {
          this.showSS = true;
          this.showQH = false;
        }
      }
    },

    // 设施分类点击
    ssClick(e) {
      this.ssIndex = e;
      window.ssflIndex = e;
      let v;
      if (e == 0) {
        v = "DZ";
        this.getSelectKv3();
        this.txtSpan = "电站模型";
      } else if (e == 1) {
        v = "XL";
        this.getSelectKv2();
        this.txtSpan = "电网模型";
      } else if (e == 2) {
        v = "BYQ";
        this.getSelectKv2();
        this.txtSpan = "电网模型";
      } else if (e == 3) {
        v = "GT";
        this.getSelectKv2();
        this.txtSpan = "电网模型";
      } else if (e == 4) {
        v = "WW";
        this.getSelectKv2();
        this.txtSpan = "电网模型";
      }
      let data = {
        functionName: "WJFX",
        functionParameters: [
          {
            key: "SSFL",
            value: v,
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
    },
    //行政区划弹框点击
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
            value: JSON.stringify(v),
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
    },
    closeMbclick() {
      this.showTk1 = false;
    },
    closeMbclick2() {
      this.showTk1 = false;
      if (this.ssIndex == 0) {
        this.$router.push({
          path: "/wj/dianzhan",
        });
        let e = {
          one: "电网分析",
          two: "设备分析",
          three: "电站",
          right1: ">",
          right2: ">",
        };
        this.$bus.$emit("setCrumbs", e);
      } else if (this.ssIndex == 1) {
        this.$router.push({
          path: "/wj/xianlu",
        });
        let e = {
          one: "电网分析",
          two: "设备分析",
          three: "线路",
          right1: ">",
          right2: ">",
        };
        this.$bus.$emit("setCrumbs", e);
      } else if (this.ssIndex == 2) {
        this.$router.push({
          path: "/wj/byq",
        });
        let e = {
          one: "电网分析",
          two: "设备分析",
          three: "变压器",
          right1: ">",
          right2: ">",
        };
        this.$bus.$emit("setCrumbs", e);
      } else if (this.ssIndex == 3) {
        this.$router.push({
          path: "/wj/ssgt",
        });
        let e = {
          one: "电网分析",
          two: "设备分析",
          three: "杆塔",
          right1: ">",
          right2: ">",
        };
        this.$bus.$emit("setCrumbs", e);
      } else if (this.ssIndex == 4) {
        this.$router.push({
          path: "/wj/ww",
        });
        let e = {
          one: "电网分析",
          two: "设备分析",
          three: "微网",
          right1: ">",
          right2: ">",
        };
        this.$bus.$emit("setCrumbs", e);
      }
    },
    closeMbclick3() {
      this.showTk2 = false;
    },
    tuichu2() {
      this.showTk1 = false;
      this.ssIndex = -1;
    },
    tuichu3() {
      this.ssIndex = -1;
      this.showTk2 = false;
    },
    getSelectKv2() {
      let data = {
        functionName: "GetSelectKv",
        backFunctionName: "BackGetSelectKv2",
        functionParameters: [
          {
            key: "GetSelectKv",
            value: "",
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
      window.ue.interface.BackGetSelectKv2 = this.BackGetSelectKv2;
    },
    BackGetSelectKv2(e) {
      let data = JSON.parse(e).value;
      this.kvList = [];
      let newData = [];
      let newData2 = [];
      const map = {
        交流500kV: "500kV",
        交流220kV: "220kV",
        交流110kV: "110kV",
        交流35kV: "35kV",
        交流10kV: "10kV",
        "交流0.4kV": "0.4kV",
      };
      Object.keys(map).forEach((i) => {
        const val = map[i];
        if (data.includes(i)) {
          newData.remove(val);
        } else {
          newData.push(val);
        }
      });

      newData2 = [...new Set(newData)];
      this.kvList = newData2.sort();
      console.log(data, data.length, "---------------------------");
      if (data.length == 0) {
        this.showTk2 = true;
      } else if (data.length == 6) {
        this.$router.push({
          path: "/wj/xianlu",
        });
        let e = {
          one: "电网分析",
          two: "设备分析",
          three: "线路",
          right1: ">",
          right2: ">",
        };
        this.$bus.$emit("setCrumbs", e);
      } else {
        this.showTk1 = true;
      }
    },
    getSelectKv3() {
      let data = {
        functionName: "GetSelectHStationKv",
        backFunctionName: "BackGetSelectKv3",
        functionParameters: [
          {
            key: "GetSelectHStationKv",
            value: "",
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
      window.ue.interface.BackGetSelectKv3 = this.BackGetSelectKv3;
    },
    BackGetSelectKv3(e) {
      let data = JSON.parse(e).value;
      this.kvList = [];
      let newData = [];
      let newData2 = [];

      const map = {
        交流500kV: "500kV",
        交流220kV: "220kV",
        交流110kV: "110kV",
        交流35kV: "35kV",
        交流10kV: "10kV",
      };
      Object.keys(map).forEach((i) => {
        const val = map[i];
        if (data.includes(i)) {
          newData.remove(val);
        } else {
          newData.push(val);
        }
      });
      newData2 = [...new Set(newData)];
      this.kvList = newData2.sort();
      if (data.length == 0) {
        this.showTk2 = true;
      } else if (data.length == 5) {
        this.$router.push({
          path: "/wj/dianzhan",
        });
        let e = {
          one: "电网分析",
          two: "设备分析",
          three: "电站",
          right1: ">",
          right2: ">",
        };
        this.$bus.$emit("setCrumbs", e);
      } else {
        this.showTk1 = true;
      }
    },
  },
};
</script>

<style scoped>
.ssfx {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: url("img/bg.png") no-repeat !important;
  background-size: 100% 100% !important;
}
</style>
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
  right: 65px;
  bottom: 78px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.xlBlock2 {
  left: 65px !important;
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
  z-index: 999999999;
  /* background: url("img/bg2.png") no-repeat !important;
  background-size: 100% 100% !important; */
  background: rgba(1, 11, 23, 0.6);
}
.zhezhao2 {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99999999 !important;

  background: rgba(1, 11, 23, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
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

<style scoped>
.qhTK {
  width: 110px;
  height: 165px;
  position: fixed;
  bottom: 83px;
  left: 236px;
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
.tk1s {
  width: 347px;
  height: 139px;
  background: url("img/tk.png") no-repeat !important;
  background-size: 100% 100% !important;
  position: fixed;
  left: 786px;
  top: 324px;
}
.tk1s > .btn {
  position: absolute;
  width: 132px;
  height: 40px;
  left: 108px;
  top: 123px;
}
</style>
<style scoped>
.zBlocs {
  width: 549.84px;
  height: 251.63px;
  background: url("../../../../assets/image/app/bgs.png") no-repeat !important;
  background-size: 100% 100% !important;
  position: relative;
}
.zBlocs > .titles {
  width: 270px;
  height: 40px;
  position: absolute;
  left: 39px;
  top: 18px;
}

.zBlocs > .titles > span {
  font-family: YouSheBiaoTiHei;
  font-size: 40px;
  font-weight: normal;
  line-height: 40px;
  color: #e8efff;
}
.closezB {
  width: 28px;
  height: 28px;
  position: absolute;
  top: 27px;
  right: 14px;
  background: url("../../../../assets/image/app/cha.png") no-repeat !important;
  background-size: 100% 100% !important;
  cursor: pointer;
}
.icons {
  width: 32px;
  height: 28px;
  position: absolute;
  left: 20px;
  top: 97px;
  background: url("../../../../assets/image/app/icons.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.titleItem {
  width: 470px;
  min-height: 30px;
  position: absolute;
  left: 62px;
  top: 96px;
}
.titleItem > span {
  font-family: SourceHanSansSC-Regular;
  font-size: 20px;
  font-weight: normal;
  color: #ffffff;
}
.span1 {
  color: #13ffb0 !important;
  font-size: 20px !important;
}
.mbBtn2 {
  right: 127px !important;
}
.mbBtn {
  width: 100px;
  height: 40px;
  position: absolute;
  right: 15px;
  bottom: 44px;
  background: url("../../../../assets/image/app/btns.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.mbBtn > span {
  font-family: SourceHanSansSC-Regular;
  font-size: 20px;
  font-weight: normal;
  text-align: center;
  color: #c5c5c5;
}
.mbBtn:hover {
  background: url("../../../../assets/image/app/btns2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.mbBtn:hover > span {
  color: #ffffff !important;
}
</style>
