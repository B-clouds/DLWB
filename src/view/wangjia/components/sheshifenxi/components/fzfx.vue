<template>
  <div class="newLieBiao">
    <!-- 返回默认页面 -->
    <div class="fh_mr" @click="fhMrClick"></div>
    <div class="s_show1" v-show="!showXX"></div>
    <div class="s_show2" v-show="!showXX"></div>
    <!-- 信息缩放按钮 -->
    <div class="xxsf" :class="showXX ? 'xxsf2' : ''" @click="sfxxClick"></div>
    <!-- 左侧阴影 -->
    <div class="zuo"></div>
    <!-- 左侧模块按钮 -->
    <div class="leftBtn" v-show="!showTJ && showXX">
      <!-- 功能按钮 -->
      <div class="btnBlock">
        <div
          class="btnItem"
          @click="inquire"
          :class="btnIndex == 0 ? 'btnItem2' : ''"
        >
          <span>查询</span>
        </div>
      </div>
      <!-- 箭头 -->
      <div @click="jtClick" class="jianTou"></div>
    </div>
    <!-- 左侧模块按钮展开 -->
    <transition name="transitionLeft">
      <div class="leftBtn leftBtn2" v-show="showTJ && showXX">
        <div class="btnBlock">
          <div
            class="btnItem"
            @click="inquire"
            :class="btnIndex == 0 ? 'btnItem2' : ''"
          >
            <span>查询</span>
          </div>
        </div>
        <!-- 箭头 -->
        <div @click="jtClick" class="jianTou jianTou2"></div>
      </div>
    </transition>
    <transition name="transitionLeft">
      <div class="tiaoJian" v-show="showTJ && showXX">
        <div class="tjTT">
          <span>条件选择</span>
        </div>
        <div class="new_block">
          <!-- 设备类型 -->
          <div class="tjBlock">
            <div class="tops">设备类型</div>
            <div class="bottoms">
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
          <!-- 统计类型 -->
          <div class="tjBlock">
            <div class="tops">统计类型</div>
            <div class="bottoms">
              <div class="inputs">
                <el-select
                  v-model="cj_value"
                  @visible-change="cjClick"
                  placeholder=""
                >
                  <el-option
                    v-for="item in chuangjian"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
                <img v-show="!cj_show" src="./img/xia.png" />
                <img v-show="cj_show" src="./img/shang.png" />
              </div>
            </div>
          </div>
          <!-- 频率 -->
          <div class="tjBlock">
            <div class="tops">频率</div>
            <div class="bottoms">
              <div class="inputs">
                <el-select
                  v-model="jd_value"
                  @visible-change="jdClick"
                  placeholder=""
                >
                  <el-option
                    v-for="item in jiedian"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
                <img v-show="!jd_show" src="./img/xia.png" />
                <img v-show="jd_show" src="./img/shang.png" />
              </div>
            </div>
          </div>
          <!-- 投运日期 -->
          <div class="tjBlock">
            <div class="tops">投运日期</div>
            <div class="bottoms">
              <div class="inputs">
                <el-date-picker
                  v-model="value1"
                  @change="dateClick"
                  value-format="yyyy-MM-dd"
                  type="date"
                  placeholder="选择投运运日期"
                >
                </el-date-picker>
              </div>
            </div>
          </div>
          <!-- 退运日期 -->
          <div class="tjBlock">
            <div class="tops">退运日期</div>
            <div class="bottoms">
              <div class="inputs">
                <el-date-picker
                  v-model="value2"
                  @change="dateClick2"
                  value-format="yyyy-MM-dd"
                  type="date"
                  placeholder="选择退运日期"
                >
                </el-date-picker>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <!-- 右侧列表模块 -->
    <transition name="transitionRight">
      <!-- <div
        class="rightBtn"
        :class="showRZK ? 'rightBtn2' : ''"
        v-show="showRight && !showRZK && showDemo && showXX"
      ></div> -->
      <div class="wuli" v-show="showRight && !showRZK && showDemo && showXX">
        <div class="jcxx">
          <div class="dxtms" @click="changeDXT"></div>
          <div class="j_titles">
            <span class="span1">{{ span1 }}</span>
            <span class="span2" @click="spanClick">{{ span2 }}</span>
          </div>
          <div class="kong"></div>
          <!-- 统计数据展示 -->
          <div class="jc_echarts" v-show="showSpan == 0">
            <xt3 />
          </div>
          <!-- 数据明细 -->
          <div class="jc_echarts" v-show="showSpan == 1">
            <sjmxTable />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import xt3 from "./echarts/xt3.vue";
import sjmxTable from "./table/sjmxTable.vue";
export default {
  name: "newLieBiao",
  watch: {
    zfType_value(e, f) {
      this.getDateLists();
    },
    oam_value(e, f) {
      this.getDateLists();
    },
    oam_value2(e, f) {
      this.getDateLists();
    },
    dy_value(e, f) {
      this.getDateLists();
    },
    cj_value(e, f) {
      this.getDateLists();
    },
    jd_value(e, f) {
      this.getDateLists();
    },
    dd_value(e, f) {
      this.getDateLists();
    },
    search(e, f) {
      this.getDateLists();
    },
    search2(e, f) {
      this.getDateLists();
    },
    jdmc(e, f) {
      this.getDateLists();
    },
    qdmc(e, f) {
      this.getDateLists();
    },
    zdmc(e, f) {
      this.getDateLists();
    },
  },
  components: {
    xt3,
    sjmxTable,
  },
  data() {
    return {
      showXX: true,
      showDemo: true,
      showTJ: false,
      btnIndex: -1, //是否选中按钮
      // 电缆名称
      jdmc: "",
      // 起点名称
      qdmc: "",
      // 终点名称
      zdmc: "",

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
      //终端名称
      search: "",
      // 所属线路
      search2: "",
      // ----------------------------模型----------------------------------
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
      // ---------------------------截面类型-------------------------------
      // ----------------------------模型----------------------------------
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
      oam_value2: "",
      oam_show2: false,
      // ------------------------------电压--------------------------
      dianya: [
        {
          value: "全站",
          label: "全站",
        },
        {
          value: "1号主变",
          label: "1号主变",
        },
        {
          value: "2号主变",
          label: "2号主变",
        },
      ],
      dy_value: "",
      dy_show: "",
      // --------------------------模型状态---------------------------
      chuangjian: [
        {
          value: "负载率",
          label: "负载率",
        },
        {
          value: "轻载次数",
          label: "轻载次数",
        },
        {
          value: "重载次数",
          label: "重载次数",
        },
        {
          value: "过载次数",
          label: "过载次数",
        },
      ],
      cj_value: "",
      cj_show: false,
      // --------------------------节点状态---------------------------
      jiedian: [
        {
          value: "日内",
          label: "日内",
        },
        {
          value: "日度",
          label: "日度",
        },
        {
          value: "月度",
          label: "月度",
        },
        {
          value: "年度",
          label: "年度",
        },
      ],
      jd_value: "",
      jd_show: false,
      // 数据来源----------------------------------
      dd: [
        {
          value: "中台数据",
          label: "中台数据",
        },
        {
          value: "外部数据",
          label: "外部数据",
        },
        {
          value: "",
          label: "全部",
        },
      ],
      dd_value: "",
      dd_show: false,
      // -------------------------------列表数据-----------------------------
      dataList: [{}],
      tableColumnList: [{ propName: "1111" }],
      tableColumnList2: [],
      tableColumnList3: [],
      tableColumnList4: [], //存放接口数据 收缩表头
      tableColumnList5: [], //存放接口数据 展开表头
      // -----------------------------------------------------------------------
      showRight: false, //是否显示右侧列表
      showSelect: false, //是否显示复选框
      showRZK: false, //是否展开右侧列表
      selectList: [], //复选数组
      page: 1,
      page1: 1,
      total: 0,
      value1: "",
      value2: "",
      span1: "统计数据展示", //统计数据展示
      span2: "数据明细", //数据明细
      showSpan: 0, //0：统计数据展示  1：数据明细
    };
  },
  deactivated() {
    this.zfType_value = "";
    this.search = "";
    this.oam_value = "";
    this.dy_value = "";
    this.cj_value = "";
    this.dd_value = "";
    this.page = 1;
    this.page1 = 1;
  },
  mounted() {
    let that = this;
    that.$bus.$on("leixChaXun", () => {
      that.getDateLists();
    });
  },
  methods: {
    //  0 切换成大图模式, 1 切换成大图模式
    changeDXT() {
      this.$emit("changeDXT2", 0);
    },
    // 返回默认页面
    fhMrClick() {
      //   this.$router.push({
      //     path: "/mr",
      //   });
      this.$emit("goJiBen");
    },
    sfxxClick() {
      this.showXX = !this.showXX;
    },
    // 是否展开左侧
    jtClick() {
      this.showTJ = !this.showTJ;
    },

    zfTypeClick(e) {
      this.zfType_show = e;
    },
    oamClick(e) {
      this.oam_show = e;
    },
    oamClick2(e) {
      this.oam_show2 = e;
    },
    dyClick(e) {
      this.dy_show = e;
    },
    cjClick(e) {
      this.cj_show = e;
    },
    jdClick(e) {
      this.jd_show = e;
    },
    ddClick(e) {
      this.dd_show = e;
    },
    // 查询方法
    inquire() {
      // 请求接口
      if (this.btnIndex == 0) {
        this.btnIndex = -1;
        this.showRight = false;
      } else {
        this.showSelect = false;
        this.btnIndex = 0;
        this.showRight = true;
        if (this.showTJ == false) {
          this.showTJ = true;
        }
        // this.getDateLists(0);
      }
    },
    // 投运日期
    dateClick(e) {
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
    // 退运日期
    dateClick2(e) {
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
    spanClick() {
      if (this.span2 == "统计数据展示") {
        this.span1 = "统计数据展示";
        this.span2 = "数据明细";
        this.showSpan = 0;
      } else {
        this.span1 = "数据明细";
        this.span2 = "统计数据展示";
        this.showSpan = 1;
      }
    },
  },
};
</script>
<style>
/* 分页器样式自定义 */
.el-pagination__total {
  font-family: SourceHanSansSC-Regular;
  font-size: 12px;
  font-weight: normal;
  color: #f6f6f6;
}
.el-pagination button:disabled {
  background: transparent;
}
.el-pagination .btn-next .el-icon,
.el-pagination .btn-prev .el-icon {
  color: #fff !important;
  font-size: 14px;
  font-weight: 900;
}
.el-pagination .btn-next,
.el-pagination .btn-prev {
  background: transparent;
}
.el-pager li {
  background-color: transparent;
  font-size: 12px;
  font-weight: normal;
  color: #ffffff;
}
.el-pager li.active {
  width: 32px;
  height: 31.89px;
  background: rgba(11, 77, 88, 0.5);
  color: rgba(255, 255, 255, 1);
}
.el-pager li:hover {
  color: rgba(255, 255, 255, 1);
}
.el-pager li.btn-quicknext,
.el-pager li.btn-quickprev {
  color: rgba(255, 255, 255, 1);
}
.el-popper[x-placement^="bottom"] {
  margin-top: 4px !important;
}
</style>
<style>
.el-table,
.el-table__expanded-cell {
  background-color: transparent;
}
.el-table th {
  background-color: transparent;
}
.el-table tr {
  background-color: transparent;
}
.el-table--enable-row-transition .el-table__body td,
.el-table .cell {
  background-color: transparent !important;
}
.current-row {
  background: url("img/td2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.el-table::before {
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0px;
}
/* 用来设置当前页面element全局table 鼠标移入某行时的背景色*/
.el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: transparent !important;
  /* color: #f19944; */ /* 设置文字颜色，可以选择不设置 */
}

.el-table td.el-table__cell,
.el-table th.el-table__cell.is-leaf {
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.el-table__header tr,
.el-table__header th {
  height: 39.8px !important;
  background: rgba(25, 61, 112, 0.5) !important;
  font-family: SourceHanSansSC-Regular;
  font-size: 16px;
  font-weight: normal;
  color: #ffffff;
}
.el-table__body tr,
.el-table__body td {
  font-family: SourceHanSansSC-Regular;
  height: 48px !important;
  font-size: 16px;
  font-weight: normal;
  color: rgba(255, 255, 255, 0.7);
}
.el-checkbox__inner {
  background-color: #155589;
  border: 1px solid #155589;
}
.el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #10acff;
  border: 1px solid #10acff;
}
</style>

<style scoped>
::v-deep .el-select > .el-input > .el-input__inner {
  line-height: 40px !important;
}
.newLieBiao {
  width: 100%;
  height: 100%;
  position: relative;
  left: 0;
  top: 0;
}
.zuo {
  width: 387px;
  height: 1080px;
  position: absolute;
  left: 0;
  top: 0;
  background: url("img/zuo.png") no-repeat !important;
  background-size: 100% 100% !important;
  z-index: -1;
}
.leftBtn {
  width: 191px;
  height: 704px;
  position: absolute;
  left: 0;
  top: 187px;
  background: url("img/leftBtn.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.leftBtn2 {
  left: 212px !important;
}
.btnBlock {
  width: 107px;
  height: 101px;
  position: absolute;
  left: 43px;
  top: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.btnBlock > .btnItem {
  width: 107px;
  height: 48px;
  background: url("img/btnItem2.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.btnItem2 {
  background: url("img/btnItem.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.btnBlock > .btnItem > span {
  font-family: SourceHanSansSC-Medium;
  font-size: 24px;
  font-weight: normal;

  background-image: -webkit-linear-gradient(
    bottom,
    #ffffff 40%,
    #61b3ff 100%
  ) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
}
.jianTou {
  width: 28px;
  height: 72px;
  position: absolute;
  right: 7px;
  top: 308px;
  background: url("img/right.png") no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
}
.jianTou2 {
  background: url("img/left.png") no-repeat !important;
  background-size: 100% 100% !important;
}
</style>
<style scoped>
.tiaoJian {
  width: 224px;
  height: 548px;
  position: absolute;
  left: 7px;
  top: 278px;
  background: url("img/tjBtn.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.new_block {
  width: 100%;
  height: 467px;
  overflow-y: scroll;
}
.new_block::-webkit-scrollbar {
  display: none;
}
.tjTT {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: flex-end;
}
.tjTT > span {
  margin-left: 46px;
  font-family: YouSheBiaoTiHei;
  font-size: 30px;
  font-weight: normal;
  background-image: -webkit-linear-gradient(
    bottom,
    #6bedff,
    #ffffff
  ) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
}
</style>
<style scoped>
.tjBlock {
  width: 182px;
  height: 58px;
  margin-left: 25px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.tjBlock > .tops {
  font-family: SourceHanSansSC-Regular;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 0em;
  color: rgba(255, 255, 255, 0.7);
}
.tjBlock > .bottoms {
  width: 181px;
  height: 34px;
}

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
  top: 14px;
  right: 8.8px;
  width: 14px;
  height: 8px;
}
</style>
<style scoped>
.rightBtn {
  width: 398px;
  height: 918px;
  position: absolute;
  right: 10px;
  top: 140px;
  background: url("img/mxBtn.png") no-repeat;
  background-size: 100% 100%;
}
.rightBtn2 {
  width: 1433px !important;
  background: url("img/mxBtn2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.jt {
  width: 55px;
  height: 53px;
  position: absolute;
  left: 10px;
  top: 0;
  background: url("img/jt.png") no-repeat !important;
  background-size: 100% 100% !important;
}

.mxTT {
  width: 100%;
  height: 46px;
  display: flex;
  align-items: flex-end;
  position: absolute;
  left: 55px;
  top: 0;
}
.mxTT > span {
  font-family: YouSheBiaoTiHei;
  font-size: 30px;
  font-weight: normal;
  background-image: -webkit-linear-gradient(
    bottom,
    #6bedff,
    #ffffff
  ) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
}
.t_bg {
  width: 98%;
  height: 800px;
  margin-left: 1%;
  margin-top: 65px;
}
</style>
<style scoped>
.p_block {
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  bottom: 10px;
}
</style>
<style scoped>
.rkg {
  width: 18px;
  height: 142px;
  position: absolute;
  left: -17px;
  top: 392px;
  background: url("img/rkg.png") no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
}
.rkg2 {
  background: url("img/rkg2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
</style>
<style scoped>
.queDingBtn {
  width: 181px;
  height: 37px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 120px;
  bottom: 67px;
}
.queDingBtn2 {
  left: 640px !important;
}
.queDingBtn > .queBlock {
  width: 83px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("img/que.png") no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
}
.queDingBtn > .queBlock > span {
  font-family: SourceHanSansSC-Medium;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0px;
  color: #bebebe;
}
.queDingBtn > .queBlock:hover {
  background: url("img/que2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.queDingBtn > .queBlock:hover > span {
  color: #fff !important;
}
</style>
<style>
.fh_mr {
  width: 71px;
  height: 31px;
  position: absolute;
  top: 46px;
  right: 125px;
  background: url("img/fh_mr.png") no-repeat !important;
  background-size: 100% 100% !important;
  cursor: pointer;
}

.xxsf {
  width: 98.5px;
  height: 31px;
  position: absolute;
  right: 9px;
  top: 46px;
  background: url("img/zk.png") no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
}
.xxsf2 {
  background: url("img/zd.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.s_show1 {
  width: 18px;
  height: 142px;
  background: url("img/shou1.png") no-repeat !important;
  background-size: 100% 100% !important;
  position: absolute;
  top: 493px;
  left: 0px;
}
.s_show2 {
  width: 18px;
  height: 142px;
  background: url("img/shou2.png") no-repeat !important;
  background-size: 100% 100% !important;
  position: absolute;
  top: 493px;
  right: 0px;
}
</style>
<style scoped>
.jcxx {
  width: 100%;
  height: 388px;
  background: url("img/jbg.png") no-repeat !important;
  background-size: 100% 100% !important;
  position: relative;
}
.dxtms {
  width: 82px;
  height: 28px;
  position: absolute;
  top: 6px;
  right: 7px;
  background: url("img/xtms.png") no-repeat !important;
  background-size: 100% 100% !important;
  z-index: 8;
  cursor: pointer;
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
.j_titles > .span1 {
  font-family: Source Han Sans SC;
  font-size: 20px;
  font-weight: normal;
  color: #ffffff;
  margin-left: 18px;
}
.j_titles > .span2 {
  margin-left: 21px;
  font-family: Source Han Sans CN;
  font-size: 16px;
  font-weight: normal;
  color: #cbc9c9;
  cursor: pointer;
}
.jc_echarts {
  width: 100%;
  height: 348px;
}
.wuli {
  width: 379px;
  height: 90%;
  position: fixed;
  right: 11px;
  top: 125px;
}
.kong {
  width: 100%;
  height: 40px;
}
</style>
