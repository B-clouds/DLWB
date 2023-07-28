<template>
  <div id="app" class="app" @contextmenu.prevent="">
    <!-- 背景 -->
    <!-- <div class="beijingImg" v-show="this.$route.path == '/index'"></div> -->
    <!-- 电网孪生背景 -->
    <div class="dwTop" v-show="this.$route.path == '/dw'"></div>
    <!-- <div class="dwBottom" v-show="this.$route.path == '/dw'"></div> -->
    <!-- 模型背景 -->
    <!-- <div class="beijingImg" v-show="this.$route.path == '/mx'"></div>
    <div class="beijingImg2" v-show="this.$route.path == '/mx'"></div>
    <div class="beijingImg3" v-show="this.$route.path == '/mx'"></div> -->
    <div v-show="this.$route.path != '/loading'">
      <div v-show="this.$route.path != '/hongguan'">
        <!-- top图片 -->
        <div class="tops" v-show="this.$route.path != '/login'">
          <div class="biaoti">
            <span>{{ xtName }}</span>
          </div>
          <div class="tianqi"></div>
          <span class="span">27℃</span>
          <div class="fenge"></div>
          <span class="span">2023-01-03 14:47:54</span>
          <div class="t_right">
            <div class="tr_img"></div>
            <div class="tr_span" @click="setLogin">
              <span>小王 IP528131</span>
            </div>
            <div class="tr_xia"></div>
            <div class="x_tk" v-show="showLogin" @click="tcdl"></div>
          </div>
        </div>
        <div v-show="this.$route.path != '/daohang'">
          <div v-show="this.$route.path != '/dhxq'">
            <div v-show="this.$route.path != '/dhxq2'">
              <!-- 全局按钮 -->
              <div v-show="this.$route.path != '/login'">
                <div v-show="this.$route.path != '/mx'">
                  <div class="qselect">
                    <span class="span1">电网类型</span>
                    <div class="qinput">
                      <el-select
                        v-model="qs_value"
                        @visible-change="qsClick"
                        @change="lxClick"
                        placeholder=""
                        ref="selects"
                      >
                        <el-option
                          v-for="item in qselect"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        >
                        </el-option>
                      </el-select>
                      <img
                        @click="zhankai"
                        v-show="!qs_show"
                        src="@/assets/image/xia.png"
                      />
                      <img v-show="qs_show" src="@/assets/image/shang.png" />
                    </div>
                  </div>
                  <div class="dwsjSpan" v-if="showGH == 0">
                    <span>电网时间</span>
                  </div>
                  <div class="riqi" v-if="showGH == 0">
                    <el-date-picker
                      v-model="value1"
                      @change="dateClick"
                      value-format="yyyy-MM-dd"
                      type="date"
                      placeholder="选择日期"
                      popper-class="riqiClass"
                    >
                    </el-date-picker>
                    <img src="@/assets/image/riqi.png" />
                  </div>
                  <div class="dwsjSpan" v-if="showGH == 1">
                    <span>电网时间</span>
                  </div>
                  <div class="riqi" v-if="showGH == 1">
                    <el-date-picker
                      v-model="value3"
                      @change="dateClick2"
                      value-format="yyyy-MM-dd"
                      type="date"
                      placeholder="选择日期"
                      popper-class="riqiClass"
                    >
                    </el-date-picker>
                    <img src="@/assets/image/riqi.png" />
                  </div>
                  <div class="dwsjSpan" v-if="showGH == 2">
                    <span>电网时间</span>
                  </div>
                  <div class="riqi" v-if="showGH == 2">
                    <el-date-picker
                      v-model="value2"
                      @change="dateClick3"
                      type="year"
                      value-format="yyyy"
                      placeholder="选择年"
                    >
                    </el-date-picker>
                    <img src="@/assets/image/riqi.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 导航栏 -->
        <div v-show="this.$route.path != '/daohang'">
          <div v-show="this.$route.path != '/dhxq'">
            <div v-show="this.$route.path != '/dhxq2'">
              <bottom
                @showMBs="showMBs"
                v-show="this.$route.path != '/login'"
              ></bottom>
            </div>
          </div>
        </div>

        <!-- 设置 -->
        <!-- <setUp v-show="this.$route.path != '/login'"></setUp> -->
      </div>
      <div v-show="this.$route.path != '/daohang'">
        <div v-show="this.$route.path != '/dhxq'">
          <div v-show="this.$route.path != '/dhxq2'">
            <!-- 全局按钮 -->
            <div v-show="this.$route.path != '/login'">
              <div class="shijiao" v-show="this.$route.path != '/mx'">
                <div
                  class="sj_block weixing"
                  @click="sjClick(0)"
                  :class="sjIndex == 0 ? 'sj_block2' : ''"
                >
                  <span>卫星视角</span>
                  <img v-show="sjIndex != 0" src="@/assets/image/sjImg1.png" />
                  <img v-show="sjIndex == 0" src="@/assets/image/sjImg2.png" />
                </div>
                <div
                  class="sj_block hangpai"
                  @click="sjClick(1)"
                  :class="sjIndex == 1 ? 'sj_block2' : ''"
                >
                  <span>航拍视角</span>
                  <img v-show="sjIndex != 1" src="@/assets/image/sjImg1.png" />
                  <img v-show="sjIndex == 1" src="@/assets/image/sjImg2.png" />
                </div>
                <div
                  class="sj_block wurenji"
                  @click="sjClick(2)"
                  :class="sjIndex == 2 ? 'sj_block2' : ''"
                >
                  <span>无人机视角</span>
                  <img v-show="sjIndex != 2" src="@/assets/image/sjImg1.png" />
                  <img v-show="sjIndex == 2" src="@/assets/image/sjImg2.png" />
                </div>
                <div
                  class="sj_block xingren"
                  @click="sjClick(3)"
                  :class="sjIndex == 3 ? 'sj_block2' : ''"
                >
                  <span>行人视角</span>
                  <img v-show="sjIndex != 3" src="@/assets/image/sjImg1.png" />
                  <img v-show="sjIndex == 3" src="@/assets/image/sjImg2.png" />
                </div>
                <!-- 夜间模式 -->
                <div class="yejian" @click="yjClick">
                  <div class="img1"></div>
                  <span>夜间模式</span>
                  <div class="img2">
                    <img
                      v-show="yjIndex != 0"
                      src="@/assets/image/sjImg1.png"
                    />
                    <img
                      v-show="yjIndex == 0"
                      src="@/assets/image/sjImg2.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 面包屑 -->
    <div v-show="this.$route.path != '/hongguan'">
      <div v-show="this.$route.path != '/mx'">
        <crumbs v-show="this.$route.path != '/login'" />
      </div>
    </div>

    <keep-alive>
      <!-- key:生成一个唯一标识，用来重新加载路由-重新渲染图表 -->
      <router-view />
    </keep-alive>
    <!-- 蒙版 -->
    <div class="zhezhao" v-show="showMB">
      <div class="zBlocs">
        <div class="closezB" @click="closeMBclick"></div>
        <div class="titles">
          <span>图形加载提醒</span>
        </div>
        <div class="icons"></div>
        <div class="titleItem">
          <span>当前场景电网构架未加载，请立即加载！</span>
        </div>
        <div class="mbBtn" @click="cjClick">
          <span>加载</span>
        </div>
      </div>
    </div>
    <!-- ue控制显示隐藏的模板 -->
    <div class="zhezhao" v-show="showUEKZ"></div>
  </div>
</template>

<script>
import bottom from "./components/bottom/bottom.vue";
import setUp from "./components/setUp/setUp.vue";
import time from "./utils/currentDate";
import crumbs from "./components/crumbs/crumbs.vue";
export default {
  name: "App",
  components: {
    bottom,
    setUp,
    crumbs,
  },
  data() {
    return {
      showUEKZ: false,
      showLogin: false,
      sjIndex: 0,
      yjIndex: 0,
      qselect: [
        {
          value: 0,
          label: "现状电网",
        },
        {
          value: 1,
          label: "过渡电网",
        },
        {
          value: 2,
          label: "规划电网",
        },
      ],
      qs_value: 0,
      qs_show: false,
      showExit: false,
      //  现状电网
      value1: "",
      // 过度电网
      value3: "",
      // 规划电网
      value2: "2035",
      showGH: 0,
      isShowZNZ: true, //是否显示指南针
      showMB: false,

      xtName: "", //系统名称
    };
  },
  mounted() {
    this.setupClientBindings();
    this.xtName = window.xtName;
    let v = {
      ChooseType: "SwitchPowerType",
      value: "now",
    };
    let data = {
      functionName: "Sundry",
      functionParameters: [
        {
          key: "Sundry",
          value: JSON.stringify(v), //切换类型
        },
      ],
    };
    ue.interface.broadcast("PSAPI", JSON.stringify(data));
    let times = time.getCurrentDate();
    this.value1 = times.year + "-" + times.month + "-" + times.date;
    this.value3 = times.year + "-" + times.month + "-" + times.date;
    window.xzRiQi = this.value1;
    this.value2 = "2035";

    let v2 = {
      ChooseType: "CurTime",
      value: this.value1,
    };
    let data2 = {
      functionName: "Sundry",
      functionParameters: [
        {
          key: "Sundry",
          value: JSON.stringify(v2), //切换类型
        },
      ],
    };
    ue.interface.broadcast("PSAPI", JSON.stringify(data2));
    window.isXZ = 1;

    let that = this;
    that.$bus.$on("setShiJiao", (e) => {
      that.sjIndex = e;
      console.log("11111", e);
      let sj;
      if (e == 0) {
        sj = "Satellite";
      } else if (e == 1) {
        sj = "Aerial";
      } else if (e == 2) {
        sj = "Drone";
      } else if (e == 3) {
        sj = "Pedestrian";
      }
      let v = {
        ViewType: sj,
      };
      let data = {
        functionName: "ChangeViewType",
        functionParameters: [
          {
            key: "ChangeViewType",
            value: JSON.stringify(v),
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
    });
    that.$bus.$on("setYeJian", (e) => {
      that.yjIndex = e;
      let yj;
      if (that.yjIndex == 0) {
        yj = true;
      } else {
        yj = false;
      }
      let data = {
        functionName: "NavigationPage",
        functionParameters: [
          {
            key: "YJMS",
            value: yj,
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
    });
    // that.$bus.$on("isShowZNZ", (e) => {
    //   that.isShowZNZ = e;
    //   setTimeout(() => {
    //     let v = { ChooseType: "ShowCompass", value: e };
    //     let data = {
    //       functionName: "Sundry",
    //       functionParameters: [
    //         {
    //           key: "Sundry",
    //           value: JSON.stringify(v),
    //         },
    //       ],
    //     };
    //     ue.interface.broadcast("PSAPI", JSON.stringify(data));
    //   }, 50);
    // });
  },
  methods: {
    setLogin() {
      this.showLogin = !this.showLogin;
    },
    tcdl() {
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

      this.$router.push("/login");
      let data = {
        functionName: "login",
        functionParameters: [
          {
            key: "loginOut",
            value: true,
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
      this.showLogin = false;
    },
    showMBs() {
      this.showMB = true;
    },
    closeMBclick() {
      this.showMB = false;
    },
    cjClick() {
      this.showMB = false;
      this.$router.push({
        path: "/hongguan",
      });
      let v = { ChooseType: "SwitchMactv", value: true };
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
    showZNZClick() {
      if (this.isShowZNZ) {
        this.isShowZNZ = false;
        let v = { ChooseType: "ShowCompass", value: false };
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
        this.isShowZNZ = true;
        let v = { ChooseType: "ShowCompass", value: true };
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
    tuiChuDL() {
      this.$router.push({
        path: "/login",
      });
      this.showExit = false;
    },
    exitCX() {
      let data = {
        functionName: "Exit",
        backFunctionName: "",
        functionParameters: [],
      };

      ue.interface.broadcast("PSAPI", JSON.stringify(data));
    },
    exitClick() {
      this.showExit = !this.showExit;
    },
    // 年月日 日期选择器
    dateClick(e) {
      window.xzRiQi = e;
      let v = {
        ChooseType: "CurTime",
        value: e,
      };
      let data = {
        functionName: "Sundry",
        functionParameters: [
          {
            key: "Sundry",
            value: JSON.stringify(v), //切换类型
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
    },
    dateClick2(e) {
      window.xzRiQi = e;
      let v = {
        ChooseType: "CurTime",
        value: e,
      };
      let data = {
        functionName: "Sundry",
        functionParameters: [
          {
            key: "Sundry",
            value: JSON.stringify(v), //切换类型
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
    },
    dateClick3(e) {
      let v = {
        ChooseType: "CurTime",
        value: this.value2 + "-01-01",
      };
      let data = {
        functionName: "Sundry",
        functionParameters: [
          {
            key: "Sundry",
            value: JSON.stringify(v), //切换类型
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
    },
    setupClientBindings() {
      if (window.ue == null || window.ue.interface == null) {
        return;
      }
      window.ue.interface.__PiClientEvent = this.piClientEvent;
      window.ue.interface.onNodePositionUpdate = this.onNodePositionUpdate;
      window.ue.interface.ZFonNodePositionUpdate = this.ZFonNodePositionUpdate;
      window.ue.interface.ZDonNodePositionUpdate = this.ZDonNodePositionUpdate;
      window.ue.interface.SSonNodePositionUpdate = this.SSonNodePositionUpdate;
      window.ue.interface.ZFJGonNodePositionUpdate =
        this.ZFJGonNodePositionUpdate;

      window.ue.interface.selectIntervalInfo = this.selectIntervalInfo;
      window.ue.interface.initWeb = this.initWeb;
      window.ue.interface.closeLoading = this.closeLoading;
      window.ue.interface.closeLoading2 = this.closeLoading2;
      window.ue.interface.getPointPosition = this.getPointPosition;
      window.ue.interface.goDhxq = this.goDhxq;
      window.ue.interface.getXianMing = this.getXianMing;
      window.ue.interface.goChushihua = this.goChushihua;
      window.ue.interface.synchronization = this.synchronization;
      window.ue.interface.getQDZDID = this.getQDZDID;
      window.ue.interface.getGLJDID = this.getGLJDID;
      window.ue.interface.getGTBXQDZD = this.getGTBXQDZD;
      window.ue.interface.showUEKZs = this.showUEKZs;
    },
    showUEKZs(e) {
      let obj = JSON.parse(e);
      this.showUEKZ = obj;
    },
    // 获取自定义布线设为起点设为终点
    getGTBXQDZD(e) {
      let obj = JSON.parse(e);
      let that = this;
      if (obj.type == "begin") {
        // 起点
        setTimeout(() => {
          that.$bus.$emit("swqds", obj.data);
          // let v = {
          //   ChooseType: "CancelSelectBind",
          //   SelectType: "false",
          //   Oid: obj.data.oid,
          // };
          // let data = {
          //   functionName: "CableMaintenance",
          //   functionParameters: [
          //     {
          //       key: "CableMaintenance",
          //       value: JSON.stringify(v),
          //     },
          //   ],
          // };
          // ue.interface.broadcast("PSAPI", JSON.stringify(data));
        }, 50);
      } else {
        // 终点
        setTimeout(() => {
          that.$bus.$emit("swzds", obj.data);
          // let v = {
          //   ChooseType: "CancelSelectBind",
          //   SelectType: "false",
          //   Oid: obj.data.oid,
          // };
          // let data = {
          //   functionName: "CableMaintenance",
          //   functionParameters: [
          //     {
          //       key: "CableMaintenance",
          //       value: JSON.stringify(v),
          //     },
          //   ],
          // };
          // ue.interface.broadcast("PSAPI", JSON.stringify(data));
        }, 50);
      }
    },
    // 同步行政区划、地图加载，首页与默认页
    synchronization(e) {
      let datas = JSON.parse(e).value;
      let that = this;
      setTimeout(() => {
        that.$bus.$emit("showRongcheng", datas);
      }, 50);
    },
    goChushihua() {
      let that = this;
      setTimeout(() => {
        that.$bus.$emit("chushihuaSY");
      }, 10);
    },
    piClientEvent(eventName, param) {},
    onNodePositionUpdate(e) {
      this.$bus.$emit("getKJ", e);
    },
    ZFonNodePositionUpdate(e) {
      this.$bus.$emit("getZXKJ", e);
    },
    ZDonNodePositionUpdate(e) {
      this.$bus.$emit("getZDKJ", e);
    },
    SSonNodePositionUpdate(e) {
      this.$bus.$emit("getSSKJ", e);
    },
    ZFJGonNodePositionUpdate(e) {
      this.$bus.$emit("getZFJGS", e);
    },

    initWeb(e) {
      let that = this;
      that.$bus.$emit("navIndex", e);
      if (e == "1000") {
        that.$router.push("/defalut");
      } else if (e == "100") {
        that.$router.push({
          path: "/index",
        });
        // 首页
      } else if (e == "101") {
        // 电网孪生
        that.$router.push({
          path: "/dw",
        });
      } else if (e == "102") {
        // 网架分析
        that.$router.push({
          path: "/wj",
        });
      } else if (e == "103") {
        // 虚拟规划
        that.$router.push({
          path: "/xn",
        });
      } else if (e == "104") {
        // 模型管理
        that.$router.push({
          path: "/mx",
        });
      } else if (e == "105") {
        // 数据管理
        that.$router.push({
          path: "/xx",
        });
      } else if (e == "200") {
        // 宏观页面
        that.$router.push({
          path: "/hongguan",
        });
        let v = { ChooseType: "SwitchMactv", value: true };
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
      } else if (e == "300") {
        that.$router.push({
          path: "/dhxq2",
        });
      }
    },
    // 进入导航详情页面
    goDhxq() {
      let that = this;
      that.$router.push({
        path: "/dhxq",
      });
    },
    qsClick(e) {
      this.qs_show = e;
    },
    selectIntervalInfo(e) {
      let that = this;
      that.$bus.$emit("selectJG", e);
    },
    zhankai() {
      this.$nextTick((_) => {
        this.$refs.selects.toggleMenu();
      });
    },
    lxClick(value) {
      let name = "";
      this.showGH = value;
      if (value == 0) {
        name = "now";
        let times = time.getCurrentDate();
        this.value1 = times.year + "-" + times.month + "-" + times.date;
        window.xzRiQi = this.value1;
        let v = {
          ChooseType: "CurTime",
          value: this.value1,
        };
        let data = {
          functionName: "Sundry",
          functionParameters: [
            {
              key: "Sundry",
              value: JSON.stringify(v), //切换类型
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(data));
        window.isXZ = 1;
      } else if (value == 1) {
        name = "excessive";
        window.isXZ = 2;
      } else if (value == 2) {
        name = "programme";
        window.isXZ = 0;
        let v = {
          ChooseType: "CurTime",
          value: this.value2 + "-01-01",
        };
        let data = {
          functionName: "Sundry",
          functionParameters: [
            {
              key: "Sundry",
              value: JSON.stringify(v), //切换类型
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(data));
      }
      let that = this;
      setTimeout(() => {
        that.$bus.$emit("leixChaXun");
      }, 50);
      let v = {
        ChooseType: "SwitchPowerType",
        value: name,
      };
      let data = {
        functionName: "Sundry",
        functionParameters: [
          {
            key: "Sundry",
            value: JSON.stringify(v), //切换类型
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
    },
    closeLoading(e) {
      let that = this;
      that.$bus.$emit("closeLoading", JSON.parse(e));
    },
    closeLoading2() {
      let that = this;
      setTimeout(() => {
        that.$bus.$emit("closeLoading2");
      }, 50);
    },
    // 网架分析-网格分析
    getPointPosition() {
      let that = this;
      setTimeout(() => {
        that.$bus.$emit("getPointPosition");
      }, 50);
    },
    // 选择视角
    sjClick(e) {
      this.sjIndex = e;
      let sj;
      if (e == 0) {
        sj = "Satellite";
      } else if (e == 1) {
        sj = "Aerial";
      } else if (e == 2) {
        sj = "Drone";
      } else if (e == 3) {
        sj = "Pedestrian";
      }
      let v = {
        ViewType: sj,
      };
      let data = {
        functionName: "ChangeViewType",
        functionParameters: [
          {
            key: "ChangeViewType",
            value: JSON.stringify(v),
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
      console.log(data, "dainji");
    },
    // 夜间模式
    yjClick() {
      if (this.yjIndex == 0) {
        this.yjIndex = 1;
      } else {
        this.yjIndex = 0;
      }

      let yj;
      if (this.yjIndex == 0) {
        yj = true;
      } else {
        yj = false;
      }
      let data = {
        functionName: "NavigationPage",
        functionParameters: [
          {
            key: "YJMS",
            value: yj,
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
    },
    // 获取县名
    getXianMing(e) {
      window.xianMing = e;
    },
    // 获取起点终点ID
    getQDZDID(e) {
      let obj = JSON.parse(e);
      let that = this;
      if (obj.type == "begin") {
        // 起点
        setTimeout(() => {
          that.$bus.$emit("qdId", obj.date);
        }, 50);
      } else {
        // 终点
        setTimeout(() => {
          that.$bus.$emit("zdId", obj.date);
        }, 50);
      }
    },
    //ue控制关键模型信息选中
    getGLJDID(e) {
      let obj = JSON.parse(e);
      let that = this;

      setTimeout(() => {
        that.$bus.$emit("kzxzMX", obj);
      }, 50);
    },
  },
};
</script>

<style>
.el-table .el-table__cell {
  padding: 0 !important;
}
/* 日期选择器单独样式 */
.riqiClass {
  border: 0 !important;
  background: transparent !important;
  background: url("assets/image/riqiBg.png") no-repeat !important;
  background-size: 100% 100% !important;
  top: 144px !important;
  color: #fff !important;
}
/* 选中日期标头 */
.el-date-picker__header-label {
  color: #e3e9ef !important;
}
/* 左右按钮 */
.el-picker-panel__icon-btn {
  color: #21cfff !important;
}
/* 日期 */
.el-date-table th {
  color: #a4dbea !important;
  border: 0;
}
/* 日期下线条颜色 */
.el-picker-panel .el-date-table th {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.el-date-picker__header--bordered {
  border: 0;
}
.el-month-table td .cell {
  color: #fff;
}
.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 100% !important;
}
.el-input__prefix {
  display: none;
}

.el-date-editor > .el-input__inner {
  background-color: transparent;
  border: 0;
  color: #e3e9ef;
  font-size: 14px !important;
  width: 120% !important;
  margin-left: -16px;
  margin-top: -3px !important;
}
.el-date-table td.current:not(.disabled) span {
  border-radius: 0% !important;
  background-color: transparent !important;
  background: url("assets/image/bbg4.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.el-year-table td .cell {
  color: #ccc !important;
}
.el-year-table td.today .cell {
  color: #409eff !important;
}
.el-year-table td .cell:hover,
.el-year-table td.current:not(.disabled) .cell {
  color: #409eff !important;
}
/* .el-date-table td span {
  border-radius: 0% !important;
  background-color: transparent !important;
  background: url("assets/image/bbg5.png") no-repeat !important;
  background-size: 100% 100% !important;
} */
</style>
<style>
/* //element-ui table的去除右侧滚动条的样式  */
::-webkit-scrollbar {
  width: 1px;
  height: 1px;
} /* // 滚动条的滑块 */
::-webkit-scrollbar-thumb {
  background-color: #a1a3a9;
  border-radius: 0px;
}
/* 下拉框样式自定义 */
.el-select {
  width: 100% !important;
  height: 100% !important;
}
.qinput .el-select > .el-input > .el-input__inner {
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
.el-select > .el-input > .el-input__inner {
  height: 34px !important;
  border-radius: 0 !important;
  background-color: transparent !important;
  border: 0 !important;
  font-family: SourceHanSansSC-Regular !important;
  font-size: 14px !important;
  font-weight: normal !important;
  line-height: 34px !important;
  margin-left: 4px;
  color: #ffffff !important;
}
.el-input__suffix {
  display: none !important;
}
.popper__arrow {
  display: none !important;
}
.el-popper[x-placement^="bottom"] {
  margin-top: 2px !important;
}
.el-select-dropdown {
  opacity: 0.95 !important;
  width: 180px;
  /* top: 137px !important; */
  margin-left: 0px !important;
  background: url("assets/image/newXiala.png") no-repeat !important;
  background-size: 100% 100% !important;
  box-sizing: border-box !important;
  border: 0 !important;
  border-radius: 0 !important;
}
.el-select-dropdown__item.selected {
  color: #ffffff !important;
}
.el-select-dropdown__item {
  font-family: SourceHanSansSC-Regular !important;
  font-size: 14px !important ;
  font-weight: normal !important;
  color: rgba(255, 255, 255, 0.6) !important;
}
.el-select-dropdown__item.hover,
.el-select-dropdown__item:hover {
  opacity: 0.95 !important;
  background: #1a3e6d !important;
}
input {
  width: 100%;
  height: 100%;
  background: none;
  outline: none;
  border: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  padding-left: 10.81px;
  margin-top: 0px !important;
  font-family: SourceHanSansSC-Regular;
  font-size: 14px;
  font-weight: normal;
  line-height: 16px;
  letter-spacing: 0em;
  color: #ffffff;
}
input:focus {
  border: none;
}
</style>
<style scoped>
.zhezhao {
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
.zhezhao > .zBlocs {
  width: 549.84px;
  height: 251.63px;
  background: url("assets/image/app/bgs.png") no-repeat !important;
  background-size: 100% 100% !important;
  position: relative;
}
.zhezhao > .zBlocs > .titles {
  width: 270px;
  height: 40px;
  position: absolute;
  left: 39px;
  top: 18px;
}

.zhezhao > .zBlocs > .titles > span {
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
  background: url("assets/image/app/cha.png") no-repeat !important;
  background-size: 100% 100% !important;
  cursor: pointer;
}
.icons {
  width: 32px;
  height: 28px;
  position: absolute;
  left: 20px;
  top: 97px;
  background: url("assets/image/app/icons.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.titleItem {
  width: 470px;
  height: 30px;
  position: absolute;
  left: 62px;
  top: 96px;
  display: flex;
  align-items: center;
}
.titleItem > span {
  font-family: SourceHanSansSC-Regular;
  font-size: 22px;
  font-weight: normal;
  color: #ffffff;
}
.mbBtn {
  width: 100px;
  height: 40px;
  position: absolute;
  right: 15px;
  bottom: 44px;
  background: url("assets/image/app/btns.png") no-repeat;
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
  background: url("assets/image/app/btns2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.mbBtn:hover > span {
  color: #ffffff !important;
}
.keShi {
  width: 25px;
  height: 25px;
  position: absolute;
  top: 37px;
  right: 7px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 99999;
}
.keShi > .img1 {
  width: 14px;
  height: 12px;
  background: url("assets/image/app/img.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.keShi > .img2 {
  width: 14px;
  height: 10px;
  background: url("assets/image/app/img2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.exit {
  width: 22px;
  height: 22px;
  position: fixed;
  top: 8px;
  right: 9px;
  z-index: 88;
  cursor: pointer;
}
.exit > img {
  width: 100%;
  height: 100%;
}
.exitTan {
  width: 124px;
  height: 48px;
  position: fixed;
  top: 42px;
  right: 2px;
  z-index: 87;
  background: url("assets/image/xiala.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.exitBlocks {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.exitBlocks > .img1 {
  width: 22px;
  height: 18px;
  margin-left: 12px;
  margin-right: 6px;
  background: url("assets/image/r1.png") no-repeat;
  background-size: 100% 100%;
}
.exitBlocks > .img2 {
  width: 19px;
  height: 20px;
  margin-left: 14px;
  margin-right: 8px;
  background: url("assets/image/t1.png") no-repeat;
  background-size: 100% 100%;
}
.exitBlocks > span {
  font-family: SourceHanSansCN-Regular;
  font-size: 18px;
  font-weight: normal;
  letter-spacing: 0em;
  color: #b9c2cc;
  cursor: pointer;
}
.exitBlocks:hover {
  background: url("assets/image/xiala2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.exitBlocks:hover > span {
  color: #ffffff;
}
.exitBlocks:hover > .img1 {
  background: url("assets/image/r1a.png") no-repeat;
  background-size: 100% 100%;
}
.exitBlocks:hover > .img2 {
  background: url("assets/image/t1a.png") no-repeat;
  background-size: 100% 100%;
}
.qselect {
  width: 193px;
  height: 32px;
  position: fixed;
  left: 679px;
  top: 88px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 101;
}
.qselect > .span1 {
  font-family: SourceHanSansSC-Regular;
  font-size: 14px;
  font-weight: normal;
  color: #fafafa;
}
.dwsjSpan {
  width: 100px;
  height: 32px;
  position: fixed;
  left: 896px;
  top: 88px;
  z-index: 101;
  display: flex;
  align-items: center;
}
.dwsjSpan > span {
  font-family: SourceHanSansSC-Regular;
  font-size: 14px;
  font-weight: normal;
  color: #fafafa;
}
.qinput {
  width: 127px;
  height: 32px;
  background: url("assets/image/newBG.png") no-repeat !important;
  background-size: 100% 100% !important;
  position: relative;
}
.qinput > img {
  position: absolute;
  top: 13px;
  right: 8px;
  width: 10px;
  height: 6px;
}
.riqi {
  width: 127px;
  height: 32px;
  position: fixed;
  left: 962px;
  top: 88px;
  z-index: 101;
  background: url("assets/image/newBG.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.riqi > img {
  width: 12px;
  height: 12px;
  position: absolute;
  top: 10px;
  right: 11px;
}

.tops {
  left: 0;
  top: 0px;
  width: 100%;
  height: 37px;
  position: absolute;
  background: url("assets/image/top2.png") no-repeat !important;
  background-size: 100% 100% !important;
  z-index: 10;
  display: flex;
  align-items: center;
}
.tops > .tianqi {
  width: 18px;
  height: 15px;
  margin-left: 32px;
  margin-top: -2px;
  background: url("assets/image/tianqi.png") no-repeat !important;
  background-size: 100% 100% !important;
  margin-right: 9px;
}
.tops > .biaoti {
  width: 1000px;
  height: 100%;
  position: absolute;
  left: 460px;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tops > .biaoti > span {
  font-family: Source Han Sans SC;
  font-size: 22px;
  font-weight: 500;
  letter-spacing: 0.12em;
  color: #ffffff;
}
.tops > .wendu {
  width: 18px;
  height: 17px;
  margin-left: 9px;
  margin-top: -2px;
  background: url("assets/image/wendu.png") no-repeat !important;
  background-size: 100% 100% !important;
  margin-right: 9px;
}
.tops > .fenge {
  width: 0px;
  height: 12px;
  opacity: 0.5;
  border: 1px solid #b0c3e8;
  margin-left: 10px;
  margin-right: 10px;
}
.tops > .span {
  font-family: SourceHanSansCN-Regular-Regular;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 0.53px;
  color: #b0c3e8;
  text-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
}
.t_right {
  width: 164px;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  margin-top: -2px;
  cursor: pointer;
}
.t_right > .tr_img {
  width: 25px;
  height: 25px;
  background: url("assets/image/tx.png") no-repeat !important;
  background-size: 100% 100% !important;
  margin-left: 11px;
  margin-right: 7px;
}
.t_right > .tr_span {
  width: 92px;
  height: 24px;
  margin-right: 6px;
  display: flex;
  align-items: center;
  overflow: hidden;
}
.t_right > .tr_span > span {
  font-family: SourceHanSansCN-Regular-Regular;
  font-size: 13px;
  font-weight: normal;
  color: #b0c3e8;
}
.t_right > .tr_xia {
  width: 7px;
  height: 7px;
  background: url("assets/image/tr_xia.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.t_right > .x_tk {
  position: absolute;
  top: 39px;
  left: 45px;
  width: 102px;
  height: 38px;
  background: url("assets/image/tc.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.tq {
  position: absolute;
  left: 16px;
  top: 2px;
  width: 234.29px;
  height: 32.79px;
  background: url("assets/image/tq.png") no-repeat !important;
  background-size: 100% 100% !important;
  z-index: 10;
}
.dwTop {
  width: 100%;
  height: 140px;
  position: fixed;
  left: 0;
  top: 0;
  background: url("assets/image/dwTop.png") no-repeat !important;
  background-size: 100% 100% !important;
  z-index: -1;
}
.dwBottom {
  width: 100%;
  height: 85.97px;
  position: fixed;
  left: 0;
  bottom: 0;
  background: url("assets/image/dwBottom.png") no-repeat !important;
  background-size: 100% 100% !important;
  z-index: -1;
}
.mxLeft {
  width: 630px;
  height: 100%;
  left: 0;
  bottom: 0;
  background: url("assets/image/mxLeft.png") no-repeat !important;
  background-size: 100% 100% !important;
  z-index: -1;
}
</style>
<style>
/* 引入全局css样式 */
@import "assets/css/index.css";
</style>
<style>
.g_right {
  width: 300px;
  height: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
}
/* app背景css样式 */
.app {
  width: 100%;
  height: 100vh;
  position: fixed;

  /* 2D静态底图 */
}

/* 如果使用整体背景图，可在此处更改替换 */
/* .app > .beijingImg {
  width: 100%;
  height: 164.5px;
  background: url("assets/image/y1.png") no-repeat !important;
  background-size: 100% 100% !important;
  z-index: -1;
  position: absolute;
  left: 0;
  top: 0;
}
.app > .beijingImg2 {
  width: 403px;
  height: 100%;
  background: url("assets/image/y2.png") no-repeat !important;
  background-size: 100% 100% !important;
  z-index: -2;
  position: absolute;
  left: 0;
  top: 0;
}
.app > .beijingImg3 {
  width: 403px;
  height: 100%;
  background: url("assets/image/y2.png") no-repeat !important;
  background-size: 100% 100% !important;
  z-index: -2;
  position: absolute;
  right: 0;
  top: 0;
} */
</style>
<style>
/* --------------------------阴影样式-------------------------- */
/* 顶部阴影 */
.shadowTop {
  width: 100%;
  height: 120px;
  position: fixed;
  top: 0;
  left: 0;
  background: url("assets/image/app/top.png") no-repeat;
  background-size: 100% 100%;
  z-index: 2;
}
/* 左侧阴影 */
.shadowLeft {
  width: 574px;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: url("assets/image/app/left.png") no-repeat;
  background-size: 100% 100%;
  z-index: 2;
}
/* 右侧阴影 */
.shadowRight {
  width: 574px;
  height: 100%;
  position: fixed;
  right: 0;
  top: 0;
  background: url("assets/image/app/right.png") no-repeat;
  background-size: 100% 100%;
  z-index: 2;
}
/* 底部阴影 */
</style>
<style scoped>
.shijiao {
  width: 1080px;
  height: 97px;
  position: fixed;
  left: 420px;
  top: 36px;
  background: url("assets/image/shijiao.png") no-repeat;
  background-size: 100% 100%;
  z-index: 100;
}
.yejian {
  position: absolute;
  width: 108px;
  height: 32px;
  right: 280px;
  top: 50px;
  background: url("assets/image/yejian.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.yejian > .img1 {
  width: 14px;
  height: 14px;
  margin-left: 7px;
  margin-right: 4px;
  background: url("assets/image/yj.png") no-repeat;
  background-size: 100% 100%;
}
.yejian > span {
  font-family: SourceHanSansCN-Regular-Regular;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 1px;
  color: #fff;
  margin-right: 5px;
}
.yejian > .img2 {
  width: 14px;
  height: 14px;
}
.yejian > .img2 > img {
  width: 100%;
  height: 100%;
}

.sj_block {
  width: 108px;
  height: 32px;
  position: absolute;
  background: url("assets/image/sj.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.sj_block > span {
  font-family: SourceHanSansCN-Regular-Regular;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 1px;
  color: #dbdbdb;
  margin-left: 9px;
  margin-right: 16px;
}
.sj_block2 > span {
  color: #27e9ff;
}

.sj_block > img {
  width: 14px;
  height: 14px;
}

.weixing {
  left: 86px;
  top: 7px;
}
.hangpai {
  left: 214px;
  top: 7px;
}
.wurenji {
  left: 758px;
  top: 7px;
}
.wurenji > span {
  margin-left: 8px;
  margin-right: 4px;
}
.xingren {
  top: 7px;
  right: 86px;
}
</style>

<style>
/* 全局动画样式 */

/* 左侧动画 */
.transitionLeft-enter,
.transitionLeft-leave-to {
  opacity: 0;
  transform: translateX(-228px);
}
.transitionLeft-enter-active,
.transitionLeft-leave-active {
  transition: all 1s ease;
}
.transitionLeft2-enter,
.transitionLeft2-leave-to {
  opacity: 0;
  transform: translateX(-1080px);
}
.transitionLeft2-enter-active,
.transitionLeft2-leave-active {
  transition: all 1s ease;
}
/* 右侧动画 */
.transitionRight-enter,
.transitionRight-leave-to {
  opacity: 0;
  transform: translateX(228px);
}
.transitionRight-enter-active,
.transitionRight-leave-active {
  transition: all 1s ease;
}
/* 右侧动画 */
.transitionRight2-enter,
.transitionRight2-leave-to {
  opacity: 0;
  transform: translateX(28px);
}
.transitionRight2-enter-active,
.transitionRight2-leave-active {
  transition: all 1s ease;
}
/* 底部动画 */
.transitionBottom-enter,
.transitionBottom-leave-to {
  opacity: 0;
  transform: translateY(228px);
}
.transitionBottom-enter-active,
.transitionBottom-leave-active {
  transition: all 1s ease;
}
/* 顶部动画 */
.transitionTop-enter,
.transitionTop-leave-to {
  opacity: 0;
  transform: translateY(-228px);
}
.transitionTop-enter-active,
.transitionTop-leave-active {
  transition: all 1s ease;
}
</style>
