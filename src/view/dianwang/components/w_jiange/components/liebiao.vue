<template>
  <div class="shaiXuan">
    <!-- <div class="bg"></div> -->
    <div class="condition">
      <div class="tops">
        <img class="titles" src="./img/title1.png" />
        <div class="btns">
          <div class="btnItem" @click="inquire">
            <span>查询</span>
          </div>
          <div class="btnItem" @click="createClick">
            <span>创建</span>
          </div>
          <div class="btnItem" @click="repossess">
            <span>发布</span>
          </div>
          <div class="btnItem" @click="deleteClick">
            <span>删除</span>
          </div>
        </div>
      </div>
      <div class="c_items">
        <div class="c_block">
          <div class="names">
            <span>间隔类型</span>
            <div class="inputs">
              <el-select
                v-model="jiange_value"
                @visible-change="jiangeClick"
                placeholder=""
              >
                <el-option
                  v-for="item in jiange"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <img v-show="!jiange_show" src="./img/xia.png" />
              <img v-show="jiange_show" src="./img/shang.png" />
            </div>
          </div>
          <!-- 间隔名称 -->
          <div class="names">
            <span>间隔名称</span>
            <div class="inputs">
              <input placeholder="" v-model="search" />
            </div>
          </div>

          <!-- 模型状态 -->
          <div class="names">
            <span>模型状态</span>
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
      </div>
    </div>

    <div class="tables">
      <div class="titlesBg">
        <span>间隔明细</span>
      </div>
      <div class="t_bg">
        <el-table
          v-if="dataList.length < 1"
          ref="multipleTable"
          :data="dataList"
          :key="timeStap"
          tooltip-effect="dark"
          class="e_tables"
          highlight-current-row
          @current-change="handleCurrentChange"
          @row-click="hangClick"
          @row-contextmenu="unHangClick"
          @select="s_Click"
          @select-all="s_all_Click"
          key="geng25"
        >
          <el-table-column
            align="center"
            :label="item.propName"
            :property="item.prop"
            v-for="item in tableColumnList2"
            :key="item.prop"
            min-width="20"
            show-overflow-tooltip
          >
            <template slot-scope="scope">
              <span>{{ scope.row[scope.column.property] }}</span>
            </template>
          </el-table-column>
        </el-table>
        <el-table
          v-if="dataList.length > 0"
          ref="multipleTable"
          :data="dataList"
          :key="timeStap"
          tooltip-effect="dark"
          class="e_tables"
          highlight-current-row
          @current-change="handleCurrentChange"
          @row-click="hangClick"
          @row-contextmenu="unHangClick"
          @select="s_Click"
          @select-all="s_all_Click"
          key="geng26"
        >
          <el-table-column
            align="center"
            :label="item.propName"
            :property="item.prop"
            v-for="item in tableColumnList"
            :key="item.prop"
            min-width="20"
            show-overflow-tooltip
          >
            <template slot-scope="scope">
              <span>{{ scope.row[scope.column.property] }}</span>
            </template>
          </el-table-column>
        </el-table>
        <div class="p_block">
          <el-pagination
            layout="total,prev, pager, next"
            :page-size="6"
            :total="total"
            @current-change="pageClick"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "shaiXuan",

  mounted() {
    let that = this;
    that.$bus.$on("getSelect", () => {
      that.dataList = [];
      that.tableColumnList = [];

      that.getDateLists();
    });
    that.$bus.$on("initItem", () => {
      that.dataList = [];
      that.tableColumnList = [];
    });
  },
  data() {
    return {
      currentIndex: -1,

      search: "", //名称
      search2: "", //所属电站
      dataList: [{}],
      tableColumnList: [{}],
      tableColumnList2: [
        { propName: "间隔类型" },
        { propName: "间隔名称" },
        { propName: "装机容量" },
        { propName: "投运日期" },
        { propName: "退运日期" },
      ],
      // 站房类型
      jiange: [
        {
          value: "进线单元",
          label: "进线单元",
        },
        {
          value: "出线单元",
          label: "出线单元",
        },
        {
          value: "变压器单元",
          label: "变压器单元",
        },
        {
          value: "母线单元",
          label: "母线单元",
        },
        {
          value: "",
          label: "全部",
        },
      ],
      jiange_value: "",
      jiange_show: false,
      //   --------------------------网络 -------------------------------
      wangluo: [],
      wl_value: "",
      wl_show: false,
      // ----------------------------模型----------------------------------
      moxings: [],
      mx_value: "",
      mx_show: false,
      // ----------------------------模型----------------------------------
      oam: [
        {
          value: 0,
          label: "国网安新县供电公司",
        },
        {
          value: 1,
          label: "国网雄安新区供电公司本部",
        },
        {
          value: 2,
          label: "电网管理中心",
        },
        {
          value: 3,
          label: "国网容城县供电公司",
        },
        {
          value: 4,
          label: "国网雄县供电公司",
        },
      ],
      oam_value: "",
      oam_show: false,
      // ------------------------------所属调度-------------------------
      dd: [
        {
          value: null,
          label: "全部",
        },
        {
          value: 0,
          label: "县调",
        },
        {
          value: 1,
          label: "国调",
        },
        {
          value: 2,
          label: "分中心",
        },
        {
          value: 3,
          label: "省(直辖市、自治区)调",
        },
        {
          value: 4,
          label: "地调",
        },
        {
          value: 5,
          label: "其他",
        },
      ],
      dd_value: "",
      dd_show: false,
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
      // --------------------------模型状态---------------------------
      chuangjian: [
        {
          value: "未创建",
          label: "未创建",
        },
        {
          value: "已创建",
          label: "已创建",
        },
        {
          value: "已发布",
          label: "已发布",
        },
        {
          value: "",
          label: "全部",
        },
      ],
      cj_value: "",
      cj_show: false,

      tableData: [],
      multipleSelection: [],
      selectList: [], //复选数组
      page: 1,
      total: 0,
      timeStap: "",
    };
  },
  deactivated() {
    this.jiange_value = "";
    this.search = "";
    this.cj_value = "";
    this.page = 1;
  },
  methods: {
    listClick(e, f) {
      if (this.currentIndex != f) {
        this.currentIndex = f;
      } else {
        this.currentIndex = -1;
      }
    },
    jiangeClick(e) {
      this.jiange_show = e;
    },
    oamClick(e) {
      this.oam_show = e;
    },
    mxClick(e) {
      this.mx_show = e;
    },
    dyClick(e) {
      this.dy_show = e;
    },
    ddClick() {
      this.dd_show = e;
    },
    cjClick(e) {
      this.cj_show = e;
    },
    pageClick(e) {
      this.page = e;
      this.getDateLists();
    },

    // 点击单行
    hangClick(e) {
      let that = this;
      setTimeout(() => {
        that.$bus.$emit("hangObj", e);
      }, 50);

      that.$emit("isShowItem", e.sssb);
      let v = {
        FocusTarget: {
          target: "MInterval",
          ID: e.sssb,
          FocusType: true,
          IntervalInfoindex: 1,
          IDType: "MInterval",
        },
      };
      let data = {
        functionName: "FocusTower",
        backFunctionName: "",
        functionParameters: [
          {
            key: "FocusTarget",
            value: JSON.stringify(v),
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
    },
    // 右键清除选中
    unHangClick() {
      this.$refs.multipleTable.setCurrentRow();
    },
    // 点击单选
    s_Click(e) {
      let data = e;
      for (let i = 0; i < data.length; i++) {
        this.selectList.push(data[i].sssb);
      }
      this.selectList = Array.from(new Set(this.selectList));
    },
    // 点击全选
    s_all_Click(e) {
      let data = e;
      for (let i = 0; i < data.length; i++) {
        this.selectList.push(data[i].sssb);
      }
    },

    handleCurrentChange(val) {
      this.multipleSelection = val;
    },

    // 查询方法
    inquire() {
      //  this.getRealTimeAlarm.serverParameter.Body = JSON.stringify(a);
      // 1.获取入参名称、网络、模型、电压范围、是否创建
      // 假数据

      // 请求接口
      this.getDateLists(0);
    },
    // 获取数据列表
    getDateLists(e) {
      if (e == 0) {
        this.page = 1;
      } else {
      }
      let v;
      if (window.isXZ == 1) {
        v = {
          search: {
            target: "MInterval",
            key: {
              params: [
                {
                  key: "jglx",
                  value: this.jiange_value,
                },
                {
                  key: "jgmc",
                  value: this.search,
                },
                {
                  key: "fbzt",
                  value: this.cj_value,
                },
                {
                  key: "sfxzdw",
                  value: window.isXZ,
                },
              ],
              page: this.page,
              pageSize: 6,
              expansionData:
                "AND tuiyrq >=  '" +
                window.xzRiQi +
                "' and  tyrq <='" +
                window.xzRiQi +
                "'",
            },
          },
        };
      } else {
        v = {
          search: {
            target: "MInterval",
            key: {
              params: [
                {
                  key: "jglx",
                  value: this.jiange_value,
                },
                {
                  key: "jgmc",
                  value: this.search,
                },
                {
                  key: "fbzt",
                  value: this.cj_value,
                },
                {
                  key: "sfxzdw",
                  value: window.isXZ,
                },
              ],
              page: this.page,
              pageSize: 6,
            },
          },
        };
      }

      let data = {
        functionName: "Search",
        backFunctionName: "setList",
        functionParameters: [
          {
            key: "search",
            value: JSON.stringify(v),
          },
        ],
      };
      this.selectList = [];

      ue.interface.broadcast("PSAPI", JSON.stringify(data));
      window.ue.interface.setList = this.setList;
    },
    // 获取数据列表回调
    setList(e) {
      let data = JSON.parse(e);
      let data2 = JSON.parse(data.value);
      this.total = parseInt(data2.total);
      this.dataList = data2.dataList;
      this.tableColumnList = data2.tableColumnList;

      this.$forceUpdate();
    },
    // 发布方法
    repossess() {
      if (this.selectList.length > 0) {
        let node = this.selectList;
        let data = {
          action: "power.publish",
          callback: "publish",
          params: {
            nodes: node,
          },
        };
        ue.interface.broadcast("power.publish", JSON.stringify(data));
        window.ue.interface.publish = this.publish;
      } else {
      }
    },
    publish() {
      this.dataList = [];
      this.tableColumnList = [];

      this.getDateLists();
    },
    // 连线方法
    lianClick() {
      this.setLian();
    },
    setLian() {
      let node = this.selectList;
      let data = {
        action: "power.connect",
        callback: "connect",
        params: {
          nodes: node,
        },
      };
      ue.interface.broadcast("power.connect", JSON.stringify(data));
      window.ue.interface.connect = this.connect;
    },
    // 断线方法
    duanClick() {
      this.setDuan();
    },
    setDuan() {
      let node = this.selectList;
      let data = {
        action: "power.disconnect",
        callback: "disconnect",
        params: {
          nodes: node,
        },
      };
      ue.interface.broadcast("power.disconnect", JSON.stringify(data));
      window.ue.interface.disconnect = this.disconnect;
    },
    // ----------------------------------------------创建方法---------------
    createClick() {
      if (this.selectList.length > 0) {
        // 发送消息
        this.setCreates();
      } else {
      }
    },
    setCreates() {
      let node = this.selectList;
      let data = {
        action: "power.create",
        callback: "create",
        params: {
          nodes: node,
        },
      };
      ue.interface.broadcast("power.create", JSON.stringify(data));
      window.ue.interface.create = this.create;
    },
    create(e) {
      this.dataList = [];
      this.tableColumnList = [];

      this.getDateLists();
    },
    // ---------------------------------删除方法-------------------
    deleteClick() {
      if (this.selectList.length > 0) {
        // 发送消息
        this.setDeletes();
      } else {
      }
    },
    setDeletes() {
      let node = this.selectList;
      let data = {
        action: "power.remove",
        callback: "delete",
        params: {
          nodes: node,
        },
      };
      ue.interface.broadcast("power.remove", JSON.stringify(data));
      window.ue.interface.delete = this.delete;
    },
    delete(e) {
      this.dataList = [];
      this.tableColumnList = [];

      this.getDateLists();
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
/* 表格样式 */
.e_tables {
  width: 100%;
  height: 524px;
  /* margin-top: 18.05px; */
}
.tiDai {
  width: 100%;
  height: 524px;
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
.shaiXuan {
  width: 100%;
  height: 100%;
  position: relative;
}
.bg {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: url("img/sx.png") no-repeat !important;
  background-size: 100% 100% !important;
  z-index: -1;
}
.span1 {
  color: rgba(255, 255, 255, 0.7) !important;
}
</style>
<style scoped>
.t_bg {
  width: 100%;
  height: 346px;
  margin-top: 18.05px;
  background: url("img/bg2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.condition {
  width: 1883.46px;
  height: 138px;
  margin-left: 18.15px;
  padding-top: 111.27px;
  margin-bottom: 0px;
  margin-top: 370px;
}
.tops {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.titles {
  width: 227.1px;
  height: 39.9px;
}
.titlesBg {
  width: 227.1px;
  height: 39.9px;
  background: url("img/zf.png") no-repeat !important;
  background-size: 100% 100% !important;
  display: flex;
  align-items: center;
}
.titlesBg > span {
  font-family: YouSheBiaoTiHei;
  font-size: 30px;
  margin-left: 44px;
  background-image: -webkit-linear-gradient(
    bottom,
    #6bedff,
    #ffffff
  ) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
}
.c_items {
  width: 100%;
  height: 67px;
  background: url("img/bg.png") no-repeat !important;
  background-size: 100% 100% !important;
  margin-top: 13px;
}
.c_items > .c_block {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
.margintop {
  padding-top: 8px;
}
.margintop2 {
  margin-top: -18px;
}
.names {
  width: 294px;
  height: 36px;
  margin-left: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.wangluo {
  width: 294px;
  height: 36px;
  margin-left: 70.34px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.dianya {
  width: 294px;
  height: 36px;
  margin-left: 70.34px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.dianya > .d_blocks {
  width: 158.94px;
  height: 36px;
  background: url("img/ip.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.chuangjian {
  width: 297px;
  height: 36px;
  margin-left: 70.34px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.names > span,
.wangluo > span,
.dianya > span,
.chuangjian > span {
  font-family: SourceHanSansCN-Medium;
  font-size: 16px;
  font-weight: normal;
  letter-spacing: 0em;
  color: rgba(255, 255, 255, 0.7);
}

.inputs {
  width: 220px;
  height: 36px;
  background: url("img/ip.png") no-repeat !important;
  background-size: 100% 100% !important;
  position: relative;
}
.inputs > img {
  position: absolute;
  top: 14px;
  right: 8.8px;
  width: 14px;
  height: 8px;
}
.btns {
  width: 406px;
  height: 36px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}
.btns > .btnItem {
  width: 90px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("img/btn1.png") no-repeat;
  background-size: 100% 100%;
}
.btns > .btnItem > span {
  font-family: SourceHanSansCN-Medium;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0px;
  color: #ffffff;
}
.btns > .btnItem:hover {
  background: url("img/btn2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
</style>
<style scoped>
.tables {
  width: 1883.46px;
  height: 688px;
  margin-left: 18.15px;
}
.t_items {
  width: 100%;
  height: 630px;
  background: url("img/bg2.png") no-repeat !important;
  background-size: 100% 100% !important;
  margin-top: 18.05px;
}
</style>
<style scoped>
.tds {
  width: 100%;
  height: 36px;
  display: flex;
  background: url("img/td.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.tr1 {
  width: 100px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tr2 {
  width: 200px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tr3 {
  width: 152px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tr4 {
  width: 140px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tr5 {
  width: 250px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tr6 {
  width: 90px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tr7 {
  width: 300px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tr1 > span,
.tr2 > span,
.tr3 > span,
.tr4 > span,
.tr5 > span,
.tr6 > span,
.tr7 > span {
  font-family: SourceHanSansCN-Regular;
  font-size: 16px;
  font-weight: normal;
  letter-spacing: 0em;
  color: #ffffff;
}
.t_blcok::-webkit-scrollbar {
  display: none; /*隐藏滚动条*/
}
.t_blcok {
  width: 100%;
  height: 488px;
  overflow-x: hidden;
  overflow-y: scroll;
}
.t_td {
  width: 100%;
  height: 48.49px;
  position: relative;
  display: flex;
}
.t_td > .xia {
  width: 100%;
  height: 1px;
  opacity: 0.2;
  background: rgba(255, 255, 255, 0.5);
  position: absolute;
  left: 0;
  bottom: 0;
}
.t_td2 {
  width: 100%;
  height: 50.66px;
  background: url("img/td2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
</style>
<style scoped>
.p_block {
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  bottom: 10px;
}
</style>
